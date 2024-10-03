import { styled } from "@mui/material/styles";
import theme from "../../theme/theme";

export const BoardContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  marginTop: "50px",
  gap: "20px",
  padding: "20px",
  width: "100%", // Додаємо 100% ширини для заповнення екрану
  backgroundColor: "#f8f9fa", // Налаштування фону
  borderRadius: "10px", // Закруглені краї
  // boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Додаємо тінь для вигляду
});

export const HeaderEcommercTittle = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  color: "#000000",

  "& h2": {
    fontSize: "32px",
    fontWeight: 700,
  },
});

export const RevenueChartContainer = styled("div")({
  width: "800px",
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "start",

  "& h3": {
    color: "#000000",
  },
});

export const TopSellingProductsContainer = styled("div")({
  backgroundColor: "#ffffff",
  color: "#111927",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "start",
  maxWidth: "450px",
});

export const ProductList = styled("div")({
  marginTop: "20px",
  display: "flex",
  flexDirection: "column",
});

export const ProductItem = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#000000",
  borderRadius: "8px",
  padding: "10px 16px", // Додаємо відступи всередині елементу
  width: "100%",
  maxWidth: "450px", // Максимальна ширина для кращого вигляду
  borderBottom: "1px solid #E0E0E0", // Лінія між елементами

  "& div": {
    display: "flex",
    alignItems: "center",

    gap: "16px",
  },

  "& img": {
    width: "40px",
    marginRight: "16px", // Відступ між зображенням і текстом
  },

  "& p": {
    display: "flex",
    flexDirection: "column",
    // margin: "0 16px", // Відступ між блоками тексту
    // minWidth: "120px", // Мінімальна ширина для вирівнювання тексту
  },

  "& span": {
    color: "#6C737F",
  },

  "& .numberItem": {
    width: "32px",
    marginLeft: "16px",
    backgroundColor: "#00000012",
    padding: "4px",
    borderRadius: "12px",
    textAlign: "center", // Текст по центру всередині блока
  },

  "& .title, .numberItem": {
    color: "#111927",
  },

  "& .purchasesQuantity": {
    color: "#15B79E",
  },
});

export const SyncButton = styled("button")({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  backgroundColor: theme?.palette?.secondary.main,
  color: "#ffffff",
  border: "none",
  borderRadius: "12px",
  padding: "10px",
  textAlign: "center",
  fontSize: "14px",
  fontWeight: "600",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#2b6cb0",
  },
  "& svg": {
    transform: "rotateY(180deg)",
  },
});
