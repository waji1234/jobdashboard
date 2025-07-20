import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const NavigationTabs = () => {
  const [selected, setSelected] = React.useState('')
  const tabs = ['Overview', 'Onboard', 'Milestones', 'Deliverable', 'Calendar', 'Discussion'];
  
  return <Box 
    sx={{py: "20px",
      borderBottom: "1px solid #E1E1E1"
    }}
      display="flex" justifyContent="space-between" alignItems="center">

    <Box display="flex" gap="34px">
      {tabs.map((tab, index)=>(
        selected == tab ? 
          <Typography key={index} fontSize="16px" fontWeight={450} sx={{
            p: "7px 16px",
            backgroundColor: "#C72C88",
            borderRadius: "8px",
            color: 'white',
            cursor: "pointer"
          }} onClick={()=> setSelected('')}>
             {tab} 
          </Typography>:
          <Typography  key={index} fontSize="16px" fontWeight={450} sx={{
            p: "7px 16px",
            cursor: "pointer"
          }}
          onClick={()=> setSelected(tab)}
          > {tab} </Typography>  
      ))}
    </Box>

    <Box display="flex" gap="12px">
      <Button variant="outlined" 
        sx={{
          border: "1px solid #C72C88",
          borderRadius: "8px",
          color:"#C72C88"
          }} >
        Add card
      </Button>
      <Button variant="outlined" 
        sx={{
          border: "1px solid #10898F",
          borderRadius: "8px",
          color:'#10898F'
          }} 
      >
        <AddOutlinedIcon/> Create task
      </Button>
    </Box>

  </Box>
}

export default NavigationTabs