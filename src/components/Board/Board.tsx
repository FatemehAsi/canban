import { ReactNode } from "react";

import styles from "./Board.module.css";
import IconButton from "../IconButton/IconButton";
import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line";
import MingcuteAddLine from "../../icons/MingcuteAddLine";
import MingcuteMore1Line from "../../icons/MingcuteMore1Line";

export default function Board(): ReactNode{
    return(
        <div className={styles.board}>

            <div className={styles.toolbar}>
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

                <ul className={styles.lists}>
                    <li>
                        <div className={styles.list}>
                            <div className={styles.header}>
                                <div className={styles.title}>🔜 To Do</div>
                                <IconButton>
                                    <MingcuteMore1Line />
                                </IconButton>
                            </div>
                            <ul className={styles.items}>
                                <li>
                                    <div className={styles.item}>Setup Backend Project</div>
                                </li>
                                <li>
                                    <div className={styles.item}>Find a Good Name for the Project</div>
                                </li>
                                <li>
                                    <div className={styles.item}>Implement Landing Page</div>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <div className={styles.list}>
                            <div className={styles.header}>
                                <div className={styles.title}>🔨 Doing</div>
                                <IconButton>
                                    <MingcuteMore1Line />
                                </IconButton>
                            </div>
                            <ul className={styles.items}>
                               <li>
                                    <div className={styles.item}>Setup Frontend Project</div>
                                </li>
                                <li>
                                    <div className={styles.item}>Design Landing Page</div>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <div className={styles.list}>
                            <div className={styles.header}>
                                <div className={styles.title}>🎉 Done</div>
                                <IconButton>
                                    <MingcuteMore1Line />
                                </IconButton>
                            </div>
                            <ul className={styles.items}>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
    )
}