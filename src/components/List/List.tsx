import {ReactNode, useRef} from "react";

import styles from "./List.module.css";
import type { ListType } from "../../types/list";

import IconButton from "../IconButton/IconButton";
// import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line";
// import MingcuteAddLine from "../../icons/MingcuteAddLine";
import MingcuteMore1Line from "../../icons/MingcuteMore1Line";
import ListItem from "../ListItem/ListItem";
import CreateListItemModal from "../CreateListItemModal/CreateListItemModal";
import { MingcuteAddLine } from "../../icons/MingcuteAddLine";

type Props = {
    list: ListType;
    // onClick?: (listId: string, itemId: string) => void;
}

export default function List({list} : Props): ReactNode{
    const ModalRef = useRef<HTMLDialogElement>(null);

    const handleClickButtonClick = (): void => {
        ModalRef.current?.showModal();
    }

    return (
    <div className={styles.list}>
        <div className={styles.header}>

            <div className={styles.title}>{list.title}</div>
                    <div className={styles.actions}>
                    <IconButton onClick={handleClickButtonClick}>
                        <MingcuteAddLine />
                    </IconButton>

                    <IconButton>
                        <MingcuteMore1Line />
                    </IconButton>

                    </div>
                    
            </div>

            <ul className={styles.items}>
                {
                    list.items.map((item) => (
                    <li key={item.id}>
                        <ListItem listId={list.id} item={item} />
                    </li>
                ))
                }
            </ul>
            <CreateListItemModal ref={ModalRef} listId={list.id} />
    </div>);
}

