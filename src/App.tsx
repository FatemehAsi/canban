// import {type ReactNode} from 'react';

import styles from "./App.module.css";
import clsx from "clsx";

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
          <div className={clsx(styles.board, "blue")}>
            <div className={styles.cover}></div>
            <div className={styles.content}>
            <div className={styles.header}>
              <div className={styles.title}>Board1</div>
              <a href='/board'>View</a>
            </div>
            <p className={styles.description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus ducimus libero accusantium nemo laudantium, quasi obcaecati provident nam vero cumque, sequi rem, id similique. Assumenda maiores nisi ipsam iure illo.
            </p>
          </div>
          </div>   
          </li>

          <li>
            <div className={clsx(styles.board, "gray")}>
                   <div className={styles.cover}></div>
          <div className={styles.content}>
            <div className={styles.header}>
              <div className={styles.title}>Board1</div>
              <a href='/board'>View</a>
            </div>
            <p className={styles.description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus ducimus libero accusantium nemo laudantium, quasi obcaecati provident nam vero cumque, sequi rem, id similique. Assumenda maiores nisi ipsam iure illo.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas sit animi ipsa, veritatis unde suscipit dolores fugit sed eligendi voluptate totam. Aliquid optio fuga enim necessitatibus, rerum aperiam delectus inventore!
            </p>
          </div>
          
            </div>
          </li>

          <li>
            <div className={clsx(styles.board, "yellow")}>
              <div className={styles.cover}></div>
              <div className={styles.content}>
                <div className={styles.header}>
                <div className={styles.title}>Board1</div>
                <a href='/board'>View</a>
              </div>
              <p className={styles.description}>
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus ducimus libero accusantium nemo laudantium, quasi obcaecati provident nam vero cumque, sequi rem, id similique. Assumenda maiores nisi ipsam iure illo.
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas sit animi ipsa, veritatis unde suscipit dolores fugit sed eligendi voluptate totam. Aliquid optio fuga enim necessitatibus, rerum aperiam delectus inventore!
              </p>
            </div>
            
            </div>
          </li>

        </ul>

      </main>

      <footer>
        
      </footer>
    </div>
  )

}