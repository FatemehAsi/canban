import type { ReactNode } from "react";

import styles from "./HomePage.module.css";

import BoardCard from  "../../components/BoardCard/BoardCard";
import Button from "../../components/Button/Button";

export default function HomePage(): ReactNode{
    return <div className={styles["home-page"]}>
        <div className={styles.header}>
          <h1 className={styles.title}>Boards</h1>
          <Button color="primary">Create</Button>
        </div>

        <ul className={styles.boards}>
            <li>
                <BoardCard id={1} title="Spring Tasks" description="lorem spammmmmmmmmmmmmmmmmmmmm jjjjjjjjfklsfnhhnkiuasdi" color="blue" />
            </li>

            <li>
                <BoardCard id={2} title="Content Calendar" description="adwd skfjolijfr sejhinwieh  wirhwiu uuhi n wjrhdwiuh hdffiush iejopqwje " color="gray" />
            </li>

            <li>
                <BoardCard id={3} title="Personal Goals" description="ewrfwsfgb dfgdrhgr regr hjgghrf drfed sfer dr berfe" color="yellow" />
            </li>

        </ul>
    </div>
}