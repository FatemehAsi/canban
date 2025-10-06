import type {ReactNode} from "react";

import styles from "./BoardCard.module.css";

import clsx from "clsx";

type BoardCard = "gray" | "blue" | "green" | "yellow" | "orange" | "red";

type Props = {
    id: number;
    title: string;
    description: string;
    color: BoardCard
}

export default function BoardCard({title, description, color}: Props): ReactNode{
    return (
        <div className={clsx(styles["board-card"], color)}>
        <div className={styles.cover}></div>
            <div className={styles.content}>
            <div className={styles.header}>
              <div className={styles.title}>{title}</div>
              <a href='/board'>View</a>
            </div>
            <p className={styles.description}>
            {description}
            </p>
          </div>
    </div>
    );

}