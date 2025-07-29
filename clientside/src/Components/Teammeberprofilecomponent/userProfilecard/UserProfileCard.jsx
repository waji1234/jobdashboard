import React from 'react'
import { Card, CardContent, Box, Typography} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const UserProfileCard = ({ title,price,icon,paymentcycle,percentage }) => {
     const isYTDEarnings = title === 'YTD Earnings';
  return (
  <Card
  elevation={0}
  sx={{
    border: '1px solid #EAECF0',
    borderRadius: '12px',
    px: '24px',
    pt: '16px',
    pb: '24px',
    minWidth: '200px',
    width: "100%"
  }}
>
  <CardContent sx={{ padding: 0 }}>
    <Box display="flex" flexDirection="column" gap="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
        <Typography
          fontFamily="Inter"
          fontSize="16px"
          fontWeight={600}
          color="#101828"
        >
          {title}
        </Typography>
        <Box
          sx={{
            backgroundColor: '#F9FAFB',
            border: '1px solid #EAECF0',
            borderRadius: '8px',
            padding: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={icon} alt="icon" style={{ width: 16, height: 16 }} />
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" gap="4px">
        <Typography
          fontFamily="Inter"
          fontSize="24px"
          fontWeight={700}
          color="#101828"
        >
          ${price.toLocaleString()}
        </Typography>
         <Box display="flex" alignItems="center" gap="6px">
              {isYTDEarnings && (
                <>
                  <ArrowUpwardIcon sx={{ fontSize: 16, color: '#12B76A' }} />
                  <Typography fontFamily="Inter" fontSize="14px" fontWeight={500} color="#12B76A">
                    {percentage}%
                  </Typography>
                </>
              )}
              <Typography fontFamily="Inter" fontSize="14px" fontWeight={500} color="#667085">
                {paymentcycle}
              </Typography>
            </Box>
      </Box>
    </Box>
  </CardContent>
</Card>
  )
}

export default UserProfileCard;