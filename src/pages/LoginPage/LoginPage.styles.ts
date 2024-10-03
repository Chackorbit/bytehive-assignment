import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const LoginPageContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "left",
});

export const LoginForm = styled("form")(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(4),
  borderRadius: "10px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  maxWidth: "400px",
  width: "100%",
}));

export const BottomLinks = styled(Box)({
  marginTop: "1rem",
  display: "flex",
  justifyContent: "center",
});
