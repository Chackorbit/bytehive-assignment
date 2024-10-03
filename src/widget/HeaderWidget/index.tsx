import React from "react";
import { Typography, IconButton } from "@mui/material";
import {
  AccountCircle,
  Notifications,
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
            : "80px !important",
          transition: "padding 0.3s",
        }}
      >
        <HeaderContainer>
          <TitleSection>
            <Typography variant="h6">{title}</Typography>
          </TitleSection>

          <ActionSection>
            {showNotification && (
              <IconButton
                edge="end"
                color="inherit"
                onClick={onNotificationsClick}
              >
                <Notifications />
              </IconButton>
            )}

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
