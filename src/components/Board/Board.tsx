import { ReactNode, useCallback, useMemo, useState } from "react";

import styles from "./Board.module.css";
import IconButton from "../IconButton/IconButton";
import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line";
import MingcuteAddLine from "../../icons/MingcuteAddLine";
import MingcuteMore1Line from "../../icons/MingcuteMore1Line";
import type { ListType } from "../../types/list";

import List from "../List/List";
import type { ListItemType } from "../../types/list-item";


export default function Board(): ReactNode{
    const [todoList, setTodoList] = useState<ListType>({
        id: "1",
        title: "🔜 To Do",
        items: [
            {id:"1", title: "Setup Backend Project"},
            {id:"2", title: "Find a Good Name for the Project"},
            {id:"3", title: "Implement Landing Page"},
        ],
    });

     const [doingList] = useState<ListType>({
        id: "2",
        title: "🔨 Doing",
        items: [
            {id:"4", title: "Setup Frontend Project"},
            {id:"5", title: "Design Landing Page"},
        ],
    });

     const [doneList] = useState<ListType>({
        id: "3",
        title: "🎉 Done",
        items: [],
    });

    const handleEditButtonClick = () : void => {
        setTodoList((old) => {
            const clone = [...old.items];
            clone.splice(1, 1);
            return {...old, items: clone}
        })

    };

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
    const handleListItemClick = useCallback((id: string): void => {
        setTodoList((old) => {
            const clone = [...old.items];
            return{...old, items: clone.filter((item) => item.id !== id)};
        })
    }, []);

    return(
        <div className={styles.board}>

            <div className={styles.toolbar}>
                <div className={styles.title}>Board Title</div>

                <div className={styles.actions}>
                    <IconButton onClick={handleEditButtonClick}>
                        <MingcuteEdit2Line />
                    </IconButton>

                    <IconButton>
                        <MingcuteAddLine />
                    </IconButton>
                </div>

            </div>

                <ul className={styles.lists}>
                    <li>
                        <List list={todoList} onClick={handleListItemClick}/>
                    </li>

                    <li>
                        <List list={doingList} />
                    </li>

                    <li>
                        <List list={doneList} />
                    </li>
                </ul>
            </div>
    )
}