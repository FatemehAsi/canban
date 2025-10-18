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


export default function Board(): ReactNode{
    const [lists, setLists] = useState<ListType[]>(listsData)

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
    const handleListItemClick = useCallback((id: string): void => {
        setLists((old) => {
            const clone = {
                ...old[0],
                items: [...old[0].items].filter((item) => item.id !== id)
            };
            return[clone, old[1], old[2]]
        })
    }, []);

    return(
        <div className={styles.board}>

            <div className={styles.toolbar}>
                <div className={styles.title}>Board Title</div>

                <div className={styles.actions}>
                    <IconButton>
                        <MingcuteEdit2Line />
                    </IconButton>

                    <IconButton>
                        <MingcuteAddLine />
                    </IconButton>
                </div>

            </div>

                <ul className={styles.lists}>
                    <li>
                        <List list={lists[0]} onClick={handleListItemClick}/>
                    </li>

                    <li>
                        <List list={lists[1]} />
                    </li>

                    <li>
                        <List list={lists[2]} />
                    </li>
                </ul>
            </div>
    )
}