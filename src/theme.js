import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ADD8E6",
    },
    secondary: {
      main: "#0000FF",
    },
    error: {
      main: "#B20000",
    },
    background: {
      default: "#fffeea",
    },
    textSecondary: {
      main: "#0000FF",
    },
  },
});

export default theme;
