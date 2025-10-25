import { ReactNode, useState } from "react";

import styles from "./BoardPage.module.css";
// import { useParams } from "react-router";
// import IconButton from "../../components/IconButton/IconButton";
// import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line";
 import Board from "../../components/Board/Board";
import { CounterContext } from "../../context/counter-context";

export default function BoardPage(): ReactNode{

    const [count, setCount] = useState<number>(0);

    const increment = (): void => {
        setCount((old) => old + 1);
    };

    const decrement = (): void => {
        setCount((old) => old - 1);
    };

    const reset = (): void => {
        setCount(0)
    };
    
    
    // const {id} = useParams();
    return(
        <div className={styles["board-page"]}>

            <CounterContext value={{count, increment, decrement, reset}}>
                <Board />
            </CounterContext>
           
        </div>
    );
}