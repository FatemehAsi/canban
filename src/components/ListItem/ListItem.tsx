import { ReactNode, MouseEvent, use} from "react";

import styles from "./ListItem.module.css";
import type { ListItemType } from "../../types/list-item";
import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line";
import { BoardContext } from "../../context/board-context";
import { CSS } from "@dnd-kit/utilities";
// import { ActiveItemContext } from "../../context/active-item-context";
// import clsx from "clsx";
// import { CounterContext } from "../../context/counter-context";
import {toast} from "react-toastify";
import { useSortable } from "@dnd-kit/sortable";

import IconButton from "../IconButton/IconButton"
import clsx from "clsx";


type Props = {
    // presentational?: boolean;
    listIndex: number;
    itemIndex: number;
    item: ListItemType;
    // onClick?: (listId: string, itemId: string) => void;
}


 export default function ListItem({ listIndex, itemIndex, item}: Props): ReactNode{
    // const {decrement} = use(CounterContext)
    // const {remove} = use(BoardContext);
    const {dispatchLists} = use(BoardContext);
    // const {activeItemId, activate, deactivate} = use(ActiveItemContext);

    // const handleListItemClick = (): void => {
    //     if(item.id === activeItemId){
    //         deactivate();
    //     }else{
    //         activate(listId, item.id);
    //     }
    // };

    const {attributes, listeners, setNodeRef, transform, transition, isDragging, over} = useSortable({
        id: item.id,
        data: {isList: false, listIndex, itemIndex, item},
    });

    const overListIndex = over?.data.current?.listIndex;

    const handleRemoveButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
        e.stopPropagation();

        // decrement();

        // remove(listId, item.id);
        dispatchLists({type: "item_removed", listIndex, itemIndex});
        // deactivate();
        toast.success("Item removed successfully!");
    };
    
    return(
        <div
        ref={setNodeRef} 
        className={clsx(styles["list-item"])}
        style={{
            opacity: isDragging ? '0.5' : undefined,
            transform: CSS.Translate.toString(transform),
            transition: listIndex === overListIndex ? transition : undefined,
        }}
        {...listeners}
        {...attributes}
        >
            {item.title}

            <IconButton onPointerDown={handleRemoveButtonClick}>
                <MingcuteDelete2Line /> 
            </IconButton>

        </div>
    );
};

 