import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Badge from "@mui/material/Badge";

const JobDashboardHeader = () => {
  const notificationCount = 2;
  return (
    <Box
  display="flex"
  justifyContent="space-between"
  alignItems="center"
  sx={{
    pl: { xs: "40px", sm: "40px", md: "40px" }, 
    pr: { xs: "16px", sm: "20px", md: "80px" },
    height: '80.7px',
    borderBottom: "1px solid #CCCCCC",
    backgroundColor: "#fff",
  }}
>
  <Typography
    sx={{
      fontSize: "28px",
      fontFamily: "Roboto",
      fontWeight: 500,
      color: "#21272A",
    }}
  >
    Proposal
  </Typography>

  <Box
    display="flex"
    alignItems="center"
    gap={1}
    sx={{
      backgroundColor: "#F2F4F8",
      borderRadius: "43px",
      px: '16px',
      py: '15px',
    }}
  >
    <Badge
      color="error"
      variant="dot"
      invisible={notificationCount < 1}
    >
      <NotificationsNoneOutlinedIcon fontSize="small" />
    </Badge>
    <MarkunreadOutlinedIcon fontSize="small" />
  </Box>
</Box>
  );
};

export default JobDashboardHeader;