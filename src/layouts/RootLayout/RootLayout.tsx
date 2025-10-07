import { ReactNode } from "react";

import styles from "../RootLayout/RootLayout.module.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router";

export default function RootLayout(): ReactNode{
    return(
        <div className={styles["root-layout"]}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}