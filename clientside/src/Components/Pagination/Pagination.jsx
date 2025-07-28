import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Pagination = ({ currentpage, totalPages, onPageChange }) => {
  return (
   <Box
  display="flex"
  justifyContent="space-between"
  alignItems="center"
  sx={{
    px: { xs: "12px", sm: "24px" }, 
    pt: "20px",
    pb: "24px",                    
  }}
>
  <Typography
    fontFamily="Inter"
    fontWeight={500}
    sx={{
      fontSize: { xs: "12px", sm: "14px" }, 
    }}
  >
    Page {currentpage} of {totalPages}
  </Typography>

  <Box display="flex" gap="12px">
    <Button
      onClick={() => onPageChange(currentpage - 1)}
      disabled={currentpage === 1}
      sx={{
        fontFamily: "Inter",
        fontWeight: 600,
        fontSize: { xs: "12px", sm: "14px" },  
        backgroundColor: "#FFFFFF",
        border: "1px solid #D0D5DD",
        color: "#344054",
        borderRadius: "8px",
        px: { xs: "8px", sm: "12px" },      
        py: { xs: "4px", sm: "8px" },
        minWidth: { xs: "64px", sm: "auto" },
        cursor: "pointer",
      }}
    >
      Previous
    </Button>
    <Button
      onClick={() => onPageChange(currentpage + 1)}
      disabled={currentpage === totalPages}
      sx={{
        fontFamily: "Inter",
        fontWeight: 600,
        fontSize: { xs: "12px", sm: "14px" },
        backgroundColor: "#FFFFFF",
        border: "1px solid #D0D5DD",
        color: "#344054",
        borderRadius: "8px",
        px: { xs: "8px", sm: "12px" },
        py: { xs: "4px", sm: "8px" },
        minWidth: { xs: "64px", sm: "auto" },
        cursor: "pointer",
      }}
    >
      Next
    </Button>
  </Box>
</Box>
  );
};

export default Pagination;