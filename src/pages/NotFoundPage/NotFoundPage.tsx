import { ReactNode } from "react";

import {Link} from "react-router";

import styles from "../NotFoundPage/NotFoundPage.module.css";

export default function NotFoundPage(): ReactNode{
    return(
        <div className={styles["not-found-page"]}>
            <img src="../../../public/notfound.png" alt="not found page image" />
            {/* <h1>404 | Page Not Found</h1> */}
            <Link to="/">Go to Home Page</Link>

        </div> 

    )
}