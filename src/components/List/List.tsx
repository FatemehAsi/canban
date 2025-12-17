import {ReactNode} from "react";

import styles from "./List.module.css";
import type { ListType } from "../../types/list";

// import CreateListItemModal from "../CreateListItemModal/CreateListItemModal";

// import { useDroppable } from "@dnd-kit/core";


import ListHeader from "./components/ListHeader/ListHeader.tsx";
import ListItems from "./components/ListItems/ListItems.tsx";


type Props = {
    listIndex: number;
    list: ListType;
    // onClick?: (listId: string, itemId: string) => void;
}

export default function List({listIndex, list} : Props): ReactNode{

    // const modalRef = useRef<HTMLDialogElement>(null);

    return (
    <div className={styles.list}>
            <ListHeader title={list.title} listIndex={listIndex} />
            <ListItems listIndex={listIndex} list={list} />
    </div>);
}

