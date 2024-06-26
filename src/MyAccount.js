import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import { Grid, Typography, TextField, Button } from '@mui/material';
import { Api_url } from './helper';
import { Footer } from './Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import CircularProgress from '@mui/material/CircularProgress';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

import { useMediaQuery } from '@mui/material';
import jwt_decode from 'jwt-decode';
import '@fontsource/alegreya'

import CloseIcon from '@mui/icons-material/Close';
import {Image} from 'mui-image';
import Avatar from '@mui/material/Avatar';
import AccountB from './Images/AccountB.png'
import { Dialog, DialogTitle, DialogContent,  InputAdornment, IconButton } from '@mui/material';

const MyAccount = () => {
  
    const [image, setImage] = useState(null);
    const mobile = useMediaQuery('(max-width:600px)');
   
  
    const [openDialog, setOpenDialog] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});
  
   


    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        // Fetch user data logic goes here
    };
const [photo1,setPhoto1]=useState(null)
const fetchPhoto = async (e) => {
    try {
        const response = await axios.get(`${Api_url}/sign/photo`, {
            params: {
                userId: userId1
            }
        });
        console.log(response.data,'hotot');
        setPhoto1(response.data);
    } catch (error) {
        console.error('Error fetching photo:', error);
        // Handle error appropriately
    }
};

