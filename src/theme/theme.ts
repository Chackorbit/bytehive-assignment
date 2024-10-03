import { createTheme } from "@mui/material/styles";

// Створюємо тему
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Основний колір
    },
    secondary: {
      main: "#6366F1", // Вторинний колір
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif", // Налаштування шрифтів
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
          borderRadius: "8px", // Закруглені кути у кнопки
          padding: "10px 20px",
          textTransform: "none", // Текст без UpperCase
        },
      },
    },
  },
});

export default theme;
