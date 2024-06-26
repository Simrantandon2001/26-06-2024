import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Grid, TextField } from '@mui/material'
import { TabPanel, TabContext } from '@mui/lab';
import { Footer } from './Footer';
import { Typography ,Button} from '@mui/material';
import Header from './Header';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import ProfileB from './Images/ProfileB.png'
import { Api_url } from './helper';
import {useMediaQuery} from '@mui/material';
const MyProfile = () => {
	const [image, setImage] = useState(null);
	const mobile = useMediaQuery('(max-width:600px)');
  const[bankdetails,setBankdetails]=useState({})
  const [bankAccountHolderName, setBankAccountHolderName] = useState('');
  const [bankAccountNumber, setBankAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [anotherField, setAnotherField] = useState('');
  const [user, setUser] = useState({});
  const [value, setValue] = React.useState(0);
  const handleChange1 = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);
  };
  const fetchContact = async () => {
    try {
        const response = await axios.get(`${Api_url}/sign/contact`, {
            params: {
                userId: userId1
            }
        });

        console.log(response.data, 'contact');
        console.log(response.data.bankDetails, 'bankdetails');
        console.log(response.data.bankdetails); // Check the structure of bankdetails object

        // Check if bankdetails is correctly spelled as bankDetails
        setBankdetails({
            ...bankdetails,
            bankAccountHolderName: response.data.bankDetails.bankAccountHolderName,
            bankAccountNumber: response.data.bankDetails.bankAccountNumber,
            ifscCode: response.data.bankDetails.ifscCode,
            PanCard:response.data.bankDetails.PanCard,
        });
    } catch (error) {
        console.error('Error fetching photo:', error);
        // Handle error appropriately
    }
};

// Call fetchContact function
// fetchContact();

  const handleBankAccountHolderNameChange = (e) => {
    setBankdetails({ ...bankdetails, bankAccountHolderName: e.target.value });
  };
  const token = localStorage.getItem('token');
      const userId = jwtDecode(token);
      console.log(userId)
      const userId1=userId._id
      console.log(userId1)
  const [photo1,setPhoto1]=useState(null)
  const fetchPhoto = async (e) => {
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
  };
  useEffect(()=>{
    fetchPhoto();
    fetchContact();
  },[])
  

//   const TabPanel = (props) => {
//     const { children, index, ...other } = props;

