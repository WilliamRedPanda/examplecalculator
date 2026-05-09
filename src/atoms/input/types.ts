import { ChangeEvent } from "react";

export type AutocompleteInputType = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
