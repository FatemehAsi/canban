import { ReactNode, useCallback, useMemo, useState } from "react";

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


export default function Board(): ReactNode{
    const [lists, setLists] = useState<ListType[]>(listsData);
    const [activeListId, setActiveListId] = useState<string | null>(null);
    const [activeItemId, setActiveItemId] = useState<string | null>(null)

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
    const handleListItemClick = useCallback((listId: string, itemId: string): void => {
       setActiveListId(listId);
       setActiveItemId(itemId);
    }, []);

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
                        <Button key={list.id}>{list.title}</Button>
                       ))}
                       <Button>Remove</Button>
                    </div>
                    )}
                    
                    <IconButton>
                        <MingcuteEdit2Line />
                    </IconButton>

                    <IconButton>
                        <MingcuteAddLine />
                    </IconButton>
                </div>

            </div>

                <ul className={styles.lists}>
                    {lists.map((list) => (
                        <li key={list.id}>
                            <List list={list} onClick={handleListItemClick} />
                        </li>
                    ))}
                </ul>
                
            </div>
    )
}