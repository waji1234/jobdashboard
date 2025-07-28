import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import centrixlogo from "../../assets/Centrix_Logo .svg";
import { navItems } from "../../Constant/constant";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Avatar,
  Typography,
  Paper,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";

const SideNavbar = ({ drawerWidth }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <>
      <Toolbar sx={{ px: "47.88px", mb: "24px" }}>
        <img
          src={centrixlogo}
          alt="Centrixhub.ai"
          style={{ width: "184.24px", height: "58px" }}
        />
      </Toolbar>
      <List>
        {navItems.map(({ label, icon, path }, index) => (
          <NavLink
            to={path}
            key={label}
            style={({ isActive }) => ({
              textDecoration: "none",
              color: "#344054",
              backgroundColor: isActive ? "#FBEEF5" : "transparent",
              display: "block",
            })}
          >
            <ListItem
              button
              sx={{
                pl: "25px",
                pr: "66.59px",
                height: "39px",
                gap: "20px",
                mb: index !== navItems.length - 1 ? "15px" : 0,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: "20px",
                  width: "20px",
                  height: "20px",
                }}
              >
                <img src={icon} alt="icon" />
              </ListItemIcon>
              <ListItemText
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "16px",
                  color: "#344054",
                }}
                primary={label}
              />
            </ListItem>
          </NavLink>
        ))}
      </List>

      <Box
        sx={{
          px: "35px",
          mt: "281px",
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        <Paper
        elevation={0}
          sx={{
            display: "flex",
            bgcolor: "#FFFFFF",
            border: "1px solid #CCCCCC",
            borderRadius: "4px",
            alignItems: "center",
            pl: "7px",
          }}
        >
          <Avatar
            sx={{
              backgroundImage: "linear-gradient(to bottom, #7D43D3, #9347B4)",
              fontFamily: "Roboto",
              fontWeight: 450,
              fontSize: "16px",
              width: "35px",
              pt: "7px",
              pb: "8px",
              height: "35px",
            }}
          >
            DD
          </Avatar>
          <Box sx={{ ml: "12px", gap: "2px", pt: "9px", pb: "8px" }}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 430,
                fontFamily: "Roboto",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              Design Den
            </Typography>
            <Typography
              fontFamily="Roboto"
              fontSize="12px"
              fontWeight={400}
              variant="caption"
              color="#777777"
            >
              Current workspace
            </Typography>
          </Box>
        </Paper>
        <Box  display="flex" alignItems="center" gap="12px">
          <Box
            sx={{
              width: "1px",
              height: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: "100%",
            }}
          >
            <Typography
              fontFamily="Roboto"
              sx={{
                fontSize: "10px",
                lineHeight: "1",
                fontWeight: 400,
                marginLeft: "2px",
                color: "#697077",
              }}
            >
              ©
            </Typography>
          </Box>
          <Typography
            fontFamily="Roboto"
            fontSize="10px"
            fontWeight={400}
            variant="caption"
            color="#697077"
          >
            2024 centrixhub.ai
          </Typography>
        </Box>
      </Box>
    </>
  );

  return (
    <>
      {isMobile && (
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ position: "fixed", top: 16, left: 16, zIndex: 1301 }}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            pt: "40px",
            pb: "64px",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default SideNavbar;