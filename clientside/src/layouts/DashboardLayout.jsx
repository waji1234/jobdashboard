import React from 'react';
import { Box, CssBaseline,} from '@mui/material';
import { Outlet } from 'react-router-dom';
import SideNavbar from '../Components/SideNavbar/SideNavbar';

const drawerWidth = 280;

const DashboardLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SideNavbar   drawerWidth={drawerWidth} />
      <Box
        component="main"
       sx={{
    bgcolor: 'background.default',
    width: {
      xs: '100%',      
      sm: '100%',        
      md: `calc(100% - ${drawerWidth}px)`,
    },
    ml: {
      xs: 0,
      sm: 0,
      md: '2px',
    },
    overflowX:'hidden'
  }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;