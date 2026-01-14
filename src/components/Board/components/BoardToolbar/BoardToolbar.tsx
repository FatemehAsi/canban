import {ReactNode, useRef} from "react";

import styles from "./BoardToolbar.module.css"
import IconButton from "../../../IconButton/IconButton.tsx";
import MingcuteEdit2Line from "../../../../icons/MingcuteEdit2Line.tsx";
import MingcuteAddLine from "../../../../icons/MingcuteAddLine.tsx";
import ListModal from "../../../../modals/ListModal/ListItemModal.tsx";

export default function BoardToolbar(): ReactNode {
    const modalRef = useRef<HTMLDialogElement>(null);

    const handleCreateListButtonClick = (): void => {
        modalRef.current?.showModal();

    }
    return(

        <div className={styles["board-toolbar"]}>
            <div className={styles.title}>Board Title</div>

            <div className={styles.actions}>
                <IconButton>
                    <MingcuteEdit2Line />
                </IconButton>

                <IconButton onClick={handleCreateListButtonClick}>
                    <MingcuteAddLine />
                </IconButton>
            </div>

            <ListModal modalRef={modalRef}/>

        </div>

    )
}