const fetchcontact = async (e) => {
    try {
        const response = await axios.get(`${Api_url}/sign/contact`, {
            params: {
                userId: userId1
            }
        });
        console.log(response.data);
      setUser({ ...user, contactNumber: response.data.contactnumber,Name:response.data.Name,email:response.data.Email,password:response.data.Password })
    } catch (error) {
        console.error('Error fetching photo:', error);
        // Handle error appropriately
    }
};
const[Image1,setImage1]=useState('')
    


    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        console.log(selectedImage)
        setImage1(selectedImage)
        if (selectedImage) {
          const reader = new FileReader();
          reader.onload = () => {
            setImage(reader.result); // Set image preview in state
          };
          reader.readAsDataURL(selectedImage);
        }
      };
      const token = localStorage.getItem('token');
      const userId = jwtDecode(token);
      console.log(userId)
      const userId1=userId._id
      console.log(userId1)
    const handleImageUpload = async () => {
        setLoading(true);

    const formData = new FormData();
    
    formData.append('Image1', Image1);
    formData.append('userId',userId1)
    formData.append('contactnumber',user.contactNumber)
    formData.append('name',user.Name)
    formData.append('email',user.email)
    formData.append('password',user.password)
    

console.log(formData)
    axios.post(`${Api_url}/sign/upload1`, formData)
      .then((response) => {
        setLoading(false);
		  console.log('Data saved successfully!');
		  toast.success('Data saved successfully!');
		//   window.location.reload()
      })
      .catch((error) => {
        setLoading(false);
		  console.error('Error saving data:', error);
		  toast.error('Error saving data.');
      });
    };

   
    const handleTogglePasswordVisibility1 = () => {
        setShowPassword1((prev) => !prev);
      };
    
      const handleTogglePasswordVisibility2 = () => {
        setShowPassword2((prev) => !prev);
      };
    
      const handleCloseDialog = () => {
        setOpenDialog(false);
        settext(false)
        console.log('sdsd')
      };
      const[text,settext]=useState(false)
    
      const handleChangePassword = () => {
        settext(true)
        // Your password change logic here
      };
    const handleSubmit = async (event) => {
        // Form submit logic goes here
    };

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };
	useEffect(() => {
     
        fetchPhoto();
        fetchcontact();
    }, [Image1,loading]);
    return (
        <div>
          
			<Header states={loading} /> 
			<ToastContainer/>
            <Grid container lg={12} sx={{backgroundImage: `url(${AccountB})`,marginTop:'20px',backgroundSize:'100% 100%',backgroundRepeat:'no-repeat'}}>
            <Grid container lg={10} xs={10} sx={{ margin: 'auto',justifyContent:mobile?'center':'' }}>
                <Grid item lg={12} sx={{  marginBottom: mobile ? '36px' : '56px',justifyContent:mobile?'center':'' }}>
                    <Typography sx={{ fontSize: mobile ? '26px' : '56px', fontFamily: 'Space Grotesk', fontWeight: mobile ? 700 : 700, color: '#fff' ,textAlign:'center',marginTop: mobile ? '26px' : '76px',color:'#053F5C'}}>My Account</Typography>
                </Grid>
           
            <Grid container lg={12} xs={12} sx={{ margin: 'auto', borderRadius: '12px', marginBottom:'150px', margin: mobile ? '16px' : '0px', marginTop: mobile ? '0px' : '46px', marginLeft: mobile ? '0px' : '60px', marginRight: mobile ? '0px' : '60px',justifyContent:'space-between' }}>
              
            <Grid container lg={3.2} sx={{ justifyContent: 'center', marginTop: mobile ? '0px' : '0px', backgroundColor: '#EFEFEF', borderRadius:mobile?"10px 10px 0px 0px":'24px', textAlign: 'center' }}>
    {image ? (
        <img
            src={image}
            alt="Image"
            style={{
                width: mobile?"120px":'175px',
                height: mobile?"120px":'175px',
                borderRadius: mobile?"120px":'180px',
               
                objectFit: 'cover',
                margin: 'auto', // Center the image horizontally
				display: 'block',
				marginTop:mobile?"10px":""// Ensure the image is centered correctly
            }}
        />
    ) : (
        photo1 ? (
            <img
                src={photo1}
                alt="Photo"
                style={{
                    width: '175px',
                    height: '175px',
                    borderRadius: '180px',
					marginTop:mobile?"10px":"",
                    objectFit: 'cover',
                    margin: '10px auto', // Center the image horizontally
					display: 'block',
					// Ensure the image is centered correctly
                }}
            />
        ) : (
            <Avatar sx={{ width: 180, height: 180, margin: 'auto' }}>S</Avatar>
        )
    )}
    <input type="file" accept="image/*" id="cover-image-upload" onChange={handleImageChange} style={{ display: 'none' }} />
    <label htmlFor="cover-image-upload" style={{ marginLeft: '0px' }}>
        <Button
            style={{
                width: '100%',
                borderRadius: '6px',
                color: '#053F5C',
                textTransform: 'none',
                fontSize: '18px',
                fontWeight: '700',
                fontFamily: 'Space Grotesk',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                
            }}
            component="span"
        >
            Change Photo
        </Button>
    </label>
</Grid>


                    <Grid container lg={8.5} xs={12} justifyContent="center" sx={{ marginTop: 'auto', marginBottom: 'auto',backgroundColor: '#EFEFEF',borderRadius:mobile?"0px 0px 10px 10px":'24px', }}>
                    <Grid item lg={5} xs={12} sx={{ marginRight: mobile ? '16px' : '56px', marginLeft: mobile ? '16px' : '0px',marginTop:'50px' }}>
    <Typography sx={{ fontFamily: 'Space Grotesk', fontWeight: mobile ? '700' : '700', fontSize: mobile ? '14px' : '16px' }}>Name</Typography>
    <TextField 
        variant="outlined" 
        fullWidth 
        value={user.Name} 
        placeholder="Enter your name"
        InputProps={{
            size: 'small',
            style: { marginTop: '8px', borderRadius: '6px', backgroundColor: '#Fff', border: '1px solid #A3A2A2' }
        }}
        InputLabelProps={{
            style: {
                color: '#787373',
                fontSize: '14px',
                fontWeight: '400',
                fontFamily: 'Space Grotesk',
            }
        }}
        onChange={(e) => setUser({ ...user, Name: e.target.value })} 
    />
</Grid>



                        <Grid item lg={5} xs={12} sx={{ marginRight: mobile ? '16px' : '0px', marginLeft: mobile ? '16px' : '0px' ,marginTop:'50px'}}>
    <Typography sx={{ fontFamily: 'Space Grotesk', fontWeight: mobile ? '700' : '700', fontSize: mobile ? '14px' : '16px' }}>Password</Typography>
    <TextField 
        variant="outlined" 
        fullWidth 
        type="password" // Set the input type to password
        value={user.password} // Assuming user.password holds the password value
        placeholder="Enter your password"
        InputProps={{
            size: 'small',
            style: { marginTop: '8px', borderRadius: '6px', backgroundColor: '#Fff', border: '1px solid #A3A2A2' }
        }}
        InputLabelProps={{
            style: {
                color: '#787373',
                fontSize: '14px',
                fontWeight: '400',
                fontFamily: 'Space Grotesk',
            }
        }}
        onChange={(e) => setUser({ ...user, password: e.target.value })} // Update the password in the state
    />
      <Typography onClick={handleOpenDialog} sx={{
							  textAlign: "end",fontFamily: 'Space Grotesk',fontSize: '14px',color:'#053F5C',fontWeight:'400'}}>Forgot Password?</Typography>
</Grid>
<Dialog open={openDialog} onClose={handleCloseDialog} PaperProps={{
          style: {
           
           
            width: "450px", 
height: "419px",borderRadius:'26px',overflow:'hidden'
            
          }
          }}>
      <Button onClick={handleCloseDialog} style={{ justifyContent: 'flex-end', marginRight: '36px', marginTop: '16px' }}><CloseIcon style={{width:'16px',height:'16px',color:'#1e1e1e'}}/></Button>
      {text?"":<DialogTitle style={{ fontFamily: 'Space Grotesk', fontSize: '26px', textAlign: 'center',fontWeight:'700' }}>Change Password </DialogTitle>}
    {text? <DialogContent >
        <Typography style={{ fontFamily: 'Space Grotesk', fontSize: '20px', fontWeight: "400", marginTop:'92px' }}>Your password is successfully changed.</Typography>
        
        <Button onClick={handleCloseDialog} variant='contained' style={{ background: '#053F5C', textTransform: 'none', width: '100%', marginTop: '32px',fontSize:'18px',fontWeight:'700' }} color="primary">
          Continue
        </Button>
        
      </DialogContent>:  <DialogContent >
        <Typography style={{ fontFamily: 'Space Grotesk', fontSize: '16px', fontWeight: "500", marginTop:'18px' }}>Password</Typography>
        <TextField
          type={showPassword2 ? 'text' : 'password'}
          variant="outlined"
          fullWidth
          InputProps={{
            style: { height: "40px", width: '100%',backgroundColor:'#F4F1F1' },
            endAdornment: (
              <InputAdornment position="end">
             
              </InputAdornment>
            ),
          }}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Typography style={{ fontFamily: 'Space Grotesk', fontSize: '16px', fontWeight: "500", textAlign: 'initial', marginTop: "13px" }}>New Password</Typography>
        <TextField
          type={showPassword1 ? 'text' : 'password'}
          variant="outlined"
          fullWidth
          InputProps={{
            style: { height: "40px", width: '100%' ,backgroundColor:'#F4F1F1'},
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility1} edge="end">
            
                </IconButton>
              </InputAdornment>
            ),
          }}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button onClick={handleChangePassword} variant='contained' style={{ background: '#053F5C', textTransform: 'none', width: '100%', marginTop: '32px',fontSize:'18px',fontWeight:'700' }} color="primary">
          Change Password
        </Button>
        
      </DialogContent>}
    </Dialog>


