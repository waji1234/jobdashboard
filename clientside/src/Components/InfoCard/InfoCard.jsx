import React from "react";
import { Card, Typography, IconButton, Box, Avatar } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const InfoCard = ({ title, value, icon, bgColor}) => {
  return (
   <Card 
   elevation={0}
  sx={{
    display: "flex",
    alignItems: "center",
    p:{xs:'24px', sm:"24px", lg:'24px', md:'4px'}, 
    borderRadius: "12px",
    border:'1px solid #EAECF0',
    gap:{lg:"24px",sm:'24px', xs:'24px', md:'4px'} 
  }}
>
  <Avatar sx={{ width:{xs: "48px", sm:'48px', lg:'48px', md:'30px'}, height: {xs: "48px", sm:'48px', lg:'48px', md:'30px'}, bgcolor: bgColor }}>
    <img src={icon} alt="icon" style={{ width: "24px", height: "24px" }} />
  </Avatar>

  <Box display="flex" flexDirection="column" gap="8px">
    <Box
      display="flex"
      alignItems="center"
      sx={{
        gap: { xs:'24px', sm: "24px", lg:'24px', md: "2px" },
      }}
    >
      <Typography
        fontFamily="Roboto"
        fontSize="16px"
        noWrap
        fontWeight={500}
        color="#484A54"
        sx={{
    whiteSpace: {
      sm: 'nowrap',
      lg:'nowrap',
      md: 'normal',
    },
  }}
      >
        {title}
      </Typography>
      <IconButton size="small">
        <MoreVertIcon fontSize="small" />
      </IconButton>
    </Box>

    <Typography
      fontFamily="Inter"
      fontSize="36px"
      fontWeight={600}
      color="#101828"
    >
      {value}
    </Typography>
  </Box>
</Card>
  );
};

export default InfoCard;