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
import { useDroppable } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

type Props = {
    listIndex: number;
    list: ListType;
    // onClick?: (listId: string, itemId: string) => void;
}

export default function List({listIndex, list} : Props): ReactNode{

    const {setNodeRef} = useDroppable({
        id: list.id,
        data: {isList: true, listIndex, list}

    });

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

            <SortableContext id={list.id} items={list.items.map((item) => item)}>
            <ul ref={setNodeRef} className={styles.items}>
                {
                    list.items.map((item, itemIndex) => (
                    <li key={item.id}>
                        <ListItem listIndex={listIndex} itemIndex={itemIndex} item={item}/>
                    </li>
                ))
                }
            </ul>
            </SortableContext>

            <CreateListItemModal ref={ModalRef} listIndex={listIndex} />
    </div>);
}

