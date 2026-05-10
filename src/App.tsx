import { ThemeProvider } from "styled-components";
import useLocalStorage from "use-local-storage";
import { Toaster } from "react-hot-toast";
import { AppContent, AppWrapper, darkTheme, lightTheme } from "./styles/style";
import { TopNav } from "./components/TopNav";
import { CalculatorForm } from "./components/CalculatorForm";

function App() {
  const [darkMode] = useLocalStorage("darkMode", true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <AppWrapper>
          <TopNav />
          <AppContent role="main">
            <CalculatorForm />
          </AppContent>
        </AppWrapper>
        <Toaster position="top-right" />
    </ThemeProvider>
  );
}

export default App;
