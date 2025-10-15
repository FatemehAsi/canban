import {ReactNode, memo} from "react";

import styles from "./List.module.css";
import type { ListType } from "../../types/list";

import IconButton from "../IconButton/IconButton";
// import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line";
// import MingcuteAddLine from "../../icons/MingcuteAddLine";
import MingcuteMore1Line from "../../icons/MingcuteMore1Line";
import ListItem from "../ListItem/ListItem";

type Props = {
    list: ListType;
    onClick?: (id: string) => void;
}

const List = memo(function List({list, onClick} : Props): ReactNode{
    return (
    <div className={styles.list}>
        <div className={styles.header}>

            <div className={styles.title}>{list.title}</div>
                    <IconButton>
                        <MingcuteMore1Line />
                    </IconButton>
            </div>

            <ul className={styles.items}>
                {
                    list.items.map((item) => (
                    <li key={item.id}>
                        <ListItem item={item} onClick={onClick} />
                    </li>
                ))
                }
            </ul>
    </div>);
})

export default List;