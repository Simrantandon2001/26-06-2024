import React, { useState } from 'react';
import Lottie from 'react-lottie';
import Image from 'mui-image';
import Rmlogo from './Images/Rmlogo.png';
import '@fontsource/alegreya';
import Book from './Images/H2B.json';
import { Api_url } from './helper';
import { Grid, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import {useMediaQuery} from '@mui/material';
import { useNavigate,Link} from 'react-router-dom';
const Forget = () => {
    const [Email, setEmail] = useState('');
	const navigate = useNavigate();
	const mobile = useMediaQuery('(max-width:600px)');
	const [isLoading, setIsLoading] = useState(false);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Book,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        localStorage.setItem('email', Email); // Storing email in localStorage
    
        try {
          const { data: res } = await axios.post(`${Api_url}/sign/forgot`, { Email });
          console.log(res); // Log response from the backend
          setIsLoading(false);
          navigate('/Onetime'); // Redirect to another page after successful submission
        } catch (error) {
          console.error(error);
          setIsLoading(false);
        }
      };

    return (
        <>
            <Grid container lg={12}>
              {mobile?"":  <Grid container lg={6} sx={{ backgroundColor: '#005B9D',height:'100vh' }}>
                    <Grid item lg={12}>
                        <Lottie height={352} width={352} options={defaultOptions} style={{ marginTop: '50px' }} />
                    </Grid>
                    <Grid item lg={12}>
                        <Typography sx={{ textAlign: 'center', color: '#fff', fontFamily: 'Space Grotesk' }}>
                            Welcome Back!
                        </Typography>
                    </Grid>
                </Grid>}
                <Grid container lg={6} sx={{ alignItems: 'start', justifyContent: 'center' }}>
                    <Grid item lg={9} sx={{ textAlign: 'center' }}>
                        <Image src={Rmlogo} style={{ width: '84px', height: '60px', marginTop: '46px' }} />
                        <Typography sx={{ textAlign: 'center', color: '#053F5C', fontSize: '32px', fontWeight: '700', fontFamily: 'Space Grotesk', marginTop: '96px' }}>
                        Forgot Password?
                        </Typography>
                        <Grid container lg={12} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Grid container lg={10} xs={11} sx={{ margin: 'auto', display: 'flex', justifyContent: 'center' }}>
                                <Grid item lg={12} xs={12}>
                                    <Typography sx={{ textAlign: 'left', fontSize: '16px', marginTop: '20px', fontWeight: '500', fontFamily: 'Space Grotesk', color: '#1e1e1e' }}>
                                        Email
                                    </Typography>
                                    <TextField
                                        placeholder="Enter your email"
                                        variant="outlined"
                                        type="email"
                                        fullWidth
                                        value={Email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        InputProps={{
                                            size: 'small',
                                            style: { marginTop: '8px', borderRadius: '6px', backgroundColor: '#F4F1F1', border: '1px solid #A3A2A2' }
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                color: '#787373',
                                                fontSize: '14px', fontWeight: '400', fontFamily: 'Space Grotesk',
                                            }
                                        }}
                                    />
                                </Grid>
                                <Button
                                    fullWidth
                                    sx={{ padding: '14px 30px', borderRadius: '6px', fontSize: '18px', marginTop: '20px', height: '42px', fontWeight: '700', fontFamily: 'Space Grotesk', backgroundColor: '#053F5C', color: '#fff', lineHeight: '32px', textTransform: 'none', '&:hover': { backgroundColor: '#005B9D' } }}
                                    onClick={handleSubmit} // Attach event handler for login
                                >
                                    Submit
                                </Button>
                             
                                <Grid container lg={12} xs={12} sx={{ marginTop: '16px' }}>
                                <Grid item lg={12} xs={12}>
                                        <Button  fullWidth sx={{ color:'#053F5C', fontSize: '18px',padding: '14px 30px',fontWeight: '700', fontFamily: 'Space Grotesk',height: '42px',textTransform:'none',borderRadius:'6px',border:'2px solid #053F5C',width:'100%',}} >
                                        Back to Login
                                        </Button>
                                        
                                    </Grid>
        </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Forget;