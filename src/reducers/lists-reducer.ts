import type { ListType } from "../types/list";
import type { ListItemType } from "../types/list-item";
import type {Draft} from "immer";
import {arrayMove} from "@dnd-kit/sortable";

export type ListsAction =
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
    type: "item_dragged_end";
    activeListIndex: number;
    activeItemIndex: number;
    overItemIndex: number;
}

export function listsReducer(
    draft: Draft<ListType[]>,
    action: ListsAction,
): void{
    console.log("listsReducer action:", action);

    switch(action.type){

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

        case "item_dragged_end":
        {
            const { activeListIndex, activeItemIndex, overItemIndex} = action;

            if(activeListIndex === overItemIndex){
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

        default: 
        {
            throw new Error("Unknown action.")

        }
    }

}