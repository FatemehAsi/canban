// import {type ReactNode} from 'react';

import styles from "./App.module.css";
import clsx from "clsx";
import BoardCard from "./components/BoardCard/BoardCard.tsx";

export default function App(){
  return(
    <div className={styles.app}>
      <header>Header</header>
      <main>
        <div className={styles.header}>
          <h1 className={styles.title}>Boards</h1>
          <button>Create</button>
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

      </main>

      <footer>
        
      </footer>
    </div>
  )

}