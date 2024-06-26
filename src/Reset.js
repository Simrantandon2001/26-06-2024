import React, { useState } from 'react';
import axios from 'axios';
import Lottie from 'react-lottie';
import Image from 'mui-image';
import Logo from './Images/Logo.png';
import '@fontsource/alegreya';
import { Api_url } from './helper';
import Book from './Images/H2B.json';
import { Grid, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Reset = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const email = localStorage.getItem('email');
    console.log(email)
    try {
      const response = await axios.post(`${Api_url}/sign/update-pass`, { NewPassword: newPassword, email: email });
      // Handle response from the backend
      setIsLoading(false);
      navigate('/login');
      localStorage.removeItem('email');
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Book,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Grid container lg={12}>
        <Grid container lg={6} sx={{ backgroundColor: '#005B9D', height:'100vh' }}>
          <Grid item lg={12}>
            <Lottie height={352} width={352} options={defaultOptions} style={{ marginTop: '50px' }} />
          </Grid>
          <Grid item lg={12}>
            <Typography sx={{ textAlign: 'center', color: '#fff', fontFamily: 'Space Grotesk' }}>
              Welcome Back!
            </Typography>
          </Grid>
        </Grid>

        <Grid container lg={6} sx={{ alignItems: 'start', justifyContent: 'center' }}>
          <Grid item lg={9} sx={{ textAlign: 'center' }}>
            <Image src={Logo} style={{ width: '84px', height: '60px', marginTop: '56px' }} />
            <Typography sx={{ textAlign: 'center', color: '#005B9D', fontSize: '32px', fontWeight: '700', fontFamily: 'Space Grotesk', marginTop: '66px' }}>
              Reset Password
            </Typography>
            <Grid container lg={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Grid container lg={10} sx={{ margin: 'auto', display: 'flex', justifyContent: 'center' }}>
                <Grid item lg={12}>
                  <Typography sx={{ textAlign: 'left', fontSize: '16px', marginTop: '20px', fontWeight: '500', fontFamily: 'Space Grotesk', color: '#1e1e1e' }}>
                    New Password
                  </Typography>
                  <TextField
                    placeholder="Enter your new password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
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
                <Grid item lg={12}>
                  <Typography sx={{ textAlign: 'left', fontSize: '16px', marginTop: '20px', fontWeight: '500', fontFamily: 'Space Grotesk', color: '#1e1e1e' }}>
                    Confirm Password
                  </Typography>
                  <TextField
                    placeholder="Confirm your new password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                  sx={{ padding: '14px 30px', borderRadius: '6px', fontSize: '18px', marginTop: '20px', height: '42px', fontWeight: '700', fontFamily: 'Space Grotesk', backgroundColor: '#005B9D', color: '#fff', lineHeight: '32px', textTransform: 'none', '&:hover': { backgroundColor: '#005B9D' } }}
                  onClick={handleSubmit} // Attach event handler for submitting password
                >
                  Reset Password
                </Button>
                <Grid container lg={12} sx={{ marginTop: '16px' }}>
                  <Grid item lg={12}>
                    <Button  fullWidth sx={{ color:'#0E0D17', fontSize: '18px',padding: '14px 30px',fontWeight: '700', fontFamily: 'Space Grotesk',height: '42px',textTransform:'none',borderRadius:'6px',border:'2px solid #BDBDBD',width:'100%',}} >
                      Back to Login
                    </Button>
                  </Grid>
                </Grid>
                {/* Error message display */}
                {error && (
                  <Typography sx={{ marginTop: '16px', color: 'red', fontSize: '14px', fontWeight: '400', fontFamily: 'Space Grotesk' }}>
                    {error}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Reset;