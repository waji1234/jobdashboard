// sidebar dashboard

import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import DescriptionIcon from '@mui/icons-material/Description';
import FolderIcon from '@mui/icons-material/Folder';
import GroupIcon from '@mui/icons-material/Group';
import ChatIcon from '@mui/icons-material/Chat';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BarChartIcon from '@mui/icons-material/BarChart';
import ReceiptIcon from '@mui/icons-material/Receipt';

const drawerWidth = 240;
const navItems = [
  { label: 'Dashboard', icon: <DashboardIcon /> },
  { label: 'Clients', icon: <PeopleIcon /> },
  { label: 'Proposals', icon: <DescriptionIcon /> },
  { label: 'Projects', icon: <FolderIcon /> },
  { label: 'Team', icon: <GroupIcon /> },
  { label: 'Chat', icon: <ChatIcon /> },
  { label: 'Calendar', icon: <CalendarTodayIcon /> },
  { label: 'Report', icon: <BarChartIcon /> },
  { label: 'Invoice', icon: <ReceiptIcon /> },
];

const Layout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Centrixhub.ai
          </Typography>
        </Toolbar>
        <List>
          {navItems.map((item) => (
            <ListItem button key={item.label}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          ml: `${drawerWidth}px`,
          width: `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;