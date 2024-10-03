import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#6366F1",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "10px 20px",
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
