import {createTheme} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#336aeb",
    },
    secondary: {
      main: "#ff4081",
    },
    error: {
      main: "#d32f2f",
    },
    background: {
      default: "rgba(36, 36, 36, 0.7)",
    },
    text: {
      primary: "#ddd",
    },
  },
  typography: {
    fontFamily: "'Cascadia Mono', monospace",
    allVariants: {
      letterSpacing: "0.01rem",
      lineHeight: 1.5,
    },
    h1: {
      fontSize: "4rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: ({theme}) => ({
          color: theme.palette.primary.main,
          textDecoration: "none",
          transition: "color 0.2s ease",
          "&:hover": {
            color: theme.palette.primary.dark,
          },
        }),
      },
    },
  },
});

export default theme;
