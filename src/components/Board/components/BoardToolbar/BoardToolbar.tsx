import {ReactNode} from "react";

import styles from "./BoardToolbar.module.css"
import IconButton from "../../../IconButton/IconButton.tsx";
import MingcuteEdit2Line from "../../../../icons/MingcuteEdit2Line.tsx";
import MingcuteAddLine from "../../../../icons/MingcuteAddLine.tsx";

export default function BoardToolbar(): ReactNode {
    return(

        <div className={styles["board-toolbar"]}>
            <div className={styles.title}>Board Title</div>

            <div className={styles.actions}>
                <IconButton>
                    <MingcuteEdit2Line />
                </IconButton>

                <IconButton>
                    <MingcuteAddLine />
                </IconButton>
            </div>

        </div>

    )
}