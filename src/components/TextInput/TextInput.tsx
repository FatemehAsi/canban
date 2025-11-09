import { type ReactNode, type ComponentProps, useId } from "react";

import styles from "../TextInput/TextInput.module.css";
import clsx from "clsx";

type Props = ComponentProps<'input'> & {
    lable: string;
    error?: string | null;
}

export default function TextInput({className, lable, error, ...otherProps}: Props): ReactNode{
    const id = useId();
    return(
        <div className={clsx(styles["text-input"], !!error && styles.error, className)}>

            <label htmlFor={id}>{lable}</label>
            <input id={id} {...otherProps} />
            <span className={styles.error}>{error || "\u00A0"}</span>

        </div>
    )
}