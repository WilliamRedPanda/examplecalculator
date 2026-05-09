import { FC } from "react";
import { CardType } from "./type";
import { CardWrapper } from "./style";

export const Card: FC<CardType> = ({ hasAction = false, children }) => {
  return <CardWrapper $hasAction={hasAction}>{children}</CardWrapper>;
};