<Grid item lg={5} xs={12} sx={{ marginRight: mobile ? '16px' : '56px', marginLeft: mobile ? '16px' : '0px', marginTop: '36px', }}>
    <Typography sx={{ fontFamily: 'Space Grotesk', fontWeight: mobile ? '700' : '700', fontSize: mobile ? '14px' : '16px' }}>Email</Typography>
    <TextField 
        variant="outlined" 
        fullWidth 
        value={user.email} // Assuming user.email holds the email value
        placeholder="Enter your email"
        InputProps={{
            size: 'small',
            style: { marginTop: '8px', borderRadius: '6px', backgroundColor: '#Fff', border: '1px solid #A3A2A2' }
        }}
        InputLabelProps={{
            style: {
                color: '#787373',
                fontSize: '14px',
                fontWeight: '400',
                fontFamily: 'Space Grotesk',
            }
        }}
        onChange={(e) => setUser({ ...user, email: e.target.value })} // Update the email in the state
    />
    
</Grid>


<Grid item lg={5} xs={12} sx={{ marginRight: mobile ? '16px' : '0px', marginLeft: mobile ? '16px' : '0px',marginTop:'36px' }}>
    <Typography sx={{ fontFamily: 'Space Grotesk', fontWeight: mobile ? '700' : '700', fontSize: mobile ? '14px' : '16px' }}>Contact Number</Typography>
    <TextField 
        variant="outlined" 
        fullWidth 
        value={user.contactNumber} // Assuming user.contactNumber holds the contact number value
        placeholder="Enter your contact number"
        InputProps={{
            size: 'small',
            style: { marginTop: '8px', borderRadius: '6px', backgroundColor: '#Fff', border: '1px solid #A3A2A2' }
        }}
        InputLabelProps={{
            style: {
                color: '#787373',
                fontSize: '14px',
                fontWeight: '400',
                fontFamily: 'Space Grotesk',
            }
        }}
        onChange={(e) => setUser({ ...user, contactNumber: e.target.value })} // Update the contact number in the state
      
    />
</Grid>

                        {/* Add more text fields for other inputs */}
                   
                   
                   
                        <Grid container lg={11.5} xs={12}>
                        {/* Additional text fields can be added here */}
                        <Grid container lg={12} xs={12} sx={{ justifyContent: 'end', display: 'flex', marginTop: mobile ? '57px' : '36px', marginBottom: mobile ? '36px' : '46px' ,marginRight:'25px'}}>
                            <Grid item lg={9} xs={5.5} sx={{ justifyContent: 'end', display: 'flex' }}>
                                <Button type="submit" style={{ color: '#053F5C', border: '2px solid #053F5C', textTransform: 'none', width: '100px', borderRadius: '8px' ,fontFamily:'Space Grotesk'}} onClick={handleSubmit}>
                                    Cancel
                                </Button>
                            </Grid>
                            <Grid item lg={2.5} xs={6.5} sx={{ justifyContent: 'end', display: 'flex' }}>
                                <Button type="submit" style={{ backgroundColor: '#053F5C', textTransform: 'none', borderRadius: '8px' ,fontFamily:'Space Grotesk'}} variant="contained" onClick={handleImageUpload}>
											{loading ? <CircularProgress style={{color:'#fff'}}/> : "Save Changes"}
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                   
                    </Grid>
                    {/* Additional text fields can be added here */}
                  
               
            </Grid>
            </Grid>
            </Grid>
           <Footer/>
        </div>
    );
};

export default MyAccount;