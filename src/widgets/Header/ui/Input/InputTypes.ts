import { ChangeEvent, KeyboardEvent } from "react";

export interface InputProps {
    value: string;
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void;
  }