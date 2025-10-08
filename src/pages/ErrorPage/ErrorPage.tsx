import { ReactNode } from "react";

import styles from "../ErrorPage/ErrorPage.module.css";

export default function ErrorPage(): ReactNode{
    return(
        <div className={styles["error-page"]}>
            <h1>Oops! Something went wrong...</h1>
            <a href="/">Go to Home Page</a>
        </div>
    )
}