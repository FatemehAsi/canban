import { ReactNode, useCallback, useEffect, useState } from "react";

import styles from "./Board.module.css";
import IconButton from "../IconButton/IconButton";
import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line";
import MingcuteAddLine from "../../icons/MingcuteAddLine";
// import MingcuteMore1Line from "../../icons/MingcuteMore1Line";
import type { ListType } from "../../types/list";

import List from "../List/List";
// import type { ListItemType } from "../../types/list-item";
import { listsData } from "../../data/lists-data";
import Button from "../Button/Button";

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


export default function Board(): ReactNode{  
    // console.log("render");

    const [lists, setLists] = useState<ListType[]>(load);

    const [activeListId, setActiveListId] = useState<string | null>(null);
    const [activeItemId, setActiveItemId] = useState<string | null>(null);

    useEffect(() => {
        save(lists)
    }, [lists]);

    useEffect(() => {
        const handleDocumentKeyDown = (e: KeyboardEvent): void => {
            // console.log("keydown");

            if(e.code !== "Escape"){
                return;
            }

            setActiveListId(null);
            setActiveItemId(null);
        }

        document.addEventListener("keydown", handleDocumentKeyDown);

        return (): void => {
            document.removeEventListener("keydown", handleDocumentKeyDown);
        };
    }, []);


    // const [todoList, setTodoList] = useState<ListType>();

    //  const [doingList] = useState<ListType>();

    //  const [doneList] = useState<ListType>();

    // const handleEditButtonClick = () : void => {
    //     setTodoList((old) => {
    //         const clone = [...old.items];
    //         clone.splice(1, 1);
    //         return {...old, items: clone}
    //     })

    // };

    // without useMemo(), without useCallback()
    // const handleListItemClick = (id: string) : void => {
    //     setTodoList((old) => {
    //         const clone = [...old.items];
    //         return {...old, items: clone.filter((item) => 
    //         item.id !== id)};
    //     })

    // };

    // with useMemo()
    // const handleListItemClick = useMemo(() => {
    //     return (id: string): void => {
    //         setTodoList((old) => {
    //             const clone = [...old.items];
    //             return {...old, items: clone.filter((item) => 
    //             item.id !== id)};
    //         });
    //     }
    // }, []);

    // with useCallback()
    // const handleListItemClick = useCallback((id: string): void => {
    //     setTodoList((old) => {
    //         const clone = [...old.items];
    //         return{...old, items: clone.filter((item) => item.id !== id)};
    //     })
    // }, []);

     // with useCallback()
    const handleListItemClick = (listId: string, itemId: string): void => {
       setActiveListId(listId);
       setActiveItemId(itemId);
    };

    const handleCreateButtonClick = (): void => {
        setLists(old => {
            const clone = [...old];

            const id = globalThis.crypto.randomUUID();
            clone[0] = {...clone[0], items: [...clone[0].items, {id, title: id}]};

            // save(clone);
            return clone;
        })

    }

    const handleListItemRemove = (listId: string, itemId: string): void => {
        setLists((old) => {
                const activeListIndex = old.findIndex(
                    (list) => list.id === listId,
                );

                if(activeListIndex === -1){
                    console.error("Can not find desired list");
                    return old;
                }

                const clone = [...old];
                const activeList = {
                    ...clone[activeListIndex],
                    items: [...clone[activeListIndex].items]

                } 

                const activeItemIndex = activeList.items.findIndex(
                    (item) => item.id === itemId,
                );

                if(activeItemIndex === -1){
                    console.error("Can not find desired item.");
                    return old;
                }

                activeList.items.splice(activeItemIndex, 1);

                clone[activeListIndex] = activeList;
                // save(clone);
                return clone;
                        
        });
    }

    const handleMoveButtonClick = (destinationListId: string): void => {
        setLists((old) => {

                const activeListIndex = old.findIndex(
                    (list) => list.id === activeListId,
                );

                const destinationListIndex = old.findIndex(
                    (list) => list.id === destinationListId,
                );

                if(activeListIndex === -1 || destinationListIndex === -1){
                    console.error("Can not find desired list");
                    return old;
                }

                    const clone =[...old];

                    const activeList = {
                        ...clone[activeListIndex],
                        items: [...clone[activeListIndex].items],
                    }

                    const destinationList = {
                        ...clone[destinationListIndex],
                        items: [...clone[destinationListIndex].items]
                    }

                    const activeItemIndex = activeList.items.findIndex(
                        (item) => item.id === activeItemId,
                    );

                    if(activeItemIndex === -1){
                        console.error("Can not find desired item");
                        return old;
                    }

                    const [activeItem] = activeList.items.splice(activeItemIndex, 1);
                    destinationList.items.push(activeItem);

                    clone[activeListIndex] = activeList;
                    clone[destinationListIndex] = destinationList;

                    // save(clone);
                    return clone;

            });

    }

    return(
        <div className={styles.board}>

            <div className={styles.toolbar}>
                <div className={styles.title}>Board Title</div>

                <div className={styles.actions}>
                    {activeListId !== null && (
                    <div className={styles.spacer}>
                       {lists
                       .filter((list) => list.id !== activeListId)
                       .map((list) => (
                        <Button key={list.id} onClick={() => handleMoveButtonClick(list.id)}>{list.title}</Button>
                       ))}
                       {/* <Button onClick={handleListItemRemove}>Remove</Button> */}
                    </div>
                    )}
                    
                    <IconButton>
                        <MingcuteEdit2Line />
                    </IconButton>

                    <IconButton onClick={handleCreateButtonClick}>
                        <MingcuteAddLine />
                    </IconButton>
                </div>

            </div>

                <ul className={styles.lists}>
                    {lists.map((list) => (
                        <li key={list.id}>
                            <List list={list} onClick={handleListItemClick} onRemove={handleListItemRemove}/>
                        </li>
                    ))}
                </ul>

            </div>
    )
}