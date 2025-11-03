import { type ReactNode, useRef } from "react";

import styles from "./BoardPage.module.css";
// import { useParams } from "react-router";
// import IconButton from "../../components/IconButton/IconButton";
// import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line";
// import Board from "../../components/Board/Board";
// import CounterProvider from "../../providers/CounterProvider";
import BoardProvider from "../../providers/BoardProvider";
import ActiveItemProvider from "../../providers/ActiveItemProvider";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";

export default function BoardPage(): ReactNode{
    // const {id} = useParams();

    const ref = useRef<HTMLDialogElement>(null);
    

    const handleOpenButtonClick = (): void => {
        ref.current?.showModal();
    }
    return(
        

            <BoardProvider>
                <ActiveItemProvider>

                   <div className={styles["board-page"]}>
                    <Button color="primary" onClick={handleOpenButtonClick}>Open</Button>

                    <Modal ref={ref} heading="This is heading">
                        This is children
                    </Modal>
                        {/* <Board /> */}
                   </div>

                </ActiveItemProvider>
            </BoardProvider> 
            
    );
}