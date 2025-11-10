import { type ReactNode, useRef } from "react";

import styles from "./BoardPage.module.css";
// import { useParams } from "react-router";
// import IconButton from "../../components/IconButton/IconButton";
// import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line";
import Board from "../../components/Board/Board";
// import CounterProvider from "../../providers/CounterProvider";
import BoardProvider from "../../providers/BoardProvider";
// import ActiveItemProvider from "../../providers/ActiveItemProvider";
// import Modal from "../../components/Modal/Modal";
// import CreateListItemModal from "../../components/CreateListItemModal/CreateListItemModal";
// import Button from "../../components/Button/Button";
// import TextInput from "../../components/TextInput/TextInput";

export default function BoardPage(): ReactNode{
    // const {id} = useParams();
    return(
        

            <BoardProvider>

                   <div className={styles["board-page"]}>
                    {/* <TextInput lable="this is label" />
                    <TextInput lable="this is lable 2" /> */}
                    
                    {/* <Button color="primary" onClick={handleOpenButtonClick}>Open</Button> */}
                    <Board />
                   </div>

            </BoardProvider> 
            
    );
}