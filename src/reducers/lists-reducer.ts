import type { ListType } from "../types/list";
import type { ListItemType } from "../types/list-item";
import type {Draft} from "immer";
import {arrayMove} from "@dnd-kit/sortable";

export type ListsAction =
| {
    type: "list_created";
    list: ListType;
}

| {
    type: "list_dragged_end";
    activeListIndex: number;
    overListIndex: number;
}

| {
    type: "item_created";
    listIndex: number;
    item: ListItemType;
}

| {
    type: "item_removed";
    listIndex: number;
    itemIndex: number;
}

| {
    type: "item_dragged_over";
    activeListIndex: number;
    activeItemIndex: number;
    overListIndex: number;
    overItemIndex?: number;
}

| {
    type: "item_dragged_end";
    activeListIndex: number;
    activeItemIndex: number;
    overItemIndex: number;
};

export function listsReducer(
    draft: Draft<ListType[]>,
    action: ListsAction,
): void{
    console.log("listsReducer action:", action);

    switch(action.type){

        case "list_created":
        {
            draft.push(action.list);

            return;
        }

        case "list_dragged_end":
        {
            const { activeListIndex, overListIndex} = action;

            if(activeListIndex === overListIndex){
                return;
            }

            const activeList = draft[activeListIndex];

            draft.splice(activeListIndex, 1); //اول پاک میکنیم
            draft.splice(overListIndex, 0, activeList) // بعد اضافه می کنیم

            return;
        }

        case "item_created":
        {
            // const clone = [...state];

            // const id = globalThis.crypto.randomUUID();
            // clone[0] = {...clone[0], items: [...clone[0].items, {id, title: id}]};

            // save(clone);
            // return clone;
            const list = draft[action.listIndex];
            list.items.push(action.item);

            return;

        }

        case "item_removed":
        {
            const list = draft[action.listIndex];
            list.items.splice(action.itemIndex, 1);

            return;

        }

        case "item_dragged_over":
        {
            const {activeListIndex, activeItemIndex, overItemIndex, overListIndex} = action;

            if(activeListIndex === overListIndex){
                return;
            }

            const activeList = draft[activeListIndex];
            const activeItem =  activeList.items[activeItemIndex];
            const overList =  draft[overListIndex];

            const newIndex = overItemIndex ?? overList.items.length; /* حواست باشه ها اگه اندیفایند بود بیا به انتهای ارایه که overList.items.length انتهای ارایه است*/

            overList.items.splice(newIndex, 0, activeItem);
            activeList.items.splice(activeItemIndex, 1);

            return;
        }

        case "item_dragged_end":
        {
            const { activeListIndex, activeItemIndex, overItemIndex} = action;

            if(activeItemIndex === overItemIndex){
                return;
            }

            const activeList = draft[activeListIndex];
            activeList.items = arrayMove(
                activeList.items,
                activeItemIndex,
                overItemIndex,
            );

            return;
        }
        default: {
            throw new Error("Unknown action.")

        }
    }
}