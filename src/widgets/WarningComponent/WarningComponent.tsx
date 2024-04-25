import type { FC, ReactNode } from "react";
import styles from "./WarningComponent.module.css";

interface WarningComponentProps {
  text: string;
  icon: ReactNode;
}

export const WarningComponent: FC<WarningComponentProps> = ({ text, icon }) => {
  return (
    <div className={styles.container}>
      <div>{icon}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};
