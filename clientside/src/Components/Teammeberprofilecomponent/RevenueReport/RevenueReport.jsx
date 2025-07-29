import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  Chip,
  Stack,
} from '@mui/material';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

const RevenueReport = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('12 months');

  const data = [
    { month: 'Jan', line1: 120, line2: 330, line3: 420 },
    { month: 'Feb', line1: 130, line2: 350, line3: 450 },
    { month: 'Mar', line1: 125, line2: 340, line3: 480 },
    { month: 'Apr', line1: 140, line2: 300, line3: 520 },
    { month: 'May', line1: 160, line2: 380, line3: 580 },
    { month: 'Jun', line1: 180, line2: 420, line3: 680 },
    { month: 'Jul', line1: 220, line2: 430, line3: 700 },
    { month: 'Aug', line1: 260, line2: 450, line3: 810 },
    { month: 'Sep', line1: 240, line2: 440, line3: 650 },
    { month: 'Oct', line1: 250, line2: 460, line3: 750 },
    { month: 'Nov', line1: 280, line2: 470, line3: 720 },
    { month: 'Dec', line1: 300, line2: 500, line3: 880 },
  ];

  const periods = ['12 months', '3 months', '30 days', '7 days', '24 hours'];

  const formatYAxisLabel = (value) => {
    return `$ ${value}`;
  };

  return (
    <Box sx={{display:'flex', flexDirection:'column', gap:'20px',  backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Paper 
        elevation={0} 
        sx={{ 
    p: { xs: 2, sm: 3 }, 
    backgroundColor: 'white',
    borderRadius: 2,
    border: '1px solid #e0e0e0',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)'
  }}
      >
        <Box 
  sx={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: { xs: 'flex-start', sm: 'center' },
    flexDirection: { xs: 'column', sm: 'row' },
    gap: { xs: 2, sm: 0 },
    mb: 3 
  }}
>
          <Box>
            <Typography 
               sx={{ 
                fontWeight: 600, 
                color: '#101828',
                fontFamily:'Inter',
                mb: 0.5,
                fontSize: '18px',
              }}
            >
              Revenue report
            </Typography>
            <Typography 
              sx={{ 
                color: '#475467',
                fontFamily:'Inter',
                fontWeight:400,
                fontSize: '14px',
                marginTop:'4px',
              }}
            >
              Track task completion trends and performance over time.
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#0F7D82',
              color: '#FFFFFF',
              border:'1px solid #0F7D82',
              fontWeight: 600,
              fontFamily:'Inter',
             px: 2,
              py: 1,

              borderRadius: '8px',
              fontSize: '14px',
              '&:hover': {
                backgroundColor: '#0a5d61',
              }
            }}
          >
            View All
          </Button>
        </Box>
      <Box
  sx={{
    mb: 4,
    backgroundColor: '#F9FAFB',
    border: '1px solid #EAECF0',
    borderRadius: '8px',
    px: '4px',
    py: '4px',
  }}
>
  <Stack
    direction={{ xs: 'row', sm: 'row' }}
    flexWrap={{ xs: 'wrap', sm: 'nowrap' }}
    spacing={1}
    rowGap={{ xs: 1, sm: 0 }}
  >
    {periods.map((period) => (
      <Chip
        key={period}
        label={period}
        onClick={() => setSelectedPeriod(period)}
        variant={selectedPeriod === period ? 'filled' : 'outlined'}
        sx={{
          backgroundColor: selectedPeriod === period ? '#FFFFFF' : '#F9FAFB',
          color: selectedPeriod === period ? '#344054' : '#667085',
          fontFamily: 'Inter',
          borderRadius: '6px',
          border: 'none',
          fontWeight: 600,
          fontSize: '14px',
          height: '32px',
          '&:hover': {
            backgroundColor: selectedPeriod === period
              ? '#e0e0e0'
              : '#e8e8e8',
          },
          '& .MuiChip-label': {
            px: 1.5,
          },
        }}
      />
    ))}
  </Stack>
</Box>
      <Box 
  sx={{ 
    height: { xs: 300, sm: 400 }, 
    width: '100%', 
    position: 'relative', 
    pl: { xs: 0, sm: '2px' } 
  }}
>
            <Typography
  sx={{
    position: 'absolute',
    left: { xs: '-24px', sm: '-16px' }, 
    top: '50%',
    transform: 'rotate(-90deg) translateY(-50%)',
    transformOrigin: 'center',
    fontSize: '12px',
    color: '#666',
    whiteSpace: 'nowrap',
    zIndex: 1,
  }}
  >
    Working Hours
  </Typography>
          
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 20,
                right: 15,
                left: 10,
                bottom: 40,

              }}
            >
              <XAxis 
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#666' }}
                dy={10}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#666' }}
                tickFormatter={formatYAxisLabel}
                domain={[0, 1000]}
                ticks={[0, 200, 400, 600, 800, 1000]}
              />
              <ReferenceLine y={200} stroke="#f0f0f0" strokeDasharray="none" />
              <ReferenceLine y={400} stroke="#f0f0f0" strokeDasharray="none" />
              <ReferenceLine y={600} stroke="#f0f0f0" strokeDasharray="none" />
              <ReferenceLine y={800} stroke="#f0f0f0" strokeDasharray="none" />
              <ReferenceLine y={1000} stroke="#f0f0f0" strokeDasharray="none" />
              <Area 
                type="monotone" 
                dataKey="line1" 
                stroke="#B5287C"
                strokeWidth={2}
                fill=" #FEFCFD"
               
                dot={false}
                activeDot={{ r: 4, fill: '#7c2d7c' }}
              />
              <Area 
                type="monotone" 
                dataKey="line2" 
                stroke="#D256A0"
                strokeWidth={2}
                fill="#FDF8FB"
                dot={false}
                activeDot={{ r: 4, fill: '#c471a8' }}
              />
              <Area 
                type="monotone" 
                dataKey="line3" 
                stroke="#8D1F61"
                strokeWidth={2}
                fill="#FBF2F7"
                dot={false}
                activeDot={{ r: 4, fill: '#e91e63' }}
              />
            </AreaChart>
          </ResponsiveContainer>
          
          <Typography
            sx={{
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '12px',
    color: '#666',
    zIndex: 1,
    textAlign: 'center',
  }}
          >
            Month
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default RevenueReport;