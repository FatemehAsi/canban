import { useRef, use, type ComponentProps, type FormEvent, type ReactNode, useState, type ChangeEvent } from "react";

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

        const [title, setTitle] = useState<string>("")
        const [titleError, setTitleError] = useState<string | null>(null);

        const formRef = useRef<HTMLFormElement>(null);

        const handleModalClose = (): void => {
            setTitleError(null);
            formRef.current?.reset();
            
        }

        const handleCancelButtonClick = (): void => {
            // setTitleError(null);
            ref.current?.close();   
        }

        const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
            e.preventDefault();

            const formData = new FormData(e.currentTarget);
            const id = globalThis.crypto.randomUUID();      
            const title = formData.get("title") as string;

            if(!validateTitle(title)){
                return;
            }

            create(listId, {id, title: title.trim()});
            toast.success("Item created successfully!");
            
            
            ref.current?.close();

            // console.log(formRef.current?.value);
        }

        const handleTitleChange = (e: ChangeEvent<HTMLInputElement>): void => {
            const value = e.target.value;

            setTitle(value);
        }

        const validateTitle = (title: unknown): boolean => {
            if(typeof title !== "string"){
                setTitleError("Titltle should be a string!");
                return false;
            }

            if(title.trim().length === 0){
                setTitleError("Title cannot be empty!")
                return false;
            }

            setTitleError(null);
            return true;
        }
        
    return <Modal 
                ref={ref} 
                className={clsx(styles["create-list-item-modal"], contentClassName)} 
                heading="Create a new Item"
                onClose={handleModalClose}
                {...otherProps}>
        <form ref={formRef} onSubmit={handleFormSubmit}>

            <TextInput lable="Title" type="text" name="title" value={title} error={titleError} onChange={handleTitleChange}/>
            <div className={styles.actions}>
                <Button type="reset" onClick={handleCancelButtonClick}>Cancel</Button>
                <Button color="primary">Submit</Button> 
            </div>

        </form>

    </Modal>;
}