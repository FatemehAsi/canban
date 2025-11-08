import { type ReactNode, useCallback, use, useEffect, useState } from "react";

import styles from "./Board.module.css";
import IconButton from "../IconButton/IconButton";
import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line";
import MingcuteAddLine from "../../icons/MingcuteAddLine";
// import MingcuteMore1Line from "../../icons/MingcuteMore1Line";
import type { ListType } from "../../types/list";

import List from "../List/List";
// import type { ListItemType } from "../../types/list-item";
import Button from "../Button/Button";
// import { CounterContext } from "../../context/counter-context";
import { BoardContext } from "../../context/board-context";
import { ActiveItemContext } from "../../context/active-item-context";
import { toast } from "react-toastify";


export default function Board(): ReactNode{
    const {lists, move} = use(BoardContext);
    const {activeListId, activeItemId, activate, deactivate} = use(ActiveItemContext);  
    // console.log("render");

    // const value = use(CounterContext);
    // const {count, increment} = use(CounterContext);

    // const [lists, setLists] = useState<ListType[]>(load);

    // 

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

    // const handleListItemClick = (listId: string, itemId: string): void => {
    //    activate(listId, itemId)
    // };

    // const handleCreateButtonClick = (): void => {
    //     create();
    //     toast.success("Item created successfully!");
    // };

    const handleMoveButtonClick = (toListId: string): void => {
      if(activeListId && activeItemId){
        move(activeListId, activeItemId, toListId);
        toast.success("Item moved successfully!");
      }

       deactivate();
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

                    <IconButton>
                        <MingcuteAddLine />
                    </IconButton>
                </div>

            </div>

                <ul className={styles.lists}>
                    {lists.map((list) => (
                        <li key={list.id}>
                            <List list={list} />
                        </li>
                    ))}
                </ul>

            </div>
    )
}