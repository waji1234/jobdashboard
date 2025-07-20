import React from 'react';
import { Box, Paper, Typography, CardContent } from '@mui/material';
import ProjectCard from '../JobCard/JobCard';

const JobColumn = ({ title = "To do", tasks = [{},{},{}], Icon, backgroundcolor= '#F6F6F6' }) => {
  return (
    <Box sx={{ p: '10px', backgroundColor: 'white', minWidth: 280 }}>
      <CardContent sx={{ p: 0 }}>
        <Paper
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            borderRadius: '8px',
            backgroundColor: backgroundcolor,
            p: 1,
          }}
        >
          <Icon fontSize="small" />
          <Typography fontWeight={500} fontSize="15px">
            {title}
          </Typography>
        </Paper>

        <Box mt={2} display="flex" flexDirection="column" gap={2}>
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <ProjectCard key={index} {...task} />
            ))
          ) : (
            <Typography variant="body2" sx={{ mt: 1, color: 'gray' }}>
              No tasks available
            </Typography>
          )}
        </Box>
      </CardContent>
    </Box>
  );
};

export default JobColumn;