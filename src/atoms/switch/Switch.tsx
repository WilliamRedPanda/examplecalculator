import { FC, useState } from "react";
import { Insignia, StyledSwitch } from "./styles";
import { SwitchType } from "./types";
import { Typography } from "../typography";

export const Switch: FC<SwitchType> = ({
  onClick,
  initialState,
  insignia = "",
  label
}) => {
  const [active, setActive] = useState(initialState);
  const handleClick = () => {
    setActive((prev) => !prev);
    onClick();
  };
  return (
    <>
      <StyledSwitch onClick={handleClick} id={label}>
        <Insignia $active={active}>{insignia}</Insignia>
      </StyledSwitch>
      {label && <Typography>{<label htmlFor={label}>{label}</label>}</Typography>}
    </>
  );
};