//     return (
//       <div
//         role="tabpanel"
//         hidden={value !== index}
//         id={`vertical-tabpanel-${index}`}
//         aria-labelledby={`vertical-tab-${index}`}
//         {...other}
//       >
//         {value === index && (
//           <Box sx={{ p: 3 }}>
//             <Typography>{children}</Typography>
//           </Box>
//         )}
//       </div>
//     );
//   };
 

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
  const handleSave = async (e) => {
    e.preventDefault();
const bankAccountHolderName=bankdetails.bankAccountHolderName
const bankAccountNumber=bankdetails.bankAccountNumber
const ifscCode=bankdetails.ifscCode
const PanCard=bankdetails.PanCard
    try {
      await axios.post(`${Api_url}/sign/bankdetails/${userId1}`, {
        bankAccountHolderName,
        bankAccountNumber,
        ifscCode,
        PanCard
      });

      
      console.log('Bank details saved successfully');
    } catch (error) {
      // Handle error
      console.error('Error saving bank details:', error.response.data.error);
    }
  };

  return (
    <>
    <Header/>
    <Grid container lg={12} sx={{backgroundImage: `url(${ProfileB})`,backgroundSize:'100% 100%',backgroundRepeat:'no-repeat'}}>
      <Grid container lg={12} sx={{margin:'auto',justifyContent:'center'}}>
    <Grid item lg={12}>
      <Typography sx={{textAlign:'center',fontSize: mobile?'26px':'56px',fontFamily:'Space Grotesk',fontWeight:'700',color:'#005B9D',marginTop:'76px'}}>My Profile</Typography>
    </Grid>
				  <Grid container lg={10} xs={10}>
					  <Grid container lg={3}>
        <Tabs
							  orientation={mobile?'':"vertical"}
          value={value}
          onChange={handleChange1}
        
       
        style={{borderLeft:mobile?"0px":'8px solid #005B9D',height:mobile?"80px":'353px',borderBottom:mobile?"4px solid #005B9D":"0px"}}
        >
          <Tab label="Profile Details" value={0} tabIndex={0}  style={{
         backgroundColor:value===0?'#EFEFEF':'',
            color: '#005B9D',
            textTransform: 'none',
            fontSize: mobile?"12px":'20px',
            fontWeight: '700',
            fontFamily: 'Space Grotesk',
            marginTop: '32px',
            
            width:mobile?"143px":'270px',borderRadius:mobile?' 12px 12px 0px 0px':'0px 12px 12px 0px'
             // Adjust this value as needed
					  }} >
						  </Tab>
          <Tab label="Bank Details"  value={1}  style={{
        backgroundColor:value===1?'#EFEFEF':'',
            color: '#005B9D',
            textTransform: 'none',
            fontSize: mobile?"12px":'20px',
            fontWeight: '700',
            fontFamily: 'Space Grotesk',
            marginTop: '32px',
        
            width:mobile?"143px":'270px',borderRadius:mobile?' 12px 12px 0px 0px':'0px 12px 12px 0px'
          }}/>
						  </Tabs>
					  </Grid>
					  <Grid container lg={9} xs={12}>
				  <TabContext value={value}>
        <TabPanel
								  value={0}
								  index={0} style={{ padding: mobile?'16px 0px 16px 0px':"" }}
        >
          <Grid container lg={11.5} xs={12} sx={{backgroundColor:'#EFEFEF',borderRadius:'24px',justifyContent:'center',display:'flex'}}>
<Grid container lg={10} xs={12} sx={{margin:'auto',justifyContent:mobile?'center':''}}>

<Grid container lg={12} xs={10} sx={{marginTop:'40px',justifyContent:mobile?'space-between':""}}>
<Grid item lg={6} xs={5} sx={{margin:mobile?"":'auto',justifyContent:'start',display:'flex',alignItems:'center'}}>
         {photo1 ? (
        <img
            src={photo1}
            alt="Image"
            style={{
                width: '100px',
                height: '100px',
                borderRadius: '180px',
               
                objectFit: 'cover',
                
                display: 'block', 
            }}
        />
    ) : 
            <Avatar sx={{ width: 90, height: 90, }}>S</Avatar>
        
    }
    </Grid> 
											  <Grid item lg={6} xs={5} style={{justifyContent:'end',display:'flex',alignItems:'center'}}>
          <Button  sx={{   textTransform:'none',padding:'14px 24px',height:'42px',border:'2px solid #005B9D',fontSize:mobile?"14px":'18px',fontWeight:'700',lineHeight:'32px',marginTop:'00px'}}>
                   Edit
                  </Button>
          </Grid>
</Grid>
        
										  <Grid container lg={12} xs={10} sx={{ justifyContent: 'space-between', display: 'flex',marginTop:'33px' }} >
  <Grid item lg={5}>
    <Typography sx={{fontSize:mobile?"16px":'24px',fontWeight:'400',color:'#005B9D',fontFamily:'Space Grotesk'}}>Name</Typography>
  </Grid>
  <Grid item lg={7}>
    <Typography sx={{fontSize:mobile?"16px":'24px',fontWeight:'600',color:'#005B9D',fontFamily:'Space Grotesk',display:'flex',justifyContent:'start'}}>{user.Name}</Typography>
  </Grid>
</Grid>
<Grid container lg={12} xs={10}  sx={{marginBottom:'60px',marginTop:'20px',justifyContent:mobile?'space-between':''}}>
  <Grid item lg={5}>
    <Typography sx={{ fontSize: mobile?"16px":'24px', fontWeight: '400', color: '#005B9D', fontFamily: 'Space Grotesk' }}>Email</Typography>
  </Grid>
  <Grid item lg={5} sx={{ display: 'flex', alignItems: 'center' }}>
    <Typography sx={{ fontSize: mobile?"16px":'24px', fontWeight: '600', color: '#005B9D', fontFamily: 'Space Grotesk' }}>{user.Email}</Typography>
  </Grid>
  <Grid item lg={5}>
    <Typography sx={{ fontSize: mobile?"16px":'24px', fontWeight: '400', color: '#005B9D', fontFamily: 'Space Grotesk',marginTop:'20px' }}>Contact Number</Typography>
  </Grid>
  <Grid item lg={5} sx={{ display: 'flex', alignItems: 'center' }}>
    <Typography sx={{ fontSize: mobile?"16px":'24px', fontWeight: '600', color: '#005B9D', fontFamily: 'Space Grotesk',marginTop:'20px' }}>{user.contactnumber}</Typography>
  </Grid>
</Grid>


          
       
          </Grid>
          </Grid>
        </TabPanel>
        
        <TabPanel
          value={1}
          index={1}
          style={{
            backgroundColor: '#EFEFEF',
            color: '#005B9D',
            textTransform: 'none',
            fontSize: '20px',
            fontWeight: '700',
            fontFamily: 'Space Grotesk',
            marginTop: '72px',
            marginBottom: '72px',
            marginLeft: mobile?"0px":'16px', 
            borderRadius:'24px',padding:'40px',
            
          }}
        >
        <Grid container lg={12} sx={{ borderRadius:'24px', backgroundColor:'#EFEFEF' }}>
    <Grid container lg={12} sx={{ margin:'auto' }}>
   
<Grid container lg={12} style={{justifyContent:'space-between'}} >
        <Grid item lg={5.5}>
    <Typography  sx={{color:'#292611',fontSize:'16px',fontWeight:'500',fontFamily:'Space Grotesk',marginTop:'36px'}}>
        Bank Account Holder’s Name
    </Typography>
    <TextField 
        variant="outlined" 
        fullWidth 
        placeholder="Enter bank holder’s name"

        value={bankdetails.bankAccountHolderName} 
       
        onChange={handleBankAccountHolderNameChange}
      
        InputProps={{
            size: 'small',
            style: { 
                marginTop: '8px', 
                borderRadius: '6px', 
                backgroundColor: '#FFF', 
                
            }
        }}
        InputLabelProps={{
            style: {
                color: '#787373',
                fontSize: '14px',
                fontWeight: '400',
                fontFamily: 'Space Grotesk',
            }
        }}
    />
</Grid>


        <Grid item lg={5.5}>
          <Typography sx={{color:'#292611',fontSize:'16px',fontWeight:'500',fontFamily:'Space Grotesk',marginTop:'36px'}}>Bank Account Number</Typography>
            <TextField 
                variant="outlined" 
                fullWidth 
                placeholder="Enter bank account number"
                // Assuming bankAccountNumber holds the value
    
                value={bankdetails.bankAccountNumber} 
       
                onChange={(e) => setBankdetails({ ...bankdetails, bankAccountNumber: e.target.value })}
                InputProps={{
                  size: 'small',
                  style: { 
                      marginTop: '8px', 
                      borderRadius: '6px', 
                      backgroundColor: '#FFF', 
                     
                  }
              }}
              InputLabelProps={{
                  style: {
                      color: '#787373',
                      fontSize: '14px',
                      fontWeight: '400',
                      fontFamily: 'Space Grotesk',
                  }
              }}
            />
        </Grid>

        <Grid item lg={5.5}>
        <Typography sx={{color:'#292611',fontSize:'16px',fontWeight:'500',fontFamily:'Space Grotesk',marginTop:'36px'}}>IFSC Code</Typography>
    <TextField 
        variant="outlined" 
        fullWidth 
        placeholder="Enter IFSC code"
        // Assuming ifscCode holds the value
       


        value={bankdetails.ifscCode} 
       
        onChange={(e) => setBankdetails({ ...bankdetails, ifscCode: e.target.value })}
        InputProps={{
            size: 'small',
            style: { 
                marginTop: '8px', 
                borderRadius: '6px', 
                backgroundColor: '#FFF', 
           
            }
        }}
        InputLabelProps={{
            style: {
                color: '#787373',
                fontSize: '14px',
                fontWeight: '400',
                fontFamily: 'Space Grotesk',
            }
        }}
    />
</Grid>
<Grid item lg={5.5}>
                      <Typography sx={{color:'#292611',fontSize:'16px',fontWeight:'500',fontFamily:'Space Grotesk',marginTop:'36px'}}>PAN Number</Typography>
                      <TextField 
                          variant="outlined" 
                          fullWidth 
                          placeholder="Enter PAN number"
                          value={bankdetails.PanCard} 
                          onChange={(e) => setBankdetails({ ...bankdetails, PanCard: e.target.value })}
                          InputProps={{
                              size: 'small',
                              style: { 
                                  marginTop: '8px', 
                                  borderRadius: '6px', 
                                  backgroundColor: '#FFF', 
                              }
                          }}
                          InputLabelProps={{
                              style: {
                                  color: '#787373',
                                  fontSize: '14px',
                                  fontWeight: '400',
                                  fontFamily: 'Space Grotesk',
                              }
                          }}
                      />
                    </Grid>
              
</Grid>

     
<Grid container lg={12} sx={{ marginTop: 'auto' }}>
    <Grid item lg={11.8} sx={{display:'flex',justifyContent:'end'}}>
        <Button 
            style={{ 
                backgroundColor: '#053F5C',
                color: '#fff', 
                textTransform: 'none', 
                borderRadius: '8px' ,
                fontFamily: 'Space Grotesk',
                marginTop:'36px',
                padding:'14px 30px',
                height:'42px',
                fontSize:'18px',fontWeight:'700',lineHeight:'32px'
            }} 
            onClick={handleSave}
        >
            Save Details
        </Button>
    </Grid>
</Grid>

       
    </Grid>
</Grid>
        </TabPanel>
						  </TabContext>
						  </Grid>
		</Grid>
      </Grid>
		  </Grid>
		  <Footer/>
    </>
  );
};

export default MyProfile;