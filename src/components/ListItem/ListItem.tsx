import { ReactNode, memo } from "react";

import styles from "./ListItem.module.css";
import type { ListItemType } from "../../types/list-item";

type Props = {
    item: ListItemType;
    onClick?: (id: string) => void;
}


const ListItem = memo( function ListItem({item, onClick}: Props): ReactNode{
    console.log(item.title);
    
    return(
        <div className={styles["list-item"]} onClick={() => onClick?.(item.id)}>
            {item.title}
        </div>
    );
});

export default ListItem;