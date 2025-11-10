import { type ActionDispatch, createContext } from "react";

import type { ListType } from "../types/list";
// import type { ListItemType } from "../types/list-item";
import type { ListsAction } from "../reducers/lists-reducer";

// type ContextValue = {
//     lists: ListType[];
//     create: (listID: string, item: ListItemType) => void;
//     move: (fromListId: string, listId: string, toListId: string) => void;
//     remove: (listId: string, itemId: string) => void;
// };

// export const BoardContext = createContext<ContextValue>({
//     lists: [],
//     create: () => {},
//     move: () => {},
//     remove: () => {}, 
// });

type ContextValue = {
    lists: ListType[];
    dispatchLists: ActionDispatch<[action: ListsAction]>;
};

export const BoardContext = createContext<ContextValue>({
    lists: [], 
    dispatchLists: () => {},
});