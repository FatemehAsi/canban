import { type ReactNode } from "react";

import styles from "./BoardPage.module.css";
// import { useParams } from "react-router";
// import IconButton from "../../components/IconButton/IconButton";
// import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line";
import Board from "../../components/Board/Board";
import CounterProvider from "../../providers/CounterProvider";

export default function BoardPage(): ReactNode{

    // const {id} = useParams();
    return(
        <div className={styles["board-page"]}>

            <CounterProvider>
                <Board />
            </CounterProvider> 
            
        </div>
    );
}