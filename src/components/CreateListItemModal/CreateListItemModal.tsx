import { type ComponentProps, type ReactNode } from "react";

import clsx from "clsx";

import styles from "../CreateListItemModal/CreateListItemModal.module.css";
// import type Modal from "../Modal/Modal";
import Modal from "../Modal/Modal";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button"; 

type Props = Omit<ComponentProps<typeof Modal>, "heading" |  "children">

// export default function CreateListItemModal({className, ...otherProps}: Props): ReactNode{
//     return(
//         <Modal className={clsx(styles["create-list-item-modal"], className)} {...otherProps}></Modal>
//     )
// }

export default function CreateListItemModal({ref, contentClassName, ...otherProps}: Props): ReactNode{
    return <Modal ref={ref} className={clsx(styles["create-list-item-modal"], contentClassName)} heading="Create a new Item" {...otherProps}>
        <form>
            <TextInput lable="Title" />
            <div className={styles.actions}>
                <Button type="button">Cancel</Button>
                <Button color="primary">Submit</Button>
            </div>

        </form>

    </Modal>;
}