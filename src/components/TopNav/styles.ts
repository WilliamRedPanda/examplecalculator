import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const TopNavWrapper = styled.div(({ theme }: any) => ({
  padding: `${theme.sizes.xs} 20%`,
  background: theme.navBarBackground,
  boxShadow: `0px 8px 14px 0 ${theme.secondaryBackground}`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.sizes.xs,
  [mediaQuery.mobile]: {
    padding: `${theme.sizes.xs} ${theme.sizes.s}`,
  },
}));

export const HeaderStyled = styled.div(({ theme }: any) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  justifyContent: "space-between",
  gap: theme.sizes.s,
}));
