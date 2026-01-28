import {type ReactNode, useRef} from "react";
import MingcuteAddLine from "../../../../icons/MingcuteAddLine"
import MingcuteMore1Line from "../../../../icons/MingcuteMore1Line";
import IconButton from "../../../IconButton/IconButton";

import styles from "./ListHeader.module.css";
import ListItemModal from "../../../../modals/ListItemModal/ListItemModal.tsx"
import type {SyntheticListenerMap} from "@dnd-kit/core/dist/hooks/utilities";
import MingcuteDotsLine from "../../../../icons/MingcuteDotsLine.tsx";

type Props = {
    title: string;
    listIndex: number;
    listeners ?: SyntheticListenerMap;
}

export default function ListHeader({title, listIndex, listeners}: Props): ReactNode{
    const modalRef = useRef<HTMLDialogElement>(null);

    const handleCreateButtonClick = (): void => {
        modalRef.current?.showModal();
    }
    return(

    <div className={styles["list-header"]}>
        <div className={styles["drag-handle"]} {...listeners}>
            <MingcuteDotsLine />
            <div className={styles.title}>{title}</div>
        </div>
                    <div className={styles.actions}>
                    <IconButton onClick={handleCreateButtonClick}>
                        <MingcuteAddLine />
                    </IconButton>

                    <IconButton>
                        <MingcuteMore1Line />
                    </IconButton>
                    </div>
        <ListItemModal modalRef={modalRef} listIndex={listIndex} />
    </div>
)

}