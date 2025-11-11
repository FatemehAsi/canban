import type { ListType } from "../types/list";
import type { ListItemType } from "../types/list-item";
import type {Draft} from "immer";

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

export function listsReducer(
    draft: Draft<ListType[]>,
    action: ListsAction,
): void{
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
        default: 
        {
            throw new Error("Unknown action.")

        }
    }

}