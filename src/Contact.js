import React, { useState } from 'react'
import {Grid, Typography, TextField, Button, useMediaQuery} from '@mui/material'
import Cont from './Images/Cont.png'
import Header from './Header';
import Conts from './Contact.json'
import Lottie from 'react-lottie';
import Char from './Images/221.png';
import { Api_url } from './helper';
import { Footer } from './Footer';
import axios from 'axios';

const Contact = () => {
	const mobile = useMediaQuery('(max-width:600px)');
	const initialState = {
		name: '',
		email: '',
		phone: '',
		message: ''
	  };
	const [formData, setFormData] = useState(initialState);
	
	  const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
		  ...formData,
		  [name]: value
		});
	  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
  
    try {
      const response = await axios.post(`${Api_url}/sign/contact2`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.status === 200) {
		  console.log('Message sent successfully');
		  setFormData(initialState);
      } else {
        console.error('Error sending message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  
	const defaultOptions = {
        loop: true,
        autoplay: true,
		animationData: Conts,
		zIndex:'1',
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
    };
  return (
    <>
    <Header/>
    <Grid container lg={12} sx={{ display: 'flex',   backgroundImage: `url(${Cont})`,backgroundSize:'100% 100%',backgroundRepeat:'no-repeat',marginTop:'20px' }}>
    <Grid item lg={12} xs={12}>
          <Typography sx={{ fontSize: mobile?'26px': '56px', fontWeight: '500', color: '#fff',textAlign:'center',marginTop:mobile?'56px':'100px',fontFamily:'Space Grotesk',marginBottom:mobile?'36px':'100px' }}>Contact Us</Typography>
        </Grid>
			  <Grid container lg={10} sx={{ margin: 'auto', justifyContent: 'center',marginBottom:mobile?'56px':'96px' }}>
				{mobile?'': <Grid container lg={6} style={{ alignItems:'center'}}>
					  <img src={Char} style={{position:'absolute',left:'20%',zIndex:'1'}}/>
				  <Lottie height={426} width={426} options={defaultOptions} style={{ marginTop: '50px' }} />
				  </Grid>}
				  
        
        <Grid container lg={6} xs={11} sx={{backgroundColor:'#EFEFEF',padding:'26px',borderRadius:'20px',marginTop:'56px',marginBottom:'56px',justifyContent:'space-between'}}>
        <Grid item lg={5.8} xs={12} >
          <TextField
            fullWidth
            placeholder="Name"
            name="name"
			value={formData.name}
			onChange={handleChange}
            InputLabelProps={{
                style: {
                  color: '#1B3764', // Color of the label
                  fontSize: '16px',
                  fontWeight: '400',fontFamily:'Space Grotesk'
                }
              }}
              InputProps={{
                style: {
                  color: '#1B3764', // Color of the text input
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '28px',
                  borderRadius: '12px',
                  // Set border color to transparent
                  backgroundColor: '#fff'
                }
              }}
          />
        </Grid>
        <Grid item lg={5.8}  xs={12} sx={{marginTop:mobile?'16px':'0px'}} >
  <TextField
    fullWidth
   placeholder="Phone"
   name="phone"
   type="phone"
							  value={formData.phone}
                  onChange={handleChange}
    InputLabelProps={{
      style: {
        color: '#1B3764', // Color of the label
        fontSize: '16px',
        fontWeight: '400',fontFamily:'Space Grotesk'
      }
    }}
    InputProps={{
      style: {
        color: '#1B3764', // Color of the text input
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '28px',
        borderRadius: '12px',
       // Set border color to transparent
        backgroundColor: '#fff',
      }
    }}
  />
</Grid>


        <Grid item lg={12}  xs={12}  sx={{ marginTop:mobile?'16px':'12px'}}>
          <TextField
            fullWidth
            placeholder="Email"
			name="email"
			type="email"
			value={formData.email}
			onChange={handleChange}
            InputLabelProps={{
                style: {
                  color: '#1B3764', // Color of the label
                  fontSize: '16px',
                  fontWeight: '400',fontFamily:'Space Grotesk'
                 
                }
              }}
              InputProps={{
                style: {
                  color: '#1B3764', // Color of the text input
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '28px',
                  borderRadius: '12px',
             // Set border color to transparent
                  backgroundColor: '#fff',
                }
              }}
          />
        </Grid>
        <Grid item lg={12}  xs={12}  sx={{ marginTop:mobile?'16px':'12px'}}>
          <TextField
            fullWidth
            placeholder="Message"
							  name="message"
							  value={formData.message}
							  onChange={handleChange}
            multiline
            rows={4}
           
            InputLabelProps={{
                style: {
                  color: '#1B3764', // Color of the label
                  fontSize: '16px',
                  fontWeight: '400',fontFamily:'Space Grotesk'
                }
              }}
              InputProps={{
                style: {
                  color: '#1B3764', // Color of the text input
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '28px',
                  borderRadius: '12px',
                 // Set border color to transparent
                  backgroundColor: '#fff'
                }
              }}
          />
        </Grid>
        <Grid item lg={12}  xs={12}  sx={{marginTop:mobile?'16px':'20px'}}>
  <Button onClick={handleSubmit} style={{ backgroundColor: '#053F5C', color: 'white',fontSize: '16px',
                  fontWeight: '400',textTransform:'none' ,width:'100%',paddinig:'16px 36px',borderRadius:'12px',fontFamily:'Space Grotesk'}}>
    Submit
  </Button>
</Grid>
        </Grid>
      </Grid>
    </Grid>

<Footer/>
    </>
  )
}

export default Contact