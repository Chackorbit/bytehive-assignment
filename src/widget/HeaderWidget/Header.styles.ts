import { AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledAppBar = styled(AppBar)({
  top: 0,
  left: 0,
  backgroundColor: "#ffffff",
  boxShadow: "none",
  borderBottom: "none",
  color: "#333",
});

export const StyledToolbar = styled(Toolbar)({});

export const HeaderContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

export const TitleSection = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const ActionSection = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});
