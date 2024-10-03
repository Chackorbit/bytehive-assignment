import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Divider,
} from "@mui/material";
import {
  Home,
  Analytics,
  ShoppingCart,
  AttachMoney,
  ListAlt,
  Receipt,
  LocalShipping,
  Description,
} from "@mui/icons-material";

interface SidebarProps {
  onHoverChange: (hovered: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onHoverChange }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHoverChange(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHoverChange(false);
  };

  return (
    <Drawer
      variant="permanent"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        width: isHovered ? 240 : 60,
        flexShrink: 0,
        transition: "width 0.3s",
        "& .MuiDrawer-paper": {
          width: isHovered ? 240 : 60,
          boxSizing: "border-box",
          backgroundColor: "#1E293B",
          color: "#ffffff",
          overflowX: "hidden",
          transition: "width 0.3s",
        },
      }}
    >
      <div>
        <List>
          <ListItem sx={{ paddingTop: "20px", paddingBottom: "20px" }}>
            <ListItemIcon>
              <Home sx={{ color: "#94a3b8" }} />
            </ListItemIcon>
            {isHovered && (
              <ListItemText
                primary="Devias"
                secondary="Premium tier"
                sx={{ color: "#cbd5e1" }}
              />
            )}
          </ListItem>

          <Divider sx={{ backgroundColor: "#334155" }} />

          <ListItem component="li">
            <ListItemIcon>
              <Home sx={{ color: "#94a3b8" }} />
            </ListItemIcon>
            {isHovered && <ListItemText primary="Overview" />}
          </ListItem>

          <ListItem component="li">
            <ListItemIcon>
              <Analytics sx={{ color: "#94a3b8" }} />
            </ListItemIcon>
            {isHovered && <ListItemText primary="Analytics" />}
          </ListItem>

          <ListItem component="li">
            <ListItemIcon>
              <ShoppingCart sx={{ color: "#94a3b8" }} />
            </ListItemIcon>
            {isHovered && <ListItemText primary="Ecommerce" />}
          </ListItem>

          <ListItem component="li">
            <ListItemIcon>
              <AttachMoney sx={{ color: "#94a3b8" }} />
            </ListItemIcon>
            {isHovered && <ListItemText primary="Crypto" />}
          </ListItem>

          <Divider sx={{ backgroundColor: "#334155" }} />

          <ListItem>
            {isHovered && (
              <ListItemText
                primary="Analytics"
                sx={{ color: "#94a3b8", paddingLeft: "16px" }}
              />
            )}
          </ListItem>

          <ListItem component="li">
            <ListItemIcon>
              <ListAlt sx={{ color: "#94a3b8" }} />
            </ListItemIcon>
            {isHovered && <ListItemText primary="Products" />}
          </ListItem>

          <ListItem component="li">
            <ListItemIcon>
              <ShoppingCart sx={{ color: "#94a3b8" }} />
            </ListItemIcon>
            {isHovered && <ListItemText primary="Orders" />}
          </ListItem>

          <ListItem component="li">
            <ListItemIcon>
              <Receipt sx={{ color: "#94a3b8" }} />
            </ListItemIcon>
            {isHovered && <ListItemText primary="Invoices" />}
          </ListItem>

          <ListItem component="li">
            <ListItemIcon>
              <LocalShipping sx={{ color: "#94a3b8" }} />
            </ListItemIcon>
            {isHovered && <ListItemText primary="Logistics" />}
          </ListItem>
        </List>
      </div>

      <div style={{ marginTop: "auto", padding: "20px" }}>
        {isHovered && (
          <Button
            variant="outlined"
            startIcon={<Description />}
            sx={{
              borderColor: "#94a3b8",
              color: "#ffffff",
              "&:hover": {
                borderColor: "#ffffff",
                backgroundColor: "#334155",
              },
            }}
          >
            Documentation
          </Button>
        )}
      </div>
    </Drawer>
  );
};

export default Sidebar;
