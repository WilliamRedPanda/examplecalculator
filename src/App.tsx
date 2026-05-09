import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import useLocalStorage from "use-local-storage";
import { Toaster } from "react-hot-toast";
import { store } from "./store";
import { AppContent, AppWrapper, darkTheme, lightTheme } from "./styles/style";
import { TopNav } from "./components/TopNav";
import { CalculatorForm } from "./components/CalculatorForm";

function App() {
  const [darkMode] = useLocalStorage("darkMode", true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Provider store={store}>
        <AppWrapper>
          <TopNav />
          <AppContent>
            <CalculatorForm />
          </AppContent>
        </AppWrapper>
        <Toaster position="top-right" />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
