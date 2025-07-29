import React from 'react'
import { Box, CircularProgress, Typography } from '@mui/material';

const CircularProgressbar = ({ value }) => {
  return (
  <Box
      position="relative"
      display="inline-flex"
      width={160}
      height={160}
    >
      <CircularProgress
        variant="determinate"
        value={100}
        size={160}
        thickness={4}
        sx={{
          color: '#E0E0E0', 
          position: 'absolute',
        }}
      />
      <CircularProgress
        variant="determinate"
        value={value}
        size={160}
        thickness={4}
        sx={{
          color: '#007980', 
          position: 'absolute',
        }}
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        bottom={0}
        right={0}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="subtitle2" color="#1F2A37">
          Score
        </Typography>
        <Typography variant="h6" fontWeight="bold" color="#1F2A37">
          {`${value}%`}
        </Typography>
      </Box>
    </Box>
  )
}

export default CircularProgressbar
