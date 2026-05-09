import { FC, useState } from "react";
import { Insignia, StyledSwitch } from "./styles";
import { SwitchType } from "./types";
import { Typography } from "../typography";
import { FlexWrapper } from "../../styles/style";

export const Switch: FC<SwitchType> = ({
  onClick,
  initialState,
  insignia = "",
  label,
  labelVariant = "",
}) => {
  const [active, setActive] = useState(initialState);
  const handleClick = () => {
    setActive((prev) => !prev);
    onClick();
  };
  return (
    <FlexWrapper>
      {label && <Typography variant={labelVariant}>{<label htmlFor={label}>{label}</label>}</Typography>}
      <StyledSwitch onClick={handleClick} id={label}>
        <Insignia $active={active}>{insignia}</Insignia>
      </StyledSwitch>
    </FlexWrapper>
  );
};
