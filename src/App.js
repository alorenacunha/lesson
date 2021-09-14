import { ThemeProvider } from "styled-components";
import Home from "./pages/home";
import { theme } from "./assets/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
