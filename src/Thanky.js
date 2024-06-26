import React from 'react'
import { Button, Grid, Typography,useMediaQuery } from '@mui/material'
import Thankyou from './Images/Thankyou.png'
import Thankyoum from './Images/Thankyoum.png'
import {Footer} from './Footer'
import Header from './Header'
import {Link} from 'react-router-dom'
const Thanky = () => {
	const mobile = useMediaQuery('(max-width:600px)');
  return (
    <>
<Header/>
    <Grid container lg={12}sx={{backgroundImage:mobile?`url(${Thankyoum})`:`url(${Thankyou})`,marginTop:'20px',backgroundRepeat:'no-repeat',backgroundSize:'100% 100%'}}>
        <Grid container lg={10} sx={{margin:'auto'}}>
        <Grid container lg={12}  sx={{justifyContent:"center"}}>
  <Grid item lg={12}>
    <Typography sx={{textAlign:'center',marginTop:'100px',color:'#053F5C',fontSize:'48px',fontWeight:'700',fontFamily:'Space Grotesk'}}>Thank you </Typography>
  </Grid>

  <Grid item lg={4.1} >
    <Typography sx={{color:'#292611',fontSize:'20px',fontWeight:'400',fontFamily:'Space Grotesk',marginTop:'38px',lineHeight:'31px',marginBottom:'169px',textAlign:'center'}}>We can’t wait to hear what people think about your book!</Typography>
  </Grid>
  {/* <Grid item lg={6} sx={{textAlign:'center'}}>
   <Link to='/Home' ><Button sx={{backgroundColor:'#005B9D',borderRadius:'6px',color:'#fff',fontSize:'18px',fontWeight:'700',fontFamily:'Space Grotesk',textTransform:'none',marginTop:'36px',padding:'14px 30px',height:'42px',width:'264px',marginBottom:'100px','&:hover':{backgroundColor:'#005B9D'}}} >
    Go Back to Home
    </Button>
    </Link>
  </Grid> */}
  </Grid>

        </Grid>
    </Grid>
    <Footer/>
    </>
  )
}

export default Thanky