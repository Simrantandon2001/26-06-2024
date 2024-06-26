import React, { useState,useEffect } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import Image from 'mui-image';
import Rmlogo from './Images/Rmlogo.png';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios'
import MenuIcon from '@mui/icons-material/Menu'; 

import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import { LoginSocialFacebook,LoginSocialGoogle } from 'reactjs-social-login'
import {FacebookLoginButton,GoogleLoginButton} from 'react-social-login-buttons'
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import {Link, useNavigate} from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout'
import { Api_url } from './helper';
import { useMediaQuery, Drawer } from '@mui/material';

 // Import the AccountMenu component
import '@fontsource/alegreya';
const CustomButton = styled(Button)`
&:hover {
  background-color: #007F85; /* or specify the desired background color */
}
`
const Header = (props) => {
	const [userType, setUserType] = useState('');
	const token = localStorage.getItem('token');
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const usertypes = jwtDecode(token);
            setUserType(usertypes.userType);
            console.log(usertypes, 'sfss',usertypes.userType,userType);
        }
    }, []);

    const mobile = useMediaQuery('(max-width:600px)');
  // State to track the login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [anchorEl2, setArchorEl2]=useState(null)
	const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
	};
	const [open2, setOpen2] = useState(false);
	const [open1, setOpen1] = useState(false);
	
  const handleClose = () => {
    setAnchorEl(null);
	};
	const Gotopage = () => { 
		navigate('/signup')
	}
	const Gotopage1 = () => { 
		setOpen2(true)
		setOpen1(false)
		
	}
	const handleClose2 = () => {
		setArchorEl2(null);
	   
		};
		const Gotopage2 = () => { 
			setOpen2(false)
		setOpen1(true)
		}
		const Gotopage3 = () => { 
			navigate('/login', { state: { fromReaderup: true } })
		}
	const [photo1,setPhoto1]=useState(null)
	const fetchPhoto = async (e) => {
		const token = localStorage.getItem('token');
		if (token) {
			const userId = jwtDecode(token);
			console.log(userId, 'userid');
			const userId1 = userId._id;
		
			try {
				const response = await axios.get(`${Api_url}/sign/photo`, {
					params: {
						userId: userId1
					}
				});
				console.log(response.data);
				setPhoto1(response.data);
			} catch (error) {
				console.error('Error fetching photo:', error);
				// Handle error appropriately
			}
		}
	};
	useEffect(() => {
     
        fetchPhoto();
       
    }, [props.states]);

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout logic, e.g., clear token, etc.
    setIsLoggedIn(false);
  };
  const handleLogout1 = () => {
    // Clear the token from local storage
	  localStorage.removeItem('token');
	  
	  navigate('/')
	  
    // Update the login status
    setIsLoggedIn(false);
	};

	const handlehome = () => {
		navigate('/')
	}
	const handlehome1 = () => {
		navigate('/home')
	}
	const handlereview = () => {
		navigate('/Booklist')
	}
	const handleAbout = () => {
		navigate('/About')
	}
	const handleContact = () => {
		navigate('/contact')
	}
	const handleClosepopup =() =>{
		setOpen2(false)
		// console.log('yess')
		}
		const handleClosepopup1 =() =>{
			setOpen1(false)
			// console.log('yess')
			}
  
			const handleauthor = () => {
				
				navigate('/ausign')
	}
	const handlereader = () => {
		navigate('/sign')
	
	}
	const handleauthor1 = () => {
				
		navigate('/aulogin')
}
const handlereader1 = () => {
navigate('/login')

	}
	const [drawerOpen, setDrawerOpen] = useState(false);
	const handleMenuIconClick = () => {
		setDrawerOpen(true);
	  };
	
	  const handleDrawerClose = () => {
		setDrawerOpen(false);
	  };
  return (
    <>
      <Grid container lg={12} xs={12} sx={{ marginTop: '12px' }}>
        <Grid container lg={10} xs={10}  sx={{ margin: 'auto' }}>
          <Grid container lg={8} xs={8}>
            <Grid item lg={2}>
			<img src={Rmlogo} onClick={handlehome} style={{width:'107px',height:'76px'}} />
					  </Grid>
					  {mobile ? "" :
						  <Grid item lg={10} sx={{ justifyContent: "end", display: 'flex', alignItems: 'center' }}>
							  <Grid item lg={2}>
								  <Typography onClick={handlehome1} sx={{ fontSize: '20px', fontWeight: '500', lineHeight: '24px', color: '#000', fontFamily: 'Space Grotesk' }}>
									  Home
								  </Typography>
							  </Grid>
							  {userType === 'author'?'': <Grid item lg={2.3}>
							  <Typography onClick={handlereview} sx={{ fontSize: '20px', fontWeight: '500', lineHeight: '24px', color: '#000', fontFamily: 'Space Grotesk' }}>
								  {userType === 'author' ? '' : 'Books'}
							  </Typography>
						  </Grid>}
              <Grid item lg={2}>
                <Typography onClick={handleAbout} sx={{ fontSize: '20px', fontWeight: '500', lineHeight: '24px', color: '#000', fontFamily: 'Space Grotesk' }}>
                  About
                </Typography>
              </Grid>
              <Grid item lg={2}>
                <Typography onClick={handleContact} sx={{ fontSize: '20px', fontWeight: '500', lineHeight: '24px', color: '#000', fontFamily: 'Space Grotesk' }}>
                  Contact
                </Typography>
              </Grid>
            </Grid>}
          </Grid>
          {token?<Grid container lg={4} xs={4}>
           <Grid item lg={12} sx={{display:'flex',justifyContent:'end'}}>
           <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
							  >
								  {
									  photo1 ? (
										  <img
											  src={photo1}
											  alt="Photo"
											  style={{
												  width: '56px',
												  height: '56px',
												  borderRadius: '56px',
                   
												  objectFit: 'cover',
												  margin: 'auto', // Center the image horizontally
												  display: 'block', // Ensure the image is centered correctly
											  }}
										  />
									  ) : (
										  <Avatar sx={{ width: 56, height: 56 }}>S</Avatar>
									  )
								  }
          
          </IconButton>
        </Tooltip>

        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: '60px',
              height: '60px',
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
        <Link to='/MyProfile' style={{textDecoration:'none',color:'#1e1e1e',fontFamily:'Space Grotesk',fontSize:'16px',fontWeight:'400'}}>  My Profile
        </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link to='/MyAccount' style={{textDecoration:'none',color:'#1e1e1e',fontFamily:'Space Grotesk',fontSize:'16px',fontWeight:'400'}}>  
        My account  </Link>
        </MenuItem>
        
        <MenuItem onClick={handleClose}>
        <Link to='/MyList' style={{textDecoration:'none',color:'#1e1e1e',fontFamily:'Space Grotesk',fontSize:'16px',fontWeight:'400'}}>  
        My List </Link>
       
        </MenuItem>
        <MenuItem onClick={handleLogout1}>
  Logout
</MenuItem>

      </Menu>
  
            </Grid>

            </Grid>:mobile?<Grid item lg={12} xs={4} sx={{ display: 'flex', justifyContent: 'end' }}>
          <IconButton onClick={handleMenuIconClick} size="small">
            <MenuIcon />
						  </IconButton>
						  <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
							  {/* Content inside the drawer */}
							
							  
							
							 
            <Grid container lg={12} style={{ width: 350,justifyContent:'center'}}>
			<Grid container lg={10} xs={10} sx={{ justifyContent: "", display: 'flex', alignItems: 'center' }}>
									  <Grid item xs={11} sx={{ justifyContent: "end", display: 'flex',}}>
									  <IconButton onClick={handleDrawerClose} size="small" style={{ justifyContent: 'center' }}>
            <CloseIcon />
						  </IconButton>		  
</Grid>
									 
									  <Grid item lg={2} xs={11} sx={{ marginBottom: "20px", marginTop: '20px' }}>
                <Typography onClick={handlehome1} sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '24px', color: '#000', fontFamily: 'Space Grotesk' }}>
                  Home
                </Typography>
              </Grid>
              <Grid item lg={2.3} xs={11} sx={{marginBottom:"20px",marginTop:'20px'}}>
                <Typography onClick={handlereview} sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '24px', color: '#000', fontFamily: 'Space Grotesk' }}>
                  Reviews
                </Typography>
              </Grid>
              <Grid item lg={2} xs={11} sx={{marginBottom:"20px",marginTop:'20px'}}>
                <Typography onClick={handleAbout} sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '24px', color: '#000', fontFamily: 'Space Grotesk' }}>
                  About
                </Typography>
              </Grid>
              <Grid item lg={2} xs={11} sx={{marginBottom:"20px",marginTop:'20px'}}>
                <Typography onClick={handleContact} sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '24px', color: '#000', fontFamily: 'Space Grotesk' }}>
                  Contact
                </Typography>
              </Grid>
            </Grid>
								  {/* Add your other menu items here */}
								  <Grid container lg={4} xs={10} sx={{ justifyContent: "end", display: 'flex', alignItems: 'center' }}>
								    
									  <Grid item lg={4.3} xs={12} sx={{ marginBottom: "20px", marginTop: '120px' }}>
          
              <Button onClick={() => setOpen2(true)} sx={{ fontSize: '18px', fontWeight: '600', lineHeight: '32px', color: '#0E0D17', border: '2px solid #D6DCE2', textTransform: 'none', borderRadius: '6px', padding: '14px 24px', height: '42px', fontFamily: 'Space Grotesk' }}>Sign Up</Button>
          
          </Grid>
          <Grid item lg={4} xs={12} sx={{marginBottom:"20px",marginTop:'20px'}}>
        
              <Button onClick={() => setOpen1(true)}sx={{ fontSize: '18px', fontWeight: '600', lineHeight: '32px', color: '#fff', backgroundColor: '#053F5C', textTransform: 'none', borderRadius: '12px', padding: '14px 30px', height: '42px', fontFamily: 'Space Grotesk', '&:hover': { backgroundColor: '#005B9D' } }}>Log In</Button>
          
						  </Grid>
						  <Dialog open={open2} PaperProps={{
										style: {
										  display: "flex",
										  justifyContent: "flex-end",
                      width: "382px", 
      height: "455px",borderRadius:'26px'
										  
										}
									  }}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
								>
							
        
              <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' , fontSize: '26px',fontWeight:'700',fontFamily:'Inter', color: '#333333',marginTop: '20px' }}>
      {"Join RMB"}
      <IconButton onClick={handleClosepopup} color="primary" style={{ position: 'absolute', right: 20, top: 20 }}>
        <CloseIcon style={{ color: '#1e1e1e' }} />
      </IconButton>
    </DialogTitle>
    <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' ,fontSize: '12px',fontWeight:'500',fontFamily:'Inter',marginTop: '-25px'  }}>
      Your Ultimate Destination <br /> for Book Reviews!
    </DialogTitle>
	<DialogContent style={{overflow:'clip'}}>
          <Grid container lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
										  <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
											  
		
					
										  <CustomButton onClick={handlereader}  variant='contained' style={{borderRadius:'36px',fontSize:'16px',fontFamily:'Inter',fontWeight:500,width:'271px',height:'46px', textTransform: 'none',backgroundColor:'#053F5C'}}>Sign up as a Reviewer</CustomButton>		
													
										  </Grid>
										  <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center',marginTop:'8px' }}>
      <Typography variant="body1" style={{ fontSize: '16px',fontFamily:'Inter', color: '#333333',fontWeight:'600' }}>
        OR
      </Typography>
    </Grid>
										  <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center',marginTop:'8px' }}>
					
					 			<CustomButton onClick={handleauthor}  variant='contained' style={{borderRadius:'36px',fontSize:'16px',fontFamily:'Inter',fontWeight:500,width:'271px',height:'46px', textTransform: 'none',backgroundColor:'#053F5C'}}>Sign up as a Author</CustomButton>		
										
										  </Grid>
    </Grid>
  
    
        
       
        <Grid item lg={12} sx={{textAlign:'center',display:'flex',justifyContent:'center',marginTop:'12px'}}>
       
		<Typography onClick={Gotopage2 } sx={{fontSize: '12px',fontFamily:'Inter', color: '#333333',fontWeight:'500',color:'#5B5A5A'}}> Already have an account? <span style={{ color: '#1e1e1e',fontWeight:'600',fontFamily:'Inter',fontSize:'12px' }}>Login</span></Typography>
        </Grid>
        <Grid item lg={12} sx={{textAlign:'center',display:'flex',justifyContent:'center',marginTop:'26px'}}>
          <Typography style={{ fontSize: '12px',fontFamily:'Inter', color: '#333333',fontWeight:'500' }}>By continuing, you agree to our<Link to='/terms'style={{textDecoration:"none"}}> <span style={{ color: '#1e1e1e',fontWeight:'600',fontFamily:'Inter',fontSize:'12px' }}>Terms of <br/> Service</span></Link>   and<Link to='/privacy' style={{textDecoration:"none"}}> <span style={{ color: '#1e1e1e',fontWeight:'600',fontFamily:'Inter',fontSize:'12px' }}>Privacy Policy.</span></Link></Typography>
        </Grid>
      </DialogContent>
          <DialogActions style={{ justifyContent: "space-between"}}>
										
          
			
						
          </DialogActions>
								  </Dialog>
								  <Dialog open={open1} PaperProps={{
										style: {
										  display: "flex",
										  justifyContent: "flex-end",
                      width: "382px", 
      height: "455px",borderRadius:'26px'
										  
										}
									  }}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
								>
							
        
              <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' , fontSize: '26px',fontWeight:'700',fontFamily:'Inter', color: '#333333',marginTop: '20px' }}>
      {"Join RMB"}
      <IconButton onClick={handleClosepopup1} color="primary" style={{ position: 'absolute', right: 20, top: 20 }}>
        <CloseIcon style={{ color: '#1e1e1e' }} />
      </IconButton>
    </DialogTitle>
    <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' ,fontSize: '12px',fontWeight:'500',fontFamily:'Inter',marginTop: '-25px'  }}>
      Your Ultimate Destination <br /> for Book Reviews!
    </DialogTitle>
	<DialogContent style={{overflow:'clip'}}>
          <Grid container lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
										  <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
											  
		
					
										  <CustomButton onClick={handleauthor1}  variant='contained' style={{borderRadius:'36px',fontSize:'16px',fontFamily:'Inter',fontWeight:500,width:'271px',height:'46px', textTransform: 'none',backgroundColor:'#053F5C'}}>Login as a Author</CustomButton>		
													
										  </Grid>
										  <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center',marginTop:'8px' }}>
      <Typography variant="body1" style={{ fontSize: '16px',fontFamily:'Inter', color: '#333333',fontWeight:'600' }}>
        OR
      </Typography>
    </Grid>
										  <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center',marginTop:'8px' }}>
					
					 			<CustomButton onClick={handlereader1}  variant='contained' style={{borderRadius:'36px',fontSize:'16px',fontFamily:'Inter',fontWeight:500,width:'271px',height:'46px', textTransform: 'none',backgroundColor:'#053F5C'}}>Login as a Reviewer</CustomButton>		
										
										  </Grid>
    </Grid>
  
    
        
       
        <Grid item lg={12} sx={{textAlign:'center',display:'flex',justifyContent:'center',marginTop:'12px'}}>
       
		<Typography onClick={Gotopage1 } sx={{fontSize: '12px',fontFamily:'Inter', color: '#333333',fontWeight:'500',color:'#5B5A5A'}}> Don’t have an account yet? <span style={{ color: '#1e1e1e',fontWeight:'600',fontFamily:'Inter',fontSize:'12px' }}>Sign Up</span></Typography>
        </Grid>
        <Grid item lg={12} sx={{textAlign:'center',display:'flex',justifyContent:'center',marginTop:'26px'}}>
          <Typography style={{ fontSize: '12px',fontFamily:'Inter', color: '#333333',fontWeight:'500' }}>By continuing, you agree to our<Link to='/terms'style={{textDecoration:"none"}}> <span style={{ color: '#1e1e1e',fontWeight:'600',fontFamily:'Inter',fontSize:'12px' }}>Terms of <br/> Service</span></Link>   and<Link to='/privacy' style={{textDecoration:"none"}}> <span style={{ color: '#1e1e1e',fontWeight:'600',fontFamily:'Inter',fontSize:'12px' }}>Privacy Policy.</span></Link></Typography>
        </Grid>
      </DialogContent>
          <DialogActions style={{ justifyContent: "space-between"}}>
										
          
			
						
          </DialogActions>
          </Dialog>
        </Grid>
            </Grid>
          </Drawer>
						  </Grid>:
          <Grid container lg={4} xs={4} sx={{ justifyContent: "end", display: 'flex', alignItems: 'center' }}>
          <Grid item lg={4.3}>
          
              <Button onClick={() => setOpen2(true)} sx={{ fontSize: '18px', fontWeight: '600', lineHeight: '32px', color: '#0E0D17', border: '2px solid #D6DCE2', textTransform: 'none', borderRadius: '12px', padding: '14px 24px', height: '42px', fontFamily: 'Space Grotesk' }}>Sign Up</Button>
          
          </Grid>
          <Grid item lg={4}>
        
              <Button onClick={() => setOpen1(true)}sx={{ fontSize: '18px', fontWeight: '600', lineHeight: '32px', color: '#fff', backgroundColor: '#053F5C', textTransform: 'none', borderRadius: '12px', padding: '14px 30px', height: '42px', fontFamily: 'Space Grotesk', '&:hover': { backgroundColor: '#005B9D' } }}>Log In</Button>
          
						  </Grid>
						  <Dialog open={open2} PaperProps={{
										style: {
										  display: "flex",
										  justifyContent: "flex-end",
                      width: "382px", 
      height: "455px",borderRadius:'26px'
										  
										}
									  }}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
								>
							
        
              <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' , fontSize: '26px',fontWeight:'700',fontFamily:'Inter', color: '#333333',marginTop: '20px' }}>
      {"Join RMB"}
      <IconButton onClick={handleClosepopup} color="primary" style={{ position: 'absolute', right: 20, top: 20 }}>
        <CloseIcon style={{ color: '#1e1e1e' }} />
      </IconButton>
    </DialogTitle>
    <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' ,fontSize: '12px',fontWeight:'500',fontFamily:'Inter',marginTop: '-25px'  }}>
      Your Ultimate Destination <br /> for Book Reviews!
    </DialogTitle>
	<DialogContent style={{overflow:'clip'}}>
          <Grid container lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
										  <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
											  
		
					
										  <CustomButton onClick={handlereader}  variant='contained' style={{borderRadius:'36px',fontSize:'16px',fontFamily:'Inter',fontWeight:500,width:'271px',height:'46px', textTransform: 'none',backgroundColor:'#053F5C'}}>Sign up as a Reviewer</CustomButton>		
													
										  </Grid>
										  <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center',marginTop:'8px' }}>
      <Typography variant="body1" style={{ fontSize: '16px',fontFamily:'Inter', color: '#333333',fontWeight:'600' }}>
        OR
      </Typography>
    </Grid>
										  <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center',marginTop:'8px' }}>
					
					 			<CustomButton onClick={handleauthor}  variant='contained' style={{borderRadius:'36px',fontSize:'16px',fontFamily:'Inter',fontWeight:500,width:'271px',height:'46px', textTransform: 'none',backgroundColor:'#053F5C'}}>Sign up as a Author</CustomButton>		
										
										  </Grid>
    </Grid>
  
    
        
       
        <Grid item lg={12} sx={{textAlign:'center',display:'flex',justifyContent:'center',marginTop:'12px'}}>
       
		<Typography onClick={Gotopage2 } sx={{fontSize: '12px',fontFamily:'Inter', color: '#333333',fontWeight:'500',color:'#5B5A5A'}}> Already have an account? <span style={{ color: '#1e1e1e',fontWeight:'600',fontFamily:'Inter',fontSize:'12px' }}>Login</span></Typography>
        </Grid>
        <Grid item lg={12} sx={{textAlign:'center',display:'flex',justifyContent:'center',marginTop:'26px'}}>
          <Typography style={{ fontSize: '12px',fontFamily:'Inter', color: '#333333',fontWeight:'500' }}>By continuing, you agree to our<Link to='/terms'style={{textDecoration:"none"}}> <span style={{ color: '#1e1e1e',fontWeight:'600',fontFamily:'Inter',fontSize:'12px' }}>Terms of <br/> Service</span></Link>   and<Link to='/privacy' style={{textDecoration:"none"}}> <span style={{ color: '#1e1e1e',fontWeight:'600',fontFamily:'Inter',fontSize:'12px' }}>Privacy Policy.</span></Link></Typography>
        </Grid>
      </DialogContent>
          <DialogActions style={{ justifyContent: "space-between"}}>
										
          
			
						
          </DialogActions>
								  </Dialog>
								  <Dialog open={open1} PaperProps={{
										style: {
										  display: "flex",
										  justifyContent: "flex-end",
                      width: "382px", 
      height: "455px",borderRadius:'26px'
										  
										}
									  }}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
								>
							
        
              <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' , fontSize: '26px',fontWeight:'700',fontFamily:'Inter', color: '#333333',marginTop: '20px' }}>
      {"Join RMB"}
      <IconButton onClick={handleClosepopup1} color="primary" style={{ position: 'absolute', right: 20, top: 20 }}>
        <CloseIcon style={{ color: '#1e1e1e' }} />
      </IconButton>
    </DialogTitle>
    <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' ,fontSize: '12px',fontWeight:'500',fontFamily:'Inter',marginTop: '-25px'  }}>
      Your Ultimate Destination <br /> for Book Reviews!
    </DialogTitle>
	<DialogContent style={{overflow:'clip'}}>
          <Grid container lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
										  <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
											  
		
					
										  <CustomButton onClick={handleauthor1}  variant='contained' style={{borderRadius:'36px',fontSize:'16px',fontFamily:'Inter',fontWeight:500,width:'271px',height:'46px', textTransform: 'none',backgroundColor:'#053F5C'}}>Login as a Author</CustomButton>		
													
										  </Grid>
										  <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center',marginTop:'8px' }}>
      <Typography variant="body1" style={{ fontSize: '16px',fontFamily:'Inter', color: '#333333',fontWeight:'600' }}>
        OR
      </Typography>
    </Grid>
										  <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center',marginTop:'8px' }}>
					
					 			<CustomButton onClick={handlereader1}  variant='contained' style={{borderRadius:'36px',fontSize:'16px',fontFamily:'Inter',fontWeight:500,width:'271px',height:'46px', textTransform: 'none',backgroundColor:'#053F5C'}}>Login as a Reviewer</CustomButton>		
										
										  </Grid>
    </Grid>
  
    
        
       
        <Grid item lg={12} sx={{textAlign:'center',display:'flex',justifyContent:'center',marginTop:'12px'}}>
       
		<Typography onClick={Gotopage1 } sx={{fontSize: '12px',fontFamily:'Inter', color: '#333333',fontWeight:'500',color:'#5B5A5A'}}> Don’t have an account yet? <span style={{ color: '#1e1e1e',fontWeight:'600',fontFamily:'Inter',fontSize:'12px' }}>Sign Up</span></Typography>
        </Grid>
        <Grid item lg={12} sx={{textAlign:'center',display:'flex',justifyContent:'center',marginTop:'26px'}}>
          <Typography style={{ fontSize: '12px',fontFamily:'Inter', color: '#333333',fontWeight:'500' }}>By continuing, you agree to our<Link to='/terms'style={{textDecoration:"none"}}> <span style={{ color: '#1e1e1e',fontWeight:'600',fontFamily:'Inter',fontSize:'12px' }}>Terms of <br/> Service</span></Link>   and<Link to='/privacy' style={{textDecoration:"none"}}> <span style={{ color: '#1e1e1e',fontWeight:'600',fontFamily:'Inter',fontSize:'12px' }}>Privacy Policy.</span></Link></Typography>
        </Grid>
      </DialogContent>
          <DialogActions style={{ justifyContent: "space-between"}}>
										
          
			
						
          </DialogActions>
          </Dialog>
        </Grid>
        }
        </Grid>
      </Grid>
    </>
  );
};

export default Header;