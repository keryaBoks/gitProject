import { FC } from "react";
import { InputProps } from "./InputTypes";
import styles from "./Input.module.css";

export const Input: FC<InputProps> = ({ value, onChange, onKeyPress, placeholder }) => {

    return (
        <input
            placeholder={placeholder}
            className={styles.input}
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
        />
    );
};
