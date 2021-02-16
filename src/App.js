import { Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button>Click Me</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
