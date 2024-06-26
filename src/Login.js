import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import Lottie from 'react-lottie';
import Image from 'mui-image';
import Logo from './Images/Logo.png';
import { Link } from 'react-router-dom'
import '@fontsource/alegreya';
import { ToastContainer, toast } from 'react-toastify';
import Visibility from '@mui/icons-material/Visibility';
import { Api_url } from './helper';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import 'react-toastify/dist/ReactToastify.css';
import { LoginSocialFacebook,LoginSocialGoogle } from 'reactjs-social-login'
import {FacebookLoginButton,GoogleLoginButton} from 'react-social-login-buttons'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useGoogleLogin } from '@react-oauth/google';
import Book from './Images/H2B.json';
import Rmlogo from './Images/Rmlogo.png';
import { Grid, Typography, TextField, Button, useMediaQuery } from '@mui/material';
import Google from './Images/Google.png';
import Facebook from './Images/Facebook.png';
import { useNavigate } from 'react-router-dom';
const Login = () => {
	const navigate = useNavigate();
	const mobile = useMediaQuery('(max-width:600px)');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
	const [Error, setError] = useState('');
	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event) => {
	  event.preventDefault();
	};
  const handleLogin = async (e) => {
    e.preventDefault();
  
    const userData = {
      Email: Email,
      Password: Password,
    };
  console.log(userData)
    setIsLoading(true);
  
    try {
      const response = await axios.post(`${Api_url}/sign/login`, userData);
  
      if (response && response.data) {
        console.log(response.data.data);
        localStorage.setItem("token", response.data.data);
        navigate('/Home');
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
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
	
	const responseGoogle = async (credentialResponse) => {
		try {
			// Decode the token to extract user's email
			const decodedToken = jwtDecode(credentialResponse.credential);
			const userEmail = decodedToken.email;
	console.log(userEmail)
			// Call your backend API to handle login
			const loginResponse = await axios.post(`${Api_url}/sign/google-login`, { email: userEmail });
			console.log(loginResponse)
			if (loginResponse && loginResponse.data) {
				console.log(loginResponse.data.data);
				localStorage.setItem("token", loginResponse.data.data);
				navigate('/Home');
			  } else {
				throw new Error("Invalid response format");
			  }
			// Check if login was successful
			if (loginResponse.status === 200) {
				// Handle successful login here, e.g., redirect to dashboard
				
			}
		} catch (error) {
			console.log('Login failed');
		}
	}
	const responsefacebook = async (credentialResponse) => {
		try {
			// Decode the token to extract user's email
			console.log(credentialResponse.data)
			
			const userEmail = credentialResponse.data.email;
			console.log(userEmail)
			
			// Call your backend API to handle login
			const loginResponse = await axios.post(`${Api_url}/sign/google-login`,{ email: userEmail });
			console.log(loginResponse,'sjj')
			if (loginResponse && loginResponse.data) {
				console.log(loginResponse.data.data);
				localStorage.setItem("token", loginResponse.data.data);
				navigate('/Home');
			  } else {
				throw new Error("Invalid response format");
			  }
			// Check if login was successful
			if (loginResponse.status === 200) {
				// Handle successful login here, e.g., redirect to dashboard
				
			}
		} catch (error) {
			console.log(error)
			toast.error(error.response.data.message);
			console.log('Error:', error.response.data.message);
			console.log('Login failed');
		}
		}
	

  return (
	  <>
		    <ToastContainer />
      <Grid container lg={12}>
      {mobile?"":  <Grid container lg={6} sx={{ backgroundColor: '#005B9D' }}>
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
            <Image src={Rmlogo} style={{ width: '84px', height: '60px', marginTop: '56px' }} />
            <Typography sx={{ textAlign: 'center', color: '#005B9D', fontSize: '32px', fontWeight: '700', fontFamily: 'Space Grotesk', marginTop: '16px' }}>
              Login to account
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
                      style: { marginTop: '8px', borderRadius: '6px', backgroundColor: '#F4F1F1', border: '1px solid #A3A2A2','::placeholder': {  // Set styles for placeholder
						color: '#787373', // Set the color of the placeholder text
						fontFamily: 'Space Grotesk', // Set the font family for the placeholder text
						fontSize: '14px',
						fontWeight: '400',
					  }, }
                    }}
                    InputLabelProps={{
                      style: {
                        color: '#787373',
                        fontSize: '14px', fontWeight: '400', fontFamily: 'Space Grotesk',
                      }
                    }}
                  />
                </Grid>
                <Grid item lg={12} xs={12}>
                  <Typography sx={{ textAlign: 'left', fontSize: '16px', marginTop: '20px', fontWeight: '500', fontFamily: 'Space Grotesk', color: '#1e1e1e' }}>
                    Password
                  </Typography>
                  <TextField
                    name="password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    label="Enter your password "
                    variant="outlined"
                    type={showPassword ? 'text' : 'password'}
            
                    fullWidth
									  InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<IconButton
													aria-label="toggle password visibility"
													onClick={handleClickShowPassword}
													onMouseDown={handleMouseDownPassword}
													edge="end"
												>
													{showPassword ? <VisibilityOff /> : <Visibility />}
												</IconButton>
											</InputAdornment>
										),
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
							  <Grid item lg={12} xs={12}>
  <Link to="/forget" style={{ textDecoration: 'none' }}>
    <Typography sx={{ justifyContent:'end', display:'flex', fontSize: '14px', fontWeight: '400', fontFamily: 'Space Grotesk', color:'#005B9D'}}>
      Forgot Password?
    </Typography>
  </Link>
</Grid>
                <Button
                  fullWidth
                  sx={{ padding: '14px 30px', borderRadius: '6px', fontSize: '18px', marginTop: '20px', height: '42px', fontWeight: '700', fontFamily: 'Space Grotesk', backgroundColor: '#005B9D', color: '#fff', lineHeight: '32px', textTransform: 'none', '&:hover': { backgroundColor: '#005B9D' } }}
                  onClick={handleLogin} // Attach event handler for login
                >
                  Log In
                </Button>
                <Grid item lg={12}>
                  <Typography sx={{ marginTop: '16px', color: '#292611', fontSize: '14px', fontWeight: '400', fontFamily: 'Space Grotesk' }}>Or continue with</Typography>
							  </Grid>
							  
                <Grid container lg={6} xs={12} sx={{ marginTop: '16px',justifyContent:mobile?'center':"" }}>
								  <Grid item lg={12}>
								  <GoogleLogin
										  onSuccess={responseGoogle}
										  cookiePolicy={'single_host_origin'}
onError={() => {
console.log('Login Failed');
}}
/>

								  {/* <Button onClick={useGoogleLogin({
		onSuccess: tokenResponse => console.log(tokenResponse),
	  })}>Sign in with Google 🚀</Button> */}
									  <Button >
										
										

                      {/* <img src={Google} alt="Google" style={{ width: '100%', height: 'auto' }} /> */}
                    </Button>
                  </Grid>
				  <Grid item lg={12} sx={{marginTop:'10px'}}>
								  <LoginSocialFacebook
												 
												 appId="305111921952755"
												 onResolve={responsefacebook}
												 onReject={(error) => {
												   console.log(error);
												 }}
											   >
												 <FacebookLoginButton  text="Login with Facebook" style={{borderRadius:'36px',fontSize:'12px',fontFamily:'Inter',fontWeight:400,width:'201px',height:'46px'}} />
																				   </LoginSocialFacebook>
				
                  </Grid>
								  </Grid>
								 
                <Grid item lg={12} sx={{ marginBottom: '31px' }}>
                  <Typography sx={{ marginTop: '16px', color: '#292611', fontSize: '14px', fontWeight: '400', fontFamily: 'Space Grotesk' }}>
                    Already have an account? <Link to="/sign" style={{ textDecoration: 'none' }}><span style={{ fontSize: '14px', fontWeight: '700', fontFamily: 'Space Grotesk' }}>Sign up</span></Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
