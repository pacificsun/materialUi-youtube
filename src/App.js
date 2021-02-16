import { Button, Typography } from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import theme from "./theme";

const useStyles = makeStyles({
  helloThereStyle: {
    fontStyle: "oblique",
    color: "red",
    fontSize: "30px",
  },

  buttonStyles: {
    color: "green",
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Typography className={classes.helloThereStyle} variant="h1">
          Hello There
        </Typography>
        <Button className={classes.buttonStyles} variant="outlined">
          Click Me
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
