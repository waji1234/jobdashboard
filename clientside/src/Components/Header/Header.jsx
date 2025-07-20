import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { ArrowLeftCircle, SearchIcon } from "lucide-react";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const Header = () => {
  return (
  
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        p: 2.5,
        borderBottom: "1px solid #CCCCCC",
        backgroundColor: "#fff",
      }}
    >
      <Box display="flex" alignItems="center" gap={2}>
        <ArrowLeftCircle size={28} />
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{ fontSize: { xs: "20px", sm: "28px", md: "32px" } }}
        >
          Website Design
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" gap={2}>
        <TextField
          variant="outlined"
          placeholder="Search"
          size="small"
          sx={{ width: 234 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon size={18} />
              </InputAdornment>
            ),
            sx: { borderRadius: "50px", backgroundColor: "#F2F4F8" },
          }}
        />

       <Box
  display="flex"
  alignItems="center"
  gap={1}
  sx={{
    backgroundColor: '#F2F4F8',
    borderRadius: '999px',
    px: 2,
    py: 1,
  }}
>
  <NotificationsNoneOutlinedIcon fontSize="small" />
  <MarkunreadOutlinedIcon fontSize="small" />
</Box>

      </Box>
    </Box>
  );
};

export default Header;