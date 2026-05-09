import styled from "styled-components";
import { mediaQuery } from "../utils/mediaQuery";
import { SizeType, ThemeType } from "../types/stylesTypes";

export const AppWrapper = styled.div(({ theme }) => ({
  backgroundColor: theme.backgroundColor,
  minHeight: "100vh",
  color: theme.textColor,
}));

export const AppContent = styled.div(({ theme }) => ({
  margin: "0 20%",
  display: "flex",
  flexWrap: "wrap",
  gap: theme.sizes.m,
  [mediaQuery.mobile]: {
    margin: `0 ${theme.sizes.s}`,
  },
}));

const sizes: SizeType = {
  xs: "8px",
  s: "16px",
  m: "24px",
  l: "64px",
};

export const lightTheme: ThemeType = {
  backgroundColor: "#ffffff",
  secondaryBackground: "#e8f4fd",
  tertiaryBackground: "#d0e9fb",
  navBarBackground: "#b8def9",
  textColor: "black",
  sizes: { ...sizes },
};

export const darkTheme: ThemeType = {
  backgroundColor: "#1b2226",
  secondaryBackground: "#30373a",
  tertiaryBackground: "#474c50",
  navBarBackground: "#5e6367",
  textColor: "#fff",
  sizes: { ...sizes },
};

export const FlexWrapper = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.sizes.xs,
}));