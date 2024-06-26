import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import Header from './Header'
import Image from 'mui-image'
import Abo from './Images/Abo.png'
import Abo1 from './Images/Abo3.png'
import Abo2 from './Images/Abo2.png'
import bg from './Images/Contacs.png'
import { Footer } from './Footer'
import {MdiTickCircle}  from './Images/MdiTickCircle'
import { useNavigate } from 'react-router-dom'
import {useMediaQuery} from '@mui/material'
const About = () => {
	const navigate = useNavigate();
	const mobile = useMediaQuery('(max-width:600px)');
	const handleConnect = () => {
		navigate('/contact')
	}

  return (
    <>
    <Header/>
    <Grid container lg={12} sx={{marginTop:'50px'}}>
        <Grid container lg={10} sx={{margin:'auto'}}>
          <Grid container lg={12} xs={12} sx={{justifyContent:mobile?'center':''}}>
					  <Grid container lg={7.5} xs={11}>
  <Grid item lg={12}>
    <Typography sx={{fontSize: mobile?'26px':'56px',fontWeight:'700',fontFamily:'Space Grotesk',color:'#053F5C',lineHeight:'normal'}}>Our Mission is to Make<br/> the Book Review<br/> Process Smooth</Typography>
 
 
    <Typography sx={{fontSize:'16px',fontWeight:'400',fontFamily:'Space Grotesk',color:'#1B1D1C',lineHeight:'24px',marginTop:'20px'}}>At RMB, the process is simple – sign up as an author, pick a unique subscription <br/> plan to suit your needs and you’re set!</Typography>
 
</Grid>
</Grid>
             <Grid container lg={4.5} sx={{marginTop:'-70px',justifyContent:'end',display:'flex'}}>
                <Grid item lg={12} >
                    <Image src={Abo} sx={{width:'100%',height:'100%'}}>

                    </Image>
                </Grid>
                </Grid>
                </Grid>

                <Grid container lg={12}>
                  <Grid container lg={12} sx={{marginTop:'100px',justifyContent:'space-between'}} >
						  {mobile ? '':<Grid container lg={4.5}>
							  <Image src={Abo1} style={{ width: '100%', }}>

							  </Image>
						  </Grid> }

<Grid container lg={6} sx={{justifyContent:mobile?'center':""}}  >
  <Grid item lg={12} xs={11} >
    <Typography sx={{fontSize:mobile?'26px':'36px',fontWeight:'700',fontFamily:'Space Grotesk',lineHeight:mobile?"36px":'57px',color:'#393939'}}>Harness the Power of Word-of-Mouth</Typography>
   

  
</Grid>
<Grid item lg={12} xs={10} sx={{display:'flex',borderRadius:'16px',backgroundColor:'#fff',  boxShadow: '0px -2px 128px 0px rgba(137, 199, 252, 0.2)',marginTop:'24px'}} >
<Grid item lg={1.5} sx={{alignItems:'center',display:'flex'}}>
  <MdiTickCircle style={{width:'65%',height:'65%'}}/>
</Grid>
<Grid item lg={10.5}>
   
<Typography sx={{fontSize:'16px',fontWeight:'700',fontFamily:'Space Grotesk',lineHeight:'27px',color:'#393939',display:'flex',justifyContent:'left',marginTop:'10px'}}> 
Quick No-Nonsense Plans</Typography>
<Typography sx={{fontSize:'14px',fontWeight:'400',fontFamily:'Space Grotesk',lineHeight:'22px',color:'#8D8D8D',display:'flex',justifyContent:'left',marginTop:'10px',marginBottom:'12px'}}>Whether big or small, debut or experienced, we have a subscription plan for every author.</Typography>
</Grid>


</Grid>
<Grid item lg={12} xs={10} sx={{display:'flex',borderRadius:'16px',backgroundColor:'#fff',  boxShadow: '0px -2px 128px 0px rgba(137, 199, 252, 0.2)',marginTop:'24px'}} >
<Grid item lg={1.5} sx={{alignItems:'center',display:'flex'}}>
  <MdiTickCircle style={{width:'65%',height:'65%'}}/>
</Grid>
<Grid item lg={10.5}>
   
<Typography sx={{fontSize:'16px',fontWeight:'700',fontFamily:'Space Grotesk',lineHeight:'27px',color:'#393939',display:'flex',justifyContent:'left',marginTop:'10px'}}> 
Authentic Reviews</Typography>
<Typography sx={{fontSize:'14px',fontWeight:'400',fontFamily:'Space Grotesk',lineHeight:'22px',color:'#8D8D8D',display:'flex',justifyContent:'left',marginTop:'10px',marginBottom:'12px'}}>Harness the power of word-of-mouth through honest discussions.</Typography>
</Grid>


</Grid>
<Grid item lg={12} xs={10} sx={{display:'flex',borderRadius:'16px',backgroundColor:'#fff',  boxShadow: '0px -2px 128px 0px rgba(137, 199, 252, 0.2)',marginTop:'24px'}} >
<Grid item lg={1.5} sx={{alignItems:'center',display:'flex'}}>
  <MdiTickCircle style={{width:'65%',height:'65%'}}/>
</Grid>
<Grid item lg={10.5}>
   
<Typography sx={{fontSize:'16px',fontWeight:'700',fontFamily:'Space Grotesk',lineHeight:'27px',color:'#393939',display:'flex',justifyContent:'left',marginTop:'10px'}}> 
Reach the Right Audience</Typography>
<Typography sx={{fontSize:'14px',fontWeight:'400',fontFamily:'Space Grotesk',lineHeight:'22px',color:'#8D8D8D',display:'flex',justifyContent:'left',marginTop:'10px',marginBottom:'12px'}}>Let the opinions of like minded readers draw in more readers who love reading books like yours.</Typography>
</Grid>


</Grid>

 
</Grid>
</Grid>
                  </Grid>
                </Grid>

<Grid container lg={12} sx={{backgroundImage:`url(${bg})`,marginTop:'83px',backgroundRepeat:'no-repeat',backgroundSize:'100% 420px'}}>
  <Grid container lg={12} sx={{display:'flex',justifyContent:'center'}} >

<Grid item lg={12} xs={8} >
<Typography sx={{textAlign:'center',fontSize:mobile?"26px":'54px',fontWeight:'700',fontFamily:'Space Grotesk',lineHeight:'61px',color:'#053F5C',marginTop:'83px'}}>Connect with us today! </Typography>
</Grid>
<Grid item lg={5.5} xs={11}>
<Typography sx={{textAlign:'center',fontSize:'18px',fontWeight:'400',fontFamily:'Space Grotesk',lineHeight:'28px',color:'#053F5C',textAlign:'center',marginTop:'32px'}}>Sign up to enter your book as an author or join the debate by signing up as a reviewer. </Typography>
</Grid>
<Grid item lg={8} xs={11} sx={{display:'flex',justifyContent:'center'}}>
<Button onClick={handleConnect} sx={{
  fontSize: '18px',
  fontWeight: '700',
  lineHeight: '32px',
  textTransform: 'none',
  fontFamily: 'Space Grotesk',
  backgroundColor: '#053F5C',
  color: '#fff',
  padding: '14px 24px',
  borderRadius: '12px',
  marginBottom: '83px',
  marginTop: '32px',
  '&:hover': {
    backgroundColor: '#053F5C'
  }
}}
>Contact Us</Button>
</Grid>

  </Grid>
</Grid>

       
		  </Grid>
		  <Grid container lg={12} style={{backgroundImage: `url(${bg})`}}>
			  
		  </Grid>
    <Footer/>
    </>
  )
}

export default About