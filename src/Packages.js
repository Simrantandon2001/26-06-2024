import React from 'react'
import {Grid ,Typography,Button} from '@mui/material'
import '@fontsource/alegreya';
import Header from './Header'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
const Packages = () => {
 

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

  return (
    <>
    <Header/>
    <Grid container lg={12}>
      <Grid container lg={10} sx={{margin:'auto'}}>
        <Grid item lg={12}>
          <Typography sx={{color:'#005B9D',fontSize:'56px',fontWeight:'700',textAlign:'center',fontFamily:'Space Grotesk',marginTop:'50px'}}>
          Our Subscriptions
          </Typography>
        </Grid>
        <Stack direction="row" spacing={2}>
        <Item style={{backgroundColor:'#9FE7F5',width:'330px',borderRadius:'20px',border:'1px solid #DBDBDB'}}>
<Grid item lg={12}>
  <Typography sx={{color:'#005B9D',fontSize:'24px',fontWeight:'700',fontFamily:'Space Grotesk',marginTop:'56px'}}>Package1</Typography>
</Grid>
<Grid item lg={12}>
  <Typography sx={{color:'#005B9D',fontSize:'64px',fontWeight:'700',fontFamily:'Space Grotesk',}}><span style={{fontFamily:'normal'}}>₹</span>10k</Typography>
</Grid>
<Grid item lg={12}>
  <Typography sx={{color:'#1B71AF',fontSize:'14px',fontWeight:'500',textAlign:'center',fontFamily:'Space Grotesk',}}>per month</Typography>
</Grid>
<Grid container lg={12}>
<ul style={{color:'#005B9D'}}>
  <li>
    <Typography sx={{color:'#005B9D',fontSize:'16px',fontWeight:'500',fontFamily:'Space Grotesk',textAlign:'center'}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
    </Typography>
  </li>
  <li>
    <Typography sx={{color:'#005B9D',fontSize:'16px',fontWeight:'500',fontFamily:'Space Grotesk',}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
    </Typography>
  </li>
  <li>
    <Typography sx={{color:'#005B9D',fontSize:'16px',fontWeight:'500',fontFamily:'Space Grotesk',}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
    </Typography>
  </li>
</ul>
<Grid item lg={12}>
  <Button sx={{backgroundColor:'#005B9D',borderRadius:'6px',padding:'14px 30px',color:'#fff',textTransform:'none',fontSize:'18px',fontWeight:'700',textAlign:'center',fontFamily:'Space Grotesk',lineHeight:'32px',height:'42px',marginTop:'36px',marginBottom:'33px'}}>
    Get Now
  </Button>
</Grid>
</Grid>
        </Item>
       
      </Stack>
      </Grid>
    </Grid>
    </>
  )
}

export default Packages