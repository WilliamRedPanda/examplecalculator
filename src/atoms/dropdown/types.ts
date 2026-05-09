import { ChangeEvent } from "react";

export type DropdownOption = {
  label: string;
  value: string;
};

export type DropdownType = {
  label: string;
  options: DropdownOption[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
};
