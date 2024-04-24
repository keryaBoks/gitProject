import type { FC, ReactNode } from "react";
import "./WarningComponent.scss";

interface WarningComponentProps {
  text: string;
  icon: ReactNode;
}

export const WarningComponent: FC<WarningComponentProps> = ({ text, icon }) => {
  return (
    <div className="warning-component__container">
      <div>{icon}</div>
      <div className="warning-component__text">{text}</div>
    </div>
  );
};
