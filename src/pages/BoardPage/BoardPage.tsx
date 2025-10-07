import { ReactNode } from "react";

import styles from "./BoardPage.module.css";
import { useParams } from "react-router";

export default function BoardPage(): ReactNode{
    const {id} = useParams();
    return(
        <div className={styles["board-page"]}>Board {id}</div>

    );
}