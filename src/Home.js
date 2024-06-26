import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { Grid, Typography,Button } from '@mui/material';
import Header from './Header';
import Slider from './Slider';
import HomeSlider from './HomeSlider';
import bg from './Images/Contacs.png'
import Abo2 from './Images/Abo2.png'
import LatestSlider from './latestUploadSlider';
import { Footer } from './Footer';
import { useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
	const mobile = useMediaQuery('(max-width:600px)');
	const handleConnect = () => {
		navigate('/contact')
	}
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      const userId = jwtDecode(token);
      console.log(userId,'userid');
      const ab = userId._id; //check in console.log object open krke dekehnege then wahan id ayegi
      console.log(ab);
      setUser(userId)
    }
  };

  return (
    <>
      <Header/>
      <Grid container lg={12} xs={12} sx={{background:'#EFEFEF'}}>
        <Grid container lg={10} xs={10} sx={{margin:'auto'}}>
          <Grid item lg={12} xs={10}>
            <Typography sx={{fontSize:mobile?"26px":'56px',fontWeight:'700',color:'#005B9D',fontFamily:'Space Grotesk',marginTop:mobile?"20px":'76px'}}>Welcome {user.Name}!</Typography>
          </Grid> 
          <Grid item lg={12}>
            <Typography sx={{fontSize:mobile?"20px":'40px',fontWeight:'700',color:'#292611',fontFamily:'Space Grotesk',marginTop:mobile?"20px":'64px',marginBottom:mobile?"20px":'42px'}}>Latest Uploads</Typography>
          </Grid> 
        </Grid>
        <LatestSlider/>
        <HomeSlider/>
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
      <Footer/>
    </>
  );
};

export default Home;