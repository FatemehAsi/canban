import { type ReactNode, type ComponentProps, useId } from "react";

import styles from "../TextInput/TextInput.module.css";
import clsx from "clsx";

type Props = ComponentProps<'input'> & {
    lable: string;
}

export default function TextInput({className, lable, ...otherProps}: Props): ReactNode{
    const id = useId();
    return(
        <div className={clsx(styles["text-input"], className)}>
            <label htmlFor={id}>{lable}</label>
            <input id={id} {...otherProps} />

        </div>
    )
}