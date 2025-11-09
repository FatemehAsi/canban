import { type ReactNode, type ComponentProps, useId, type ChangeEvent, useState } from "react";

import styles from "../TextInput/TextInput.module.css";
import clsx from "clsx";

type Props = ComponentProps<'input'> & {
    lable: string;
    error?: string | null;
}

export default function TextInput({className, lable, error, ...otherProps}: Props): ReactNode{
    const id = useId();

    const [value, setValue] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {

        const n = Number.parseInt(e.target.value.replaceAll(/\D/g, ""));

        if(Number.isNaN(n)){
            return;
        }

        // const value = e.target.value;
        // console.log((+value).toLocaleString());
        setValue(n.toLocaleString());
        
    }


    return(
        <div className={clsx(styles["text-input"], !!error && styles.error, className)}>

            <label htmlFor={id}>{lable}</label>
            <input id={id} {...otherProps} value={value} onChange={handleInputChange}/>
            <span className={styles.error}>{error || "\u00A0"}</span>

        </div>
    )
}