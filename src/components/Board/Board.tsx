import { type ReactNode, use } from "react";

import styles from "./Board.module.css";
import IconButton from "../IconButton/IconButton";
import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line";
import MingcuteAddLine from "../../icons/MingcuteAddLine";

import List from "../List/List";
import { BoardContext } from "../../context/board-context";
import {SortableContext} from "@dnd-kit/sortable";
import BoardToolbar from "./components/BoardToolbar/BoardToolbar.tsx";
import BoardLists from "./components/BoardLists/BoardLists.tsx";


export default function Board(): ReactNode{

    return(
        <div className={styles.board}>

          <BoardToolbar />
          <BoardLists />

        </div>
    )
}