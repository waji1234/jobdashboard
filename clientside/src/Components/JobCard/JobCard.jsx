
import React from 'react';
import { Box, CardContent, Paper, Typography, Card, IconButton, Chip } from '@mui/material';
import {
  Avatar,
  AvatarGroup,

  Stack,
  Divider
} from '@mui/material';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import RedoSharpIcon from '@mui/icons-material/RedoSharp';
import {
  MoreHoriz as MoreHorizIcon,
  ChatBubbleOutline as CommentIcon,
  CalendarToday as CalendarIcon,
  DonutLarge as ProgressIcon,
} from '@mui/icons-material';

const priorityColors = {
  Urgent: '#F04438',
  High: '#EF6820',
  Medium: '#FDB022',
  Normal: '#17B26A',
  Low: '#667085',
};

          
const ProjectCard = ({title='UX Research',subtitle='Website',priority='Urgent'}) => {
  return (
    <Card 
      sx={{ 
        width: 251,
        borderRadius: 2,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        border: '1px solid #e0e0e0'
      }}
    >
      <CardContent sx={{ p: 2 }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 2 
        }}>
<Chip
  label={priority}
  size="small"
  icon={
    <FlagOutlinedIcon
      sx={{ 
        fontSize: 16, 
        color: priorityColors[priority],  
        ml: 0.5 
      }} 
    />
  }
  sx={{
    backgroundColor: `${priorityColors[priority]}1A`, 
    color: priorityColors[priority],
    fontWeight: 500,
    pl: 1,
    pr: 1.5,
    height: 24,
    borderRadius: '6px',
    '& .MuiChip-icon': {
      marginLeft: 0,
      marginRight: '4px',
    },
  }}
/>

          <IconButton size="small" sx={{ color: '#666' }}>
            <MoreHorizIcon fontSize="small" />
          </IconButton>
        </Box>
        <Typography 
          variant="h6" 
          fontFamily="Roboto"
          fontSize='18px'
          sx={{ 
            fontWeight: 450,
            color: '#151516',
            mb: 1,
            fontSize: '1.1rem'
          }}
        >
          {title}
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          mb: 2,
          gap: 1
        }}>
    <RedoSharpIcon
  sx={{
    fontSize: 16,
    color: '#CACACA',
    width:"20px",
    height:'20px',
    transform: 'scaleY(-1)',
  }}
/>
       <Typography
  sx={{
    color: '#535353',
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: 450,
    px: 1,
  }}
>
  {subtitle}
</Typography>
        </Box>

        <Divider sx={{ my: 2 }} />
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <AvatarGroup 
            max={4} 
            sx={{ 
              '& .MuiAvatar-root': { 
                width: 16, 
                height: 16, 
                fontSize: '0.8rem',
                border: '2px solid white'
              } 
            }}
          >
            <Avatar sx={{ bgcolor: '#ff9800' }}>👨</Avatar>
            <Avatar sx={{ bgcolor: '#4caf50' }}>👩</Avatar>
            <Avatar sx={{ bgcolor: '#9c27b0' }}>👨</Avatar>
            <Avatar sx={{ bgcolor: '#2196f3', fontSize: '0.7rem' }}>+3</Avatar>
          </AvatarGroup>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              color: '#666',
              gap: 0.5
            }}>
              <CommentIcon sx={{ fontSize: 12 }} />
              <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>
                5
              </Typography>
            </Box>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              color: '#666',
              gap: 0.5
            }}>
              <CalendarIcon sx={{ fontSize: 13 }} />
              <Typography variant="caption" sx={{ fontSize: '13px' }}>
                5 Oct
              </Typography>
            </Box>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              color: '#666',
              gap: 0.5
            }}>
              <ProgressIcon sx={{ fontSize: 16 }} />
              <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>
                0%
              </Typography>
            </Box>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;