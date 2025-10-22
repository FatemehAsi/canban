import { ReactNode, MouseEvent} from "react";

import styles from "./ListItem.module.css";
import type { ListItemType } from "../../types/list-item";
import IconButton from "../IconButton/IconButton";
import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line";

type Props = {
    listId: string;
    item: ListItemType;
    onClick?: (listId: string, itemId: string) => void;
    onRemove? : (listId: string, itemId: string) => void;
}


 export default function ListItem({listId, item, onClick, onRemove}: Props): ReactNode{
    const handleRemoveButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
        e.stopPropagation();

        onRemove?.(listId, item.id);
    }

    
    return(
        <div className={styles["list-item"]} onClick={() => onClick?.(listId, item.id)}>
            
            {item.title}

            <IconButton onClick={handleRemoveButtonClick}>
                <MingcuteDelete2Line />
            </IconButton>
        </div>
    );
};

 