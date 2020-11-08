import { createMuiTheme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: green[400],
    },
  },
});

export default theme;
