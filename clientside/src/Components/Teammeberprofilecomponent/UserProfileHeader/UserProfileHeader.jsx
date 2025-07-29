import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import ProfileAvatar from '../../../assets/Avatarprofile.svg';
import firediticon from '../../../assets/fi-rr-edit.svg';
import phone from '../../../assets/phone.svg';
import maillogo from '../../../assets/mail-logo.svg';
import walletlogo from '../../../assets/wallet-logo.svg';
import CircularProgressbar from '../CircularProgressbar/CircularProgressbar';

const UserProfileHeader = () => {
  return (
 <Paper
  elevation={0}
  sx={{
    backgroundColor: '#FFFFFF',
    border: '0.75px solid #D9DADF',
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' }, 
    borderRadius: '12px',
    justifyContent: { xs: 'center', md: 'space-between' },
    alignItems: { xs: 'center', md: 'center' },
    px: { xs: '16px', md: '24px' },
    py: { xs: '16px', md: '24px' },
    gap: { xs: '16px', md: '24px' },
  }}
>
  <Box sx={{ flexShrink: 0 }}>
    <img
      src={ProfileAvatar}
      alt="userProfile"
      style={{
        width: '160px',
        height: '160px',
        objectFit: 'cover',
        borderRadius: '50%',
      }}
    />
  </Box>

  <Box
    display="flex"
    flexDirection="column"
    gap="25.5px"
    flex={1}
    sx={{
      minWidth: 0,
      alignItems: { xs: 'center', md: 'flex-start' },
      textAlign: { xs: 'center', md: 'left' },
    }}
  >
    <Box display="flex" flexDirection="column" gap="11px">
      <Box
        display="flex"
        gap="12px"
        alignItems="center"
        justifyContent={{ xs: 'center', md: 'flex-start' }}
      >
        <Typography
          color="#030303"
          fontFamily="Roboto"
          fontSize="28px"
          lineHeight="100%"
          fontWeight={400}
        >
          Jhon Smith
        </Typography>
        <Button sx={{ cursor: 'pointer', minWidth: 0, padding: 0 }}>
          <img
            src={firediticon}
            alt="edit"
            style={{ width: '12px', height: '12px' }}
          />
        </Button>
      </Box>

      <Box
        sx={{
          display: 'inline-block',
          alignSelf: { xs: 'center', md: 'flex-start' },
          borderRadius: '6px',
          px: '12px',
          bgcolor: '#EFF8FF',
          border: '1px solid #2E90FA',
        }}
      >
        <Typography
          fontFamily="Roboto"
          color="#2E90FA"
          fontWeight={400}
          fontSize="18px"
        >
          Full Stack Developer
        </Typography>
      </Box>
    </Box>

    <Box
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }}
      alignItems="center"
      gap="12px"
      flexWrap="wrap"
    >
      <Box display="flex" gap="4px" alignItems="center">
        <img src={phone} alt="contact" />
        <Typography
          fontFamily="Roboto"
          color="#030303"
          fontSize="16px"
          fontWeight={400}
        >
          (505) 555-0125
        </Typography>
      </Box>
      <Box display="flex" gap="4px" alignItems="center">
        <img src={maillogo} alt="Email" />
        <Typography
          fontFamily="Roboto"
          color="#030303"
          fontSize="16px"
          fontWeight={400}
        >
          bill.sanders@example.com
        </Typography>
      </Box>
      <Box display="flex" gap="4px" alignItems="center">
        <img src={walletlogo} alt="Wallet" />
        <Typography
          fontFamily="Roboto"
          color="#030303"
          fontSize="16px"
          fontWeight={400}
        >
          $45 / hr
        </Typography>
      </Box>
    </Box>
  </Box>

  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    sx={{
      flexShrink: 0,
      alignSelf: { xs: 'center', md: 'auto' },
    }}
  >
    <CircularProgressbar value={70} />
  </Box>
</Paper>
  )
}

export default UserProfileHeader;