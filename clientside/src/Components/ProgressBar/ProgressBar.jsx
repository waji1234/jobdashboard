import React from 'react';
import { Box, Typography } from '@mui/material';

const CustomProgressBar = ({ value }) => {
  return (
    <Box
      sx={{
        width: '234px',
        height: 30,
        borderRadius: "10px",
        border: '0.3px solid #00000026',
        backgroundImage: `
          repeating-linear-gradient(
            -45deg,
            #ffffff,
            #ffffff 10px,
            #f2f2f2 10px,
            #f2f2f2 20px
          )
        `,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          width: `${value}%`,
          height: '100%',
          backgroundColor: '#26A69A', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          pl: 2,
          borderRadius: '10px',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          transition: 'width 0.4s ease-in-out',
        }}
      >
        <Typography variant="body2" sx={{ color: '#fff', fontWeight: 600 }}>
          {`${value}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomProgressBar;