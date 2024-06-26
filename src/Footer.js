import React from 'react'
import { Grid, Typography } from '@mui/material'
import 'typeface-inter';
import FLogo from './Images/Flogo.png';
import { useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom'
import Insta from './Images/Instam-unscreen.gif'
import linked from './Images/linkedin-unscreen.gif'
export const Footer = () => {
	const mobile = useMediaQuery('(max-width:600px)');
  return (
	  <Grid container lg={12} xs={12} sx={{ backgroundColor: '#053F5C' }}>
		  <Grid container lg={10} xs={11} sx={{ margin: 'auto',marginTop:'56px',marginBottom:'26px' }}>
			  
		 
		  <Grid container lg={12} xs={12} sx={{display:'flex',justifyContent:'space-between'}}>
			  <Grid item lg={4} xs={12}>
				  <img src={FLogo} style={{width: '128px',borderRadius:'12px',
height: '92px'}}/>
			  </Grid>
			  <Grid item lg={2} xs={12}>
				  <Typography style={{color: '#fff',textAlign:'start',
fontFamily: 'Inter',
fontSize: '14px',
fontStyle: 'normal',
fontWeight: 600,
lineHeight: '20px',marginBottom:'20px' }}>Quicklinks</Typography>
				 
				 <Link to="/Home" style={{ textDecoration: 'none' }}>  <Typography style={{color: '#EFEFEF',textAlign:'start',
fontFamily: 'Inter',
fontSize: '14px',
fontStyle: 'normal',
fontWeight: 400,marginBottom:'20px',
						  lineHeight: '20px'
					  }}>Home</Typography></Link>
				<Link to="/booklist" style={{ textDecoration: 'none' }}> 	  <Typography style={{color: '#EFEFEF',textAlign:'start',
fontFamily: 'Inter',
fontSize: '14px',
fontStyle: 'normal',
fontWeight: 400,
						  lineHeight: '20px',marginBottom:'20px'
					  }}>Book Reviews</Typography></Link>
					 <Link to="/about" style={{ textDecoration: 'none' }}>   <Typography style={{color: '#EFEFEF',textAlign:'start',
fontFamily: 'Inter',
fontSize: '14px',
fontStyle: 'normal',
fontWeight: 400,
						  lineHeight: '20px', marginBottom: '20px'
					  }}>About</Typography></Link>
					  <Link to="/terms" style={{ textDecoration: 'none' }}> 
				  <Typography style={{color: '#EFEFEF',textAlign:'start',
fontFamily: 'Inter',
fontSize: '14px',
fontStyle: 'normal',
fontWeight: 400,
lineHeight: '20px',marginBottom:'20px' }}>Privacy Policy</Typography></Link>
			  </Grid>
			  <Grid item lg={2} xs={12}>
				  
					  
				  <Typography style={{color: '#EFEFEF',textAlign:'start',
fontFamily: 'Inter',
fontSize: '14px',
fontStyle: 'normal',
fontWeight: 600,
						  lineHeight: '20px', marginBottom: '20px'
					  }}>Support</Typography>
					     <Typography style={{color: '#fff',textAlign:'start',
fontFamily: 'Inter',
fontSize: '14px',
fontStyle: 'normal',
fontWeight: 400,
lineHeight: '20px',marginBottom:'20px' }}>Terms and Conditions</Typography>
				  <Typography style={{color: '#EFEFEF',textAlign:'start',
fontFamily: 'Inter',
fontSize: '14px',
fontStyle: 'normal',
fontWeight: 400,
lineHeight: '20px',marginBottom:'20px' }}>Privacy Policy</Typography>
				  </Grid>
				  <Grid item lg={4} xs={12} sx={{ display: 'flex',justifyContent:'start' }}>
					  <Grid item lg={12}>
					  <Typography style={{color: '#EFEFEF',textAlign:'start',
fontFamily: 'Inter',
fontSize: '14px',
fontStyle: 'normal',
fontWeight: 600,
						  lineHeight: '20px'
						  }}>Follow us</Typography>
						   <Grid item lg={12} sx={{display:'flex',justifyContent:'start',marginLeft:'-25px'}}>
					  <img src={Insta} style={{width:'80px',height:'65px'}} />
						  <img src={linked} style={{width:'80px',height:'65px',marginLeft:'-16px'}} />
					  </Grid>
					  </Grid>
					 
					  
			  </Grid>
			  
				  	  
			  </Grid>
			  <Grid item lg={11.5} xs={12} style={{justifyContent:mobile?"start":'end',display:'flex'}}>
			  <Typography style={{color: '#6E6D7A',textAlign:'start',color:"#EFEFEF",
fontFamily: 'Inter',
fontSize: '14px',
fontStyle: 'normal',
fontWeight: 400,
lineHeight: '20px',marginBottom:'20px' }}>&copy; reviewmybook. All rights reserved.</Typography>
				  </Grid>
			  </Grid>
	</Grid>
  )
}