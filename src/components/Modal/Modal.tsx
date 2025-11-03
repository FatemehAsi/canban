import { ReactNode, useRef, type ComponentProps, type RefObject, type MouseEvent } from "react";
import styles from "./Modal.module.css";
import IconButton from "../IconButton/IconButton";
import MingcuteCloseLine from "../../icons/MingcuteCloseLine";
import clsx from "clsx";
// import Button from "../Button/Button";

type Props = ComponentProps<'dialog'> & {
    ref: RefObject<HTMLDialogElement | null>;
    heading: string;
}

export default function Modal({ref, className, heading, children, onClick, ...otherProps}: Props): ReactNode{
    // const ref = useRef<HTMLDialogElement>(null);
    const handleDialogClick = (e: MouseEvent<HTMLDialogElement>): void => {
        // console.log('target', e.target);
        // console.log('currentTarget', e.currentTarget);
        if(e.target === e.currentTarget){
           ref.current?.close();
        }

        onClick?.(e);
    };

    const handleCloseButtonClick = (): void => {
        ref.current?.close();
    }


    return(
        <>
        
        <dialog ref={ref} className={clsx(styles.modal, className)} {...otherProps} onClick={handleDialogClick}>
            <header>
                <div className={styles.heading}>{heading}</div>

                <div className={styles.actions}>
                        <IconButton onClick={handleCloseButtonClick}>
                            <MingcuteCloseLine />
                        </IconButton>
                </div>

            </header>
            <main>
                {children}
            </main>

        </dialog>
        </>
    )
}