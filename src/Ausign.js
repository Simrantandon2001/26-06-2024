import React, { useState } from 'react';
import Lottie from 'react-lottie';
import Image from 'mui-image';
import Logo from './Images/Logo.png';
import Rmlogo from './Images/Rmlogo.png';
import { Api_url } from './helper';
import '@fontsource/alegreya';
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { LoginSocialFacebook,LoginSocialGoogle } from 'reactjs-social-login'
import {FacebookLoginButton,GoogleLoginButton} from 'react-social-login-buttons'
import Book from './Images/H2B.json';
import { Grid, Typography, TextField, Button } from '@mui/material';
import Google from './Images/Google.png';
import Facebook from './Images/Facebook.png';
import axios from 'axios'
import Header from './Header';
import { Footer } from './Footer';
import { Link } from 'react-router-dom'
import LockIcon from '@mui/icons-material/Lock';
import {useMediaQuery} from '@mui/material';
const Ausign = () => {
	const navigate = useNavigate();
	const mobile = useMediaQuery('(max-width:600px)');
	const [Name, setName] = useState('')
	const [OTP, setOTP] = useState('');
  const[Email,setEmail]=useState('')
  const[Password,setPassword]=useState('')
  const [isLoading, setIsLoading] = useState(false);
  const[Error,setError] = useState('');
	const [showPassword, setShowPassword] = React.useState(false);
	const [verifyOtp, setVerifyOtp] = useState(false);
	const [sendOtp, setSendOtp] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleClickVerify = async () => {
		try {
			const res = await axios.post(`${Api_url}/sign/sign-verify`, { Email });
			console.log(res);
			setSendOtp(true); // Set sendOtp to true after sending OTP
		} catch (error) {
			console.error(error);
		}
	};
	const handleClickVerify2= async() => {
		try {
		const response = await axios.post(`${Api_url}/sign/Otp1`, { Otp: OTP, Email: Email }); 
			console.log(response)
			setVerifyOtp(true); // Set verifyOtp to true after verifying OTP
    } catch (error) {
        console.error(error);
    }
	}
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
  
    const userData = {
      Name: Name,
      Email: Email,
      Password: Password,
    };
  console.log(userData)
    setIsLoading(true); // Set isLoading to true when starting the request
  
    try {
      const response = await axios.post(`${Api_url}/sign/create1`, userData);
      // Check if the response has a 'data' property
      if (response && response.data) {
        // Handle the response data
        console.log(response.data);
        navigate('/aulogin');
      } else {
        // If 'data' property is missing, handle the error
        throw new Error("Invalid response format");
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };
  
  const responseGoogle = async (credentialResponse) => {
	try {
		// Decode the token to extract user's email
		const decodedToken = jwtDecode(credentialResponse.credential);
		console.log(decodedToken)
		const userEmail = decodedToken.email;
		const Name2 = decodedToken.name;
		
console.log(userEmail)
		// Call your backend API to handle login
		const loginResponse = await axios.post(`${Api_url}/sign/google-signup`, { email: userEmail,name:Name2, });
		console.log(loginResponse,'sjj')
		if (loginResponse && loginResponse.data) {
			console.log(loginResponse.data.data);
			
			navigate('/login');
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
	const responsefacebook = async (credentialResponse) => {
		try {
			// Decode the token to extract user's email
			console.log(credentialResponse.data)
			
			const userEmail = credentialResponse.data.email;
			console.log(userEmail)
			const Name2 = credentialResponse.data.name;
			const picture=credentialResponse.data.picture.data.url
	console.log(userEmail,Name2,picture)
			// Call your backend API to handle login
			const loginResponse = await axios.post(`${Api_url}/sign/google-signup`, { email: userEmail,name:Name2, });
			console.log(loginResponse,'sjj')
			if (loginResponse && loginResponse.data) {
				console.log(loginResponse.data.data);
				
				navigate('/login');
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
  

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Book,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <>
  <ToastContainer />
      <Grid container lg={12}>
			  {mobile ? "" : <Grid container lg={6} sx={{ backgroundColor: '#005B9D' }}>
				  <Grid item lg={12}>
					  <Lottie
						  height={352}
						  width={352}
						  options={defaultOptions}
						  style={{ marginTop: '50px' }}
					  />
				  </Grid>

				  <Grid item lg={12}>
					  <Typography sx={{ textAlign: 'center', color: '#fff', fontFamily: 'Space Grotesk' }}>
						  Welcome aboard
					  </Typography>
					  <Typography sx={{ marginBottom: '150px', textAlign: 'center', color: '#fff', fontFamily: 'Space Grotesk' }}>
						  just a couple of clicks and we start
					  </Typography>
				  </Grid>
			  </Grid>}
        <Grid container lg={6} sx={{ alignItems: 'start', justifyContent: 'center' }}>
          <Grid item lg={9} sx={{ textAlign: 'center' }}>
            <Image src={Rmlogo} style={{ width: '84px', height: '60px', marginTop: '56px' }} />
            <Typography sx={{ textAlign: 'center', color: '#005B9D', fontSize: '32px', fontWeight: '700', fontFamily: 'Space Grotesk', marginTop: '16px' }}>
            {mobile?"Welcome Author!": 'Create account'}
            </Typography>
            <Grid container lg={12} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Grid container lg={10} xs={11} sx={{ margin: 'auto', display: 'flex', justifyContent: 'center' }}>
                <Grid item lg={12} xs={12}>
                  <Typography sx={{ textAlign: 'left', fontSize: '16px', fontWeight: '500', fontFamily: 'Space Grotesk', color: '#1e1e1e', marginTop: '40px' }}>
                    Name
                  </Typography>
                  <TextField
                    name="name"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    variant="outlined"
                    fullWidth
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
							  <Grid item lg={12} xs={12}>
                  <Typography sx={{ textAlign: 'left', fontSize: '16px', marginTop: '20px', fontWeight: '500', fontFamily: 'Space Grotesk', color: '#1e1e1e' }}>
                    Email
                  </Typography>
                  <TextField
                    name="email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    variant="outlined"
                    type="email"
                    fullWidth
                    InputProps={{endAdornment: (
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={handleClickVerify}
								onMouseDown={handleMouseDownPassword}
								edge="end"
								style={{
									color: 'var(--Brand-Dark-Blue, #053F5C)',
									fontFamily: "Space Grotesk",
									fontSize: '12px',
									fontStyle: 'normal',
									fontWeight: 400,
									lineHeight: 'normal'
								}}
							>
								{sendOtp ? 'Resend' : 'Send Otp'}
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
                                    <Typography sx={{ textAlign: 'left', fontSize: '16px', marginTop: '20px', fontWeight: '500', fontFamily: 'Space Grotesk', color: '#1e1e1e' }}>
                                    OTP
                                    </Typography>
                                    <TextField
                                        placeholder="Enter OTP"
                                        variant="outlined"
                                        type="text"
                                        fullWidth
                                        value={OTP}
                                        onChange={(e) => setOTP(e.target.value)}
									  InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<IconButton
													
													onClick={handleClickVerify2}
													onMouseDown={handleMouseDownPassword}
													  edge="end"
													  style={{
														color: 'var(--Brand-Dark-Blue, #053F5C)',
														fontFamily: "Space Grotesk",
														fontSize: '12px',
														fontStyle: 'normal',
														fontWeight: 400,
														lineHeight: 'normal'
													}}
												>
													{ verifyOtp? 'Verified' : 'Verify'}
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
                  <Typography sx={{ textAlign: 'left', fontSize: '16px', marginTop: '20px', fontWeight: '500', fontFamily: 'Space Grotesk', color: '#1e1e1e' }}>
                    Password
                  </Typography>
                  <TextField
                    name="password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create your password "
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
                <Button
								  onClick={handleSignUp}
								  disabled={!verifyOtp}
                  fullWidth
                  sx={{
                    padding: '14px 30px', borderRadius: '6px', fontSize: '18px', marginTop: '20px', height: '42px', fontWeight: '700', fontFamily: 'Space Grotesk', backgroundColor: '#005B9D', color: '#fff', lineHeight: '32px', textTransform: 'none', '&:hover': {
                      backgroundColor: '#005B9D'
                    }
                  }}>
								  {verifyOtp ? 'Sign Up' : <LockIcon style={{color:'#fff'}} />}
                </Button>
                <Grid item lg={12}>
                  <Typography sx={{ marginTop: '16px', color: '#292611', fontSize: '14px', fontWeight: '400', fontFamily: 'Space Grotesk' }}>
                    Or continue with
                  </Typography>
                </Grid>
                <Grid container lg={6} xs={12} sx={{ marginTop: '16px',justifyContent:mobile?'center':"" }}>
								  <Grid item lg={12}>
							
								  <GoogleLogin
										  onSuccess={responseGoogle}
										  cookiePolicy={'single_host_origin'}
onError={() => {
console.log('Login Failed');
											  }}
											 
											  useOneTap
										  />
										 
                  
                  </Grid>
								  <Grid item lg={12} sx={{marginTop:'10px'}}>
								  <LoginSocialFacebook
												 
												 appId="305111921952755"
												 onResolve={responsefacebook}
												 onReject={(error) => {
												   console.log(error);
												 }}
											   >
												 <FacebookLoginButton  text="Sign up with Facebook" style={{borderRadius:'36px',fontSize:'12px',fontFamily:'Inter',fontWeight:400,width:'201px',height:'46px'}} />
																				   </LoginSocialFacebook>
				
                  </Grid>
                </Grid>
                <Grid item lg={12} sx={{ marginBottom: '31px' }}>
                  <Typography sx={{ marginTop: '16px', color: '#292611', fontSize: '14px', fontWeight: '400', fontFamily: 'Space Grotesk' }}>
									  Don’t have an account yet?
									  <Link to="/aulogin" style={{ textDecoration: 'none' }}><span style={{ fontSize: '14px', fontWeight: '700', fontFamily: 'Space Grotesk' }}>Login</span>
									  </Link> 
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

export default Ausign;
