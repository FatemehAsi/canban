import { use, type ComponentProps, type FormEvent, type ReactNode, useState } from "react";

import TextInput from "../../components/TextInput/TextInput.tsx";
import { BoardContext } from "../../context/board-context.ts";
import {toast} from "react-toastify";
import FormModal from "../FormModal/FormModal.tsx";
import type {ListItemType} from "../../types/list-item.ts";

type Values = Omit<ListItemType, 'id'>;

type Props = Pick<ComponentProps<typeof FormModal>, "modalRef"> & {
    listIndex: number;
}

export default function ListItemModal({
     modalRef,
     listIndex,
     }: Props): ReactNode{

        const {dispatchLists} = use(BoardContext);

        // const [shouldValidateOnChange, setShouldValidateOnChange] = useState<boolean>(false);

        const [titleError, setTitleError] = useState<string | null>(null);

        const handleFormReset = (): void => {
            setTitleError(null);
        }

        const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
            e.preventDefault();

            const formData = new FormData(e.currentTarget);
            const values: Values = {
                title: formData.get("title") as string,
            };

            if(!validateTitle(values.title)){
                return;
            }

            const id = globalThis.crypto.randomUUID();
            dispatchLists({type: "item_created", listIndex, item: {id, ...values}});
            toast.success("Item created successfully!");
            modalRef.current?.close();
        }

        const validateTitle = (title: string): boolean => {

            if(title.length === 0){
                setTitleError("Title cannot be empty!")
                return false;
            }

            if(title.length < 5){
                setTitleError("Title must be at least 5 characters.");
                return false;
            }

            setTitleError(null);
            return true;
        }
        
    return (<FormModal
                modalRef={modalRef}
                heading="Create a new Item"
                onSubmit={handleFormSubmit}
                onReset={handleFormReset}
    >
            <TextInput lable="Title" type="text" name="title" error={titleError}/>
    </FormModal>
    );
}