import styles from "./Footer.module.css";

import { ReactNode } from "react";

export default function Footer(): ReactNode{
    const year = new Date().getFullYear();

    return(
        <footer className={styles.footer}>Copyright &copy; {year} canban.ir</footer>
    );
}