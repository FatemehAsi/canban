import { useRef, use, type ComponentProps, type FormEvent, type ReactNode } from "react";

import clsx from "clsx";

import styles from "../CreateListItemModal/CreateListItemModal.module.css";
// import type Modal from "../Modal/Modal";
import Modal from "../Modal/Modal";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button"; 
import { BoardContext } from "../../context/board-context";
import {toast} from "react-toastify";

type Props = Omit<ComponentProps<typeof Modal>, "heading" |  "children"> & {
    listId: string;
}

// export default function CreateListItemModal({className, ...otherProps}: Props): ReactNode{
//     return(
//         <Modal className={clsx(styles["create-list-item-modal"], className)} {...otherProps}></Modal>
//     )
// }

export default function CreateListItemModal({
     ref,
     contentClassName,
     listId,
     ...otherProps
     }: Props): ReactNode{
        // const formRef = useRef<HTMLFormElement>(null);
        const {create} = use(BoardContext);

        const handleCancelButtonClick = (): void => {
            ref.current?.close();   
        }

        const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
            e.preventDefault();

            const formData = new FormData(e.currentTarget);
            const id = globalThis.crypto.randomUUID();      
            const title = formData.get("title") as string;

            create(listId, {id, title});
            toast.success("Item created successfully!");
            
            e.currentTarget.reset();
            ref.current?.close();

            // console.log(formRef.current?.value);
        }
        
    return <Modal ref={ref} className={clsx(styles["create-list-item-modal"], contentClassName)} heading="Create a new Item" {...otherProps}>
        <form onSubmit={handleFormSubmit}>
            <TextInput lable="Title" type="text" name="title"/>
            <div className={styles.actions}>
                <Button type="reset" onClick={handleCancelButtonClick}>Cancel</Button>
                <Button color="primary">Submit</Button> 
            </div>

        </form>

    </Modal>;
}