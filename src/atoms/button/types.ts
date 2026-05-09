import { ReactNode } from "react";

export type ButtonType = {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};
