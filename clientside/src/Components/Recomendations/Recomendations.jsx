import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const Recomendations = ({ image, title }) => {
  return (
    <Card elevation={0} sx={{borderRadius: '12px', border:'0.75px solid #EAECF0', padding:{sm:'16px', xs:'16px', md:'8px'}, display: 'flex', gap:{sm:'8px', md:'1px',}, width:{sm:'100%', xs:'100%'}, alignItems: { xs: 'center', md:'center', sm: 'start' }, flexDirection: { xs: 'column', md:'row', lg:'row', sm: 'row' }, }}>
  <CardMedia
    component="img"
    image={image}
    alt={title}
    sx={{
      width: '60px',     
      height: '60px',      
      objectFit: 'cover',
      borderRadius: '4.29px',
      border:'0.71px'
    }}
  />
  <CardContent>
    <Typography noWrap  sx={{ textAlign: 'center', color:'#000000', fontFamily:'Roboto', fontWeight:500, whiteSpace: { xs: 'normal', md:'normal',lg:'nowrap', sm: 'nowrap' }, fontSize:'14px' }}>
      {title}
    </Typography>
  </CardContent>
</Card>
  )
}

export default Recomendations;