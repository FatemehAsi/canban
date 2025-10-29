import type { ListType } from "../types/list";

type Action =
| {
    type: "created";
}

| {
    type: "moved";
    fromListId: string;
    itemId: string;
    toListId: string;
}

| {
    type: "removed";
    listId: string;
    itemId: string;
}

export function listsReducer(state: ListType[], action: Action): ListType[] {
    switch(action.type){

        case "created":
        {
            const clone = [...state];

            const id = globalThis.crypto.randomUUID();
            clone[0] = {...clone[0], items: [...clone[0].items, {id, title: id}]};

            // save(clone);
            return clone;

        }

        case "moved":
        {
             const { fromListId, itemId, toListId } = action; 

            const listIndex = state.findIndex((list) => list.id === fromListId);
            
            const toListIndex = state.findIndex((list) => list.id === toListId);
            
            if(listIndex === -1 || toListIndex === -1){
                console.error("Can not find desired list");
                return state;
            }
            
            const clone =[...state];
            
            const list = {
                ...clone[listIndex],
                items: [...clone[listIndex].items],
            }
            
            const toList = {
                ...clone[toListIndex],
                items: [...clone[toListIndex].items]
            }
            
            const itemIndex = list.items.findIndex(
                (item) => item.id === itemId,
            );
            
            if(itemIndex === -1){
                console.error("Can not find desired item");
                    return state;
            }
            
            const [item] = list.items.splice(itemIndex, 1);
                toList.items.push(item);
        
                clone[listIndex] = list;
                clone[toListIndex] = toList;
            
                // save(clone);
                return clone;
            }

        case "removed":
        {
            const {listId, itemId} = action;
            
            const listIndex = state.findIndex(
                    (list) => list.id === listId,
            );

                if(listIndex === -1){
                    console.error("Can not find desired list");
                    return state;
                }

                const clone = [...state];
                const list = {
                    ...clone[listIndex],
                    items: [...clone[listIndex].items]

                } 

                const itemIndex = list.items.findIndex(
                    (item) => item.id === itemId,
                );

                if(itemIndex === -1){
                    console.error("Can not find desired item.");
                    return state;
                }
  
                list.items.splice(itemIndex, 1);

                clone[listIndex] = list;
                // save(clone);
                return clone;

        }
        default: 
        {
            throw new Error("Unknown action.")

        }
    }

}