import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import {
  AccountCircle,
  Notifications,
  Settings,
  KeyboardArrowDown,
} from "@mui/icons-material";
import {
  HeaderContainer,
  TitleSection,
  ActionSection,
  StyledAppBar,
  StyledToolbar,
} from "./Header.styles.ts";

interface HeaderProps {
  title?: string;
  showNotification?: boolean;

  onNotificationsClick?: () => void;
  isSidebarExpanded: boolean;
  name?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showNotification = true,
  onNotificationsClick,
  isSidebarExpanded,
  name = "John Doe",
}) => {
  return (
    <StyledAppBar position="absolute">
      <StyledToolbar
        sx={{
          paddingLeft: isSidebarExpanded
            ? "260px !important"
            : "80px !important", // Зміщення залежно від стану сайдбара
          transition: "padding 0.3s", // Плавна анімація зміщення
        }}
      >
        <HeaderContainer>
          {/* Лівий блок з назвою */}
          <TitleSection>
            <Typography variant="h6">{title}</Typography>
          </TitleSection>

          {/* Правий блок з діями */}
          <ActionSection>
            {/* Іконка нотифікацій */}
            {showNotification && (
              <IconButton
                edge="end"
                color="inherit"
                onClick={onNotificationsClick}
              >
                <Notifications />
              </IconButton>
            )}

            {/* Іконка профілю */}
            <IconButton edge="end" color="inherit">
              <AccountCircle />
            </IconButton>

            <Typography>{name}</Typography>

            <IconButton edge="end" color="inherit">
              <KeyboardArrowDown />
            </IconButton>
          </ActionSection>
        </HeaderContainer>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
