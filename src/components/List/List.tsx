import {ReactNode} from "react";

import styles from "./List.module.css";
import type { ListType } from "../../types/list";
import { CSS } from "@dnd-kit/utilities";

// import CreateListItemModal from "../CreateListItemModal/CreateListItemModal";

// import { useDroppable } from "@dnd-kit/core";


import ListHeader from "./components/ListHeader/ListHeader.tsx";
import ListItems from "./components/ListItems/ListItems.tsx";
import {useSortable} from "@dnd-kit/sortable";
// import clsx from "clsx";



type Props = {
    presentational?: boolean;
    listIndex: number;
    list: ListType;
    // onClick?: (listId: string, itemId: string) => void;
}

export default function List({presentational = false, listIndex, list} : Props): ReactNode{

    // const modalRef = useRef<HTMLDialogElement>(null);
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({id: list.id, data: {isList:true, listIndex, list}})

    return (
    <div ref={setNodeRef} className={styles.list}
        style={{
        opacity: isDragging ? "0.5" : undefined,
        transform: CSS.Translate.toString(transform),
        transition,
    }}
         {...attributes}
    >
            <ListHeader title={list.title} listIndex={listIndex} listeners={listeners}/>
            <ListItems presentational={presentational} listIndex={listIndex} list={list} />
    </div>);
}

