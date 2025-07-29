import React from 'react'
import {
  Box,
  Typography,
  Paper,
  Button,
} from '@mui/material';
import FileLogo from '../../../assets/file-logo.svg'
import calenderlogo from  '../../../assets/Salarycalender.svg'
import checkIcon from '../../../assets/Tickmark.svg'
import viewIcon from '../../../assets/eye.svg'
import downloadIcon from '../../../assets/downloadsalaryslip.svg'


const salaryData = [
  {
    month: 'December 2024',
    paidOn: 'December 31, 2024',
    amount: 5000,
    status: 'Paid',
  },
  {
    month: 'January 2025',
    paidOn: 'January 31, 2025',
    amount: 5000,
    status: 'Paid',
  },
  {
    month: 'February 2025',
    paidOn: 'February 28, 2025',
    amount: 5000,
    status: 'Paid',
  },
  {
    month: 'March 2025',
    paidOn: 'March 30, 2025',
    amount: 5000,
    status: 'Paid',
  },
];

const SalaryStatement = () => {
  return (
     <Paper elevation={0}
      sx={{
        px: '20px',
        pt:'20px',
        pb:'24px',
        borderRadius: '12px',
        border: '0.75px solid #D9DADF',
        backgroundColor: '#FFFFFF',
        display:'flex',
        flexDirection:'column',
        gap:'20px',
      }}
    >
      <Box display="flex" alignItems="center" mb={3} gap={1}>
        <img
    src={ FileLogo}
    alt="Salary Icon"
    style={{ width: 20, height: 20 }}
  />
        <Typography color='#21272A' fontFamily='Roboto' fontSize='24px'  fontWeight={500}>
           Salary Statements
        </Typography>
      </Box>

      {salaryData.map((item, index) => (
  <Box
  key={index}
  display="flex"
  flexDirection={{ xs: 'column', sm: 'row' }}
  alignItems={{ xs: 'flex-start', sm: 'center' }}
  justifyContent="space-between"
  p={2}
  border="1px solid #EAECF0"
  borderRadius="12px"
  mb={2}
  gap={{ xs: 2, sm: 0 }}
>
  <Box display="flex" alignItems="center" gap="26px" width="100%">
    <Box
      sx={{
        p: 1,
        backgroundColor: '#F9FAFB',
        border: '1px solid #EAECF0',
        borderRadius: '8px',
      }}
    >
      <img
        src={calenderlogo}
        alt="Calendar Icon"
        style={{ width: 20, height: 20 }}
      />
    </Box>
    <Box>
      <Typography fontFamily="Roboto" fontSize="18px" color="#21272A" fontWeight={500}>
        December 2024
      </Typography>
      <Typography fontWeight={400} fontFamily="Roboto" fontSize="14px" color="#667085">
        Paid on December 31, 2024
      </Typography>
    </Box>
  </Box>
  <Box
    display="flex"
    flexDirection={{ xs: 'column', sm: 'row' }}
    alignItems={{ xs: 'flex-start', sm: 'center' }}
    gap={{ xs: 1.5, sm: 2 }}
    width="100%"
  >
    <Box textAlign={{ xs: 'left', sm: 'right' }} flexGrow={1}>
      <Typography fontWeight={500} fontFamily="Roboto" color="#21272A" fontSize="14px">
        ${item.amount.toFixed(2)}
      </Typography>
      <Typography fontSize="12px" fontWeight={400} fontFamily="Roboto" color="#667085">
        Net Pay
      </Typography>
    </Box>

    <Box
      sx={{
        backgroundColor: '#ECFDF3',
        color: '#027A48',
        fontSize: '14px',
        fontWeight: 500,
        px: 1.5,
        py: 0.5,
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
        whiteSpace: 'nowrap',
      }}
    >
      <img src={checkIcon} alt="Status Icon" style={{ width: 16, height: 16 }} />
      {item.status}
    </Box>

    <Box display="flex" gap={1} flexWrap={{ xs: 'wrap', sm: 'nowrap' }}>
      <Button
        variant="outlined"
        size="small"
        startIcon={
          <img src={viewIcon} alt="View Icon" style={{ width: 20, height: 20 }} />
        }
        sx={{
          textTransform: 'none',
          borderRadius: '8px',
          fontWeight: 600,
          color: '#344054',
          fontFamily: 'Inter',
          fontSize: '14px',
          border: '1px solid #D0D5DD',
        }}
      >
        View
      </Button>
      <Button
        variant="outlined"
        size="small"
        startIcon={
          <img src={downloadIcon} alt="Download Icon" style={{ width: 20, height: 20 }} />
        }
        sx={{
          textTransform: 'none',
          borderRadius: '8px',
          fontWeight: 600,
          fontFamily: 'Inter',
          fontSize: '14px',
          color: '#344054',
          border: '1px solid #D0D5DD',
        }}
      >
        Download
      </Button>
    </Box>
  </Box>
</Box>
))}

    </Paper>
  )
}

export default SalaryStatement;