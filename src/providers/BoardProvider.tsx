import {type ReactNode, type PropsWithChildren, useEffect, useReducer} from "react";
import { BoardContext } from "../context/board-context";
import type { ListType } from "../types/list";
import { listsData } from "../data/lists-data";
import { listsReducer } from "../reducers/lists-reducer";
import type { ListItemType } from "../types/list-item";

type Props = PropsWithChildren;

function save(lists: ListType[]): void{
    localStorage.setItem("lists", JSON.stringify(lists));
}

function load(): ListType[] {
    const item = localStorage.getItem("lists");

    if(! item){
        return listsData;
    }

    return JSON.parse(item);
}

export default function BoardProvider({children}: Props): ReactNode {
    // const [lists, setLists] = useState<ListType[]>(load);

    const [lists, dispatchLists] = useReducer(listsReducer, load());

    useEffect(() => {
        save(lists)
    }, [lists]);

    // const create = (listId: string, item: ListItemType): void => {
    //     dispatch({type: "created", listId, item});
    // }

    // const move = (fromListId: string, itemId: string, toListId: string): void => {
    //     dispatch({type: "moved", fromListId, itemId, toListId});   
    // }

    // const remove = (listId: string, itemId: string): void => {
    //     dispatch({type: "removed", listId, itemId})
    // }

    return(
        <BoardContext value={{lists, dispatchLists}}>
            {children}
        </BoardContext>
    )

}