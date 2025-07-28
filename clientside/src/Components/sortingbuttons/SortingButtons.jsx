import { Box, Button, TextField, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const SortingButtons = ({ searchTerm, handleSearch, sort }) => {
  return (
   <Box
  display="flex"
  gap="10px"
  alignItems="center"
  py="16.5px"
  sx={{
    pr: { xs: "4px", sm: "16px", md: "24px" }, 
    justifyContent: { xs: "center", sm: "flex-end" }, 
  }}
>

      <TextField
        size="small"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
        InputProps={{ startAdornment: <SearchIcon color="action" /> }}
        sx={{
          width: "320px",
          height: "40px",
          border: "1px solid #D0D5DD",
          borderRadius: "8px",
        }}
      />
      <Button
        onClick={sort}
        sx={{
          width: "81px",
          height:'36px',
          borderRadius: "8px",
          border: "1px solid #D0D5DD",
          backgroundColor: "#FFFFFF",
          color: "#344054",
          display: "flex",
          gap: "4px",
          fontFamily: "Inter",
          fontWeight: 600,
          fontSize: "14px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ArrowUpwardIcon
          sx={{
            width: "20px",
            height: "20px",
          }}
        />
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: "600",
            color: "#344054",
            fontSize: "14px",
          }}
        >
          Sort
        </Typography>
      </Button>
    </Box>
  );
};

export default SortingButtons;