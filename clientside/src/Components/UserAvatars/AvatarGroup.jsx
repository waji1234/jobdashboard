import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const CustomAvatarGroup = () => {
  const avatars = [
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/women/3.jpg',
    'https://randomuser.me/api/portraits/men/4.jpg',
  ];

  return (
    <Box display="flex" alignItems="center">
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        {/* User avatars */}
        {avatars.map((src, index) => (
          <Avatar
            key={index}
            src={src}
            sx={{
              width: 40,
              height: 40,
              border: '2px solid white',
              zIndex: index + 1,
              marginRight: '-12px',
              boxShadow: 1,
            }}
          />
        ))}

        {/* +7 Avatar */}
        <Avatar
          sx={{
            width: 40,
            height: 40,
            bgcolor: '#555',
            color: 'white',
            border: '2px solid white',
            marginRight: '-12px',
            zIndex: avatars.length + 1,
            fontSize: 14,
            fontWeight: 500,
            boxShadow: 1,
          }}
        >
          +7
        </Avatar>

        {/* Add User Avatar */}
        <Avatar
          sx={{
            width: 40,
            height: 40,
            bgcolor: '#26A69A',
            color: '#fff',
            border: '2px solid white',
            cursor: 'pointer',
            zIndex: 0,
            boxShadow: 1,
          }}
        >
          <PersonAddAlt1Icon fontSize="small" />
        </Avatar>
      </Box>
    </Box>
  );
};

export default CustomAvatarGroup;
