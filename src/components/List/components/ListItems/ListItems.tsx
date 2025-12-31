import {ReactNode} from "react";

import styles from "../ListItems/ListItems.module.css"
// import CreateListItemModal from "../../../CreateListItemModal/CreateListItemModal.tsx";
import type {ListType} from "../../../../types/list.ts";
import {useDroppable} from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

import ListItem from "../../../ListItem/ListItem.tsx"

type Props = {
    presentational?: boolean;
    listIndex: number
    list: ListType;
}

export default function ListItems({listIndex, list, presentational}: Props): ReactNode{

    const {setNodeRef} = useDroppable({
        id: list.id,
        data: {isList: true, listIndex, list},
    })

    return(
            <SortableContext id={list.id} items={list.items.map((item) => item)}>
                <ul ref={setNodeRef} className={styles["list-items"]}>
                    {
                        list.items.map((item, itemIndex) => (
                            <li key={item.id}>
                                <ListItem presentational={presentational} listIndex={listIndex} itemIndex={itemIndex} item={item}/>
                            </li>
                        ))
                    }
                </ul>
            </SortableContext>

    )

}