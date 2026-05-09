import "styled-components";
import { ThemeType } from "./stylesTypes";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
