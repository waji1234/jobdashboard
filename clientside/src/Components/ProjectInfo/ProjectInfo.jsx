import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import React from 'react'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Typography from '@mui/material/Typography';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import CustomProgressBar from '../ProgressBar/ProgressBar';
import CustomAvatarGroup from '../UserAvatars/AvatarGroup';

const ProjectInfo = () => {
  return <Paper elevation={3} sx={{
    p: "25px 28px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fafbfc"
  }}>

    <Box display="flex" gap="50px">
      <Box display="flex"  gap="10px" flexDirection="column"> 
        <Typography fontFamily="Roboto" color='#8D8D8D' fontWeight={400} fontSize="16px"> 
          NAME
        </Typography>
        <Typography fontFamily="Roboto" fontWeight={450} fontSize="20px"> 
          Website Design
        </Typography>
      </Box>

      <Box display="flex" gap="10px" flexDirection="column"> 
        <Typography fontFamily="Roboto" color='#8D8D8D' fontWeight={400} fontSize="16px"> 
          BUDGET
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center">
          <AttachMoneyOutlinedIcon />
        <Typography fontFamily="Roboto" fontWeight={450} fontSize="20px"> 
          45000
        </Typography>
        </Box>
      </Box>

      <Box display="flex"  gap="10px" flexDirection="column"> 
        <Typography fontFamily="Roboto" color='#8D8D8D' fontWeight={400} fontSize="16px"> 
          STATUS
        </Typography>
        <Typography fontFamily="Roboto" fontWeight={450} fontSize="20px"> 
         Inprogress
        </Typography>
      </Box>


      <Box display="flex" gap="10px" flexDirection="column"> 
        <Typography fontFamily="Roboto" color='#8D8D8D' fontWeight={400} fontSize="16px"> 
        TEAM ON PROJECT
        </Typography>
        <CustomAvatarGroup/>
      </Box>

      <Box display="flex" gap="10px" flexDirection="column"> 
        <Typography fontFamily="Roboto" fontWeight={430} fontSize="14px"> 
       Completion Rate
        </Typography>
        <CustomProgressBar value={75}/>
      </Box>  
    </Box>



    <Button variant="contained" startIcon={<ShareOutlinedIcon/>} sx={{
      backgroundColor: "#1AA796",
      height:'33px'
    }}>
      Share
    </Button>
  </Paper>
}

export default ProjectInfo