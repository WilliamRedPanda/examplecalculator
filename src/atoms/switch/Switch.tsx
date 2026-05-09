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
  labelPosition = "right",
}) => {
  const [active, setActive] = useState(initialState);
  const handleClick = () => {
    setActive((prev) => !prev);
    onClick();
  };
  return (
    <FlexWrapper>
      {label && labelPosition === "right" && <Typography variant={labelVariant}>{<label htmlFor={label}>{label}</label>}</Typography>}
      <StyledSwitch type="button" onClick={handleClick} id={label}
        role="switch"
        aria-checked={active}>
        <Insignia $active={active}>{insignia}</Insignia>
      </StyledSwitch>
      {label && labelPosition === "left" && <Typography variant={labelVariant}>{<label htmlFor={label}>{label}</label>}</Typography>}
    </FlexWrapper>
  );
};
