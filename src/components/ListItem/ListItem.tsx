import { ReactNode} from "react";

import styles from "./ListItem.module.css";
import type { ListItemType } from "../../types/list-item";

type Props = {
    listId: string;
    item: ListItemType;
    onClick?: (listId: string, itemId: string) => void;
}


 export default function ListItem({listId, item, onClick}: Props): ReactNode{

    
    return(
        <div className={styles["list-item"]} onClick={() => onClick?.(listId, item.id)}>
            {item.title}
        </div>
    );
};

 