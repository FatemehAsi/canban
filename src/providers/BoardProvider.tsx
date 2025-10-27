import {type ReactNode, type PropsWithChildren, useState, useEffect} from "react";
import { BoardContext } from "../context/board-context";
import type { ListType } from "../types/list";
import { listsData } from "../data/lists-data";

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
    const [lists, setLists] = useState<ListType[]>(load);

    useEffect(() => {
        save(lists)
    }, [lists]);

    const create = (): void => {
        setLists(old => {
            const clone = [...old];

            const id = globalThis.crypto.randomUUID();
            clone[0] = {...clone[0], items: [...clone[0].items, {id, title: id}]};

            // save(clone);
            return clone;
        })
    }

    const move = (fromListId: string, itemId: string, toListId: string): void => {
        setLists((old) => {

                const listIndex = old.findIndex(
                    (list) => list.id === fromListId,
                );

                const toListIndex = old.findIndex(
                    (list) => list.id === toListId,
                );

                if(listIndex === -1 || toListIndex === -1){
                    console.error("Can not find desired list");
                    return old;
                }

                    const clone =[...old];

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
                        return old;
                    }

                    const [item] = list.items.splice(itemIndex, 1);
                    toList.items.push(item);

                    clone[listIndex] = list;
                    clone[toListIndex] = toList;

                    // save(clone);
                    return clone;

            });
    }

    const remove = (listId: string, itemId: string): void => {
        setLists((old) => {
                const listIndex = old.findIndex(
                    (list) => list.id === listId,
                );

                if(listIndex === -1){
                    console.error("Can not find desired list");
                    return old;
                }

                const clone = [...old];
                const list = {
                    ...clone[listIndex],
                    items: [...clone[listIndex].items]

                } 

                const itemIndex = list.items.findIndex(
                    (item) => item.id === itemId,
                );

                if(itemIndex === -1){
                    console.error("Can not find desired item.");
                    return old;
                }
  
                list.items.splice(itemIndex, 1);

                clone[listIndex] = list;
                // save(clone);
                return clone;
                        
        });
    }

    return(
        <BoardContext value={{lists, create, move, remove}}>
            {children}
        </BoardContext>

    )

}