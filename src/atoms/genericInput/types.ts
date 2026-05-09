import { ChangeEvent } from "react";

export type GenericInputType = {
  label: string;
  type?: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
