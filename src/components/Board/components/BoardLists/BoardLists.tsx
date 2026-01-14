import {type ReactNode, use} from "react";

import styles from "./BoardLists.module.css";
import {SortableContext} from "@dnd-kit/sortable";
import List from "../../../List/List.tsx";
import {BoardContext} from "../../../../context/board-context.ts";

export default function BoardLists(): ReactNode {
    const {lists} = use(BoardContext);

    return(
            <SortableContext id="board" items={lists.map((list) => list.id)}>
                <ul className={styles["board-lists"]}>
                    {lists.map((list, listIndex) => (
                        <li key={list.id}>
                            <List listIndex={listIndex} list={list} />
                        </li>
                    ))}
                </ul>
            </SortableContext>

    )
}