import { createMuiTheme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#064B7F",
    },
    secondary: {
      main: green[400],
    },
  },
});

export default theme;
