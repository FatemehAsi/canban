import { ReactNode, MouseEvent, useContext} from "react";

import styles from "./ListItem.module.css";
import type { ListItemType } from "../../types/list-item";
import IconButton from "../IconButton/IconButton";
import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line";
import { BoardContext } from "../../context/board-context";
// import { CounterContext } from "../../context/counter-context";

type Props = {
    listId: string;
    item: ListItemType;
    onClick?: (listId: string, itemId: string) => void;
}


 export default function ListItem({listId, item, onClick}: Props): ReactNode{
    // const {decrement} = useContext(CounterContext)
    const {remove} = useContext(BoardContext);

  
    const handleRemoveButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
        e.stopPropagation();

        // decrement();

        remove(listId, item.id);

    };

    
    return(
        <div className={styles["list-item"]} onClick={() => onClick?.(listId, item.id)}>
            
            {item.title}

            <IconButton onClick={handleRemoveButtonClick}>
                <MingcuteDelete2Line />
            </IconButton>
        </div>
    );
};

 