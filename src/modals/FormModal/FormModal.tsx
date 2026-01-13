import {
    useRef,
    use,
    type ComponentProps,
    type FormEvent,
    type ReactNode,
    useState,
    type ChangeEvent,
    type RefObject
} from "react";

import clsx from "clsx";

import styles from "./FormModal.module.css";
// import type Modal from "../Modal/Modal";
import Modal from "../Modal/Modal.tsx";
// import TextInput from "../../components/TextInput/TextInput.tsx";
import Button from "../../components/Button/Button.tsx";
// import { BoardContext } from "../../context/board-context.ts";
// import {toast} from "react-toastify";

type ModalProps = {
    modalRef: ComponentProps<typeof Modal>["ref"];
    heading: ComponentProps<typeof Modal>["heading"];

}

type FormProps = Omit<ComponentProps<"form">, "ref"> & {
    formRef?: RefObject<HTMLFormElement | null>;
    extraActions?: ReactNode;
}


type Props = ModalProps & FormProps;

// export default function ListItemModal({className, ...otherProps}: Props): ReactNode{
//     return(
//         <Modal className={clsx(styles["list-item-modal"], className)} {...otherProps}></Modal>
//     )
// }

export default function FormModal({
    modalRef,
    formRef,
    heading,
    extraActions,
    children,
    ...otherProps
}: Props): ReactNode{

    const internalFormRef = useRef<HTMLFormElement>(null);

    const handleModalClose = (): void => {
        internalFormRef.current?.reset();
    }

    const handleCancelButtonClick = (): void => {
        // setTitleError(null);
        modalRef.current?.close();
    }


    return (
        <Modal
        ref={modalRef}
        contentClassName={styles["form-modal"]}
        heading={heading}
        onClose={handleModalClose}
        >
        <form
            ref={(node) => {
                internalFormRef.current = node;

                if(formRef) {
                    formRef.current = node;
                }
        }}
            {...otherProps}>
            {children}
            <div className={styles.actions}>
                {extraActions}
                <Button className={styles.cancel} type="reset" onClick={handleCancelButtonClick}>Cancel</Button>
                <Button color="primary">Submit</Button>
            </div>

        </form>

    </Modal>);
}