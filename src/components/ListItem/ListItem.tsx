import { ReactNode, memo } from "react";

import styles from "./ListItem.module.css";
import type { ListItemType } from "../../types/list-item";

type Props = {
    item: ListItemType;
}


const ListItem = memo( function ListItem({item}: Props): ReactNode{
    console.log(item.title);
    
    return(
        <div className={styles["list-item"]}>
            {item.title}
        </div>
    );
});

export default ListItem;