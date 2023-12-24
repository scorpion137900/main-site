import { createTheme } from "@mui/material";
//Customize Theme
const theme = createTheme({
  palette: {
    // main: "#0071BC",
    // main: "#008DFB",
    main: "#03aeaf",
    text: {
      // main: "#757575",
      main: "#292632",
      // secondary: "#292632",
      // secondary: "#008DFB",
      secondary: "#03aeaf",
    },
    bg: "#E6F1F9",
    light: {
      main: "#fff",
      secondary: "#F0F0F0",
    },
    primary: {
      // main: "#0071BC",
      main: "#03aeaf",
      contrastText: "#fff",
    },
    transparent: "transparent",
    pending: {
      main: "#F9A825",
    },
    "opacity-bg": {
      main: "#e4f3f3",
      contrastText: "#292632",
    },
    green: {
      main: "#006a61",
      contrastText: "#fff",
    },
    "background-paper": "#f7f9fc",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1350,
      xxl: 1500
    },
  },
  typography: {
    fontFamily: "Cairo, sans-serif",
  },
});
export default theme;
