import styled from "styled-components";

export const StyledSwitch = styled.button(({ theme }) => ({
  borderRadius: "20px",
  border: "none",
  backgroundColor: theme.tertiaryBackground,
  height: "26px",
  width: "48px",
}));

export const Insignia = styled.div<{ $active: boolean }>(
  ({ theme, $active }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "20px",
    height: "20px",
    backgroundColor: theme.secondaryBackground,
    fontWeight: "bold",
    color: theme.textColor,
    borderRadius: "20px",
    transition: "all .5s ease",
    transform: `${$active && "translateX(100%)"}`,
  })
);
