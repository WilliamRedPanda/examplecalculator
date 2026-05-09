import { ReactNode } from "react";

export type CollapsibleSectionType = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};
