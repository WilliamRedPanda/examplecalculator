import useLocalStorage from "use-local-storage";
import { HeaderStyled, TopNavWrapper } from "./styles";
import { Switch } from "../../atoms/switch";
import { Typography } from "../../atoms/typography";

export const TopNav = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", true);

  const switchTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <TopNavWrapper role="banner">
      <HeaderStyled>
        <Typography>App</Typography>
        <Switch onClick={switchTheme} initialState={darkMode} label="Theme" insignia={<span>🌙</span>} />
      </HeaderStyled>
    </TopNavWrapper>
  );
};
