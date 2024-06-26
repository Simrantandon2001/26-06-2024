import React from 'react'
import {Button, Grid, Typography,TextField,Box} from '@mui/material'
import Image from 'mui-image'
import Second from './Images/Second.png'
import gradient from './Images/gradient.png'
import { Api_url } from './helper';
import '@fontsource/alegreya'
import device from './Images/device.png'
import Contactus from './Images/CONTACTUS.png'
import axios from 'axios';
import { useState,useEffect } from "react";
import Rmb1 from './Images/Rmb1.png'
import Rmb2 from './Images/Rmb2.png'
import Review from './Images/Review.png'
import Lottie from 'react-lottie';
import Im from './Images/1.json'
import Create from './Images/Create.png'
import Testimonial from './Testimonial'
import { Link } from 'react-router-dom'
import {useMediaQuery} from '@mui/material'
import Header from './Header'
import Slider from './Slider'
import Book from './Images/H2B.json';
import { Footer } from './Footer'
import HomeSlider from './HomeSlider'
import R3 from './Images/R3.json'
import R1 from './Images/R1.json'
import R4 from './Images/R4.json'
import R5 from './Images/R5.json'
import Vector from './Images/Vector.png'
import { Star } from './Star'
import Rmlogo from './Images/Rmlogo.png';
const Landingpage = () => {
	const [latestDocument, setLatestDocument] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const handleClick = async () => {
      
      // Redirect to the Amazon link stored in books.Amazon
      window.open(latestDocument.Amazon, '_blank');
    };
    useEffect(() => {
        const fetchLatestBook = async () => {
            try {
                const response = await axios.get(`${Api_url}/sign/getlatestbook`);
				console.log(response)
                if (response.status === 200) {
					setLatestDocument(response.data);
				
                    console.log(response.data,'jkj')
                } else {
                    setError('Failed to fetch latest book');
                }
            } catch (error) {
                setError('Internal server error');
            } finally {
				setLoading(false);
				
            }
        };

        fetchLatestBook();
	}, []); 
	
	const mobile = useMediaQuery('(max-width:600px)');
	const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
	const [currentText, setCurrentText] = useState('');
	const [currentTextColor, setCurrentTextColor] = useState('');
	const interval = 100; // Adjust this value to control typing speed
	  const colorChangeInterval = 500;
	const [cursorVisible, setCursorVisible] = useState(true);
	const phrases = ["Buddy", "Companion", "Pal", "Partner", "Friend", "Mate", "Sidekick", 
    "Ally", "Cohort", "Confidant", "Confidante", "Chum", "Amigo", 
    "Acquaintance", "Comrade"];
	useEffect(() => {
	  const intervalId = setInterval(() => {
		const currentPhrase = phrases[currentPhraseIndex];
		if (currentText === currentPhrase) {
		  setTimeout(() => {
			setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
			setCurrentText('');
			setCurrentTextColor('');
		  }, interval);
		} else {
		  setCurrentText((prevText) => currentPhrase.substring(0, prevText.length + 1));
		}
	  }, interval);
  
	  return () => clearInterval(intervalId);
	}, [currentText, currentPhraseIndex]);
  
	useEffect(() => {
	  const colorChangeIntervalId = setInterval(() => {
		setCurrentTextColor((prevColor) => (prevColor === '#FF5733' ? '' : '#FF5733')); // Change color
	  }, colorChangeInterval);
  
	  const cursorIntervalId = setInterval(() => {
		setCursorVisible((prev) => !prev);
	  }, 1000);
  
	  return () => {
		clearInterval(colorChangeIntervalId);
		clearInterval(cursorIntervalId);
	  };
	}, []);
	
	
	
    const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: Im,
		rendererSettings: {
		  preserveAspectRatio: "xMidYMid slice"
		}
	};
	const defaultOptions1 = {
		loop: true,
		autoplay: true,
		animationData: Book,
		rendererSettings: {
		  preserveAspectRatio: "xMidYMid slice"
		}
	};
  const defaultOptions2 = {
		loop: true,
		autoplay: true,
		animationData: Book,
		rendererSettings: {
		  preserveAspectRatio: "xMidYMid slice"
		}
	};
  const defaultOptions3 = {
		loop: true,
		autoplay: true,
		animationData: R1,
		rendererSettings: {
		  preserveAspectRatio: "xMidYMid slice"
		}
	}; const defaultOptions4 = {
		loop: true,
		autoplay: true,
		animationData: R4,
		rendererSettings: {
		  preserveAspectRatio: "xMidYMid slice"
		}
	};
  const defaultOptions5 = {
		loop: true,
		autoplay: true,
		animationData: R3,
		rendererSettings: {
		  preserveAspectRatio: "xMidYMid slice"
		}
	};
  const defaultOptions6 = {
		loop: true,
		autoplay: true,
		animationData: R5,
		rendererSettings: {
		  preserveAspectRatio: "xMidYMid slice"
		}
	};
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
  
  return (
    <>
    <Header/>
    <Grid container lg={12}>
       <Grid container lg={12} sx={{margin:'auto',backgroundImage: `url(${Rmb1})`,backgroundSize:'100% 100%',justifyContent:'center',minHeight:mobile?"auto":'917px'}} >
<Grid item lg={8} >
  <Typography sx={{fontSize:mobile?"32px":'96px',fontWeight:'500',lineHeight:mobile?"45px":'124px',textAlign:'center',fontFamily:'Space Grotesk',color:'#053F5C',marginTop:mobile?"19px":"86px"}}>
  Your Trusted<br/><span><img src={Vector} style={{position:'absolute',left:'45%',width:mobile?"122px":"auto"}}></img></span> Reading Buddy!
  </Typography>
 
</Grid>
<Grid item lg={6} xs={10} >
  <Typography sx={{fontSize:mobile?"14px":'20px',fontWeight:'500',marginTop:mobile?"12px":'32px',lineHeight:mobile?"20px":'32px',textAlign:'center',fontFamily:'Space Grotesk',color:'#053F5C'}}>
  Building a community for authors, readers and book reviewers to bring remarkable books to the limelight.
  </Typography>
</Grid>

 
    <Grid container lg={12} xs={12}  spacing={2} sx={{display:'flex',justifyContent:'center',marginTop:'32px',marginBottom:'50px'}}>
      <Grid item lg={6} xs={12} style={{justifyContent:mobile?"center":'end',display:'flex'}}>
        <Link to='/Ausign'>
      <Button 
            sx={{
                fontSize:'18px',
                fontWeight:'700',
                lineHeight:'32px',
                backgroundColor:'#053F5C',
                borderRadius:'12px',
                padding:'14px 30px',
                width:'100%',
									  color: '#fff',
									  fontFamily:'Space Grotesk',
                textTransform: 'capitalize',
                height:'42px',
                '&:hover': {
                    backgroundColor:'#053F5C',
                    color:'#fff',
                },
                marginRight: '10px' // Add margin between buttons
            }}
        >
            Author
        </Button>
        </Link>
      </Grid>
      <Grid item lg={6} xs={12}style={{justifyContent:mobile?"center":'',display:'flex'}}>
        <Link to='/sign'>
      <Button 
            sx={{
                fontSize:'18px',
                fontWeight:'700',
                lineHeight:'32px',
                backgroundColor:'transparent',
                padding:'14px 24px',
                borderRadius:'12px',
                height:'42px',
                border:'2px solid #053F5C',
								  color: '#053F5C',
								  fontFamily:'Space Grotesk',
                textTransform: 'capitalize',
                '&:hover': {
                   
                    color:'#053F5C',
                }
            }}
        >
           Reviewer
        </Button>
        </Link>
      </Grid>
    </Grid>
  



				  {mobile ? "" :
					  <Grid container lg={8}>
 
						  {/* <Image src={device}></Image> */}
						  <Box sx={{ backgroundImage: `url(${Rmb2})`, height: "650px", backgroundRepeat: 'no-repeat', backgroundSize: "100% 100%" }}>
							  <Grid container lg={12} sx={{ marginTop: '32px', justifyContent: 'center' }}>
								  <Grid container lg={11} sx={{ backgroundColor: '#fff' }}>
									  <Grid container lg={9} sx={{ margin: 'auto' }}>
										  <Grid container lg={8}>
											  <Grid item lg={2}>
												  <img src={Rmlogo} style={{ width: '56px', height: '40px' }} />
											  </Grid>
											  <Grid item lg={10} sx={{ justifyContent: "end", display: 'flex', alignItems: 'center' }}>
												  <Grid item lg={2}>
													  <Typography sx={{ fontSize: '10px', fontWeight: '700', lineHeight: '24px', color: '#000', fontFamily: 'Space Grotesk', cursor: 'pointer' }}>
														  Home
													  </Typography>
												  </Grid>
												  <Grid item lg={2.3}>
													  <Typography sx={{ fontSize: '10px', fontWeight: '700', lineHeight: '24px', color: '#000', fontFamily: 'Space Grotesk', cursor: 'pointer' }}>
														  Reviews
													  </Typography>
												  </Grid>
												  <Grid item lg={2}>
													  <Typography sx={{ fontSize: '10px', fontWeight: '700', lineHeight: '24px', color: '#000', fontFamily: 'Space Grotesk', cursor: 'pointer' }}>
														  About
													  </Typography>
												  </Grid>
												  <Grid item lg={2}>
													  <Typography sx={{ fontSize: '10px', fontWeight: '700', lineHeight: '24px', color: '#000', fontFamily: 'Space Grotesk', cursor: 'pointer' }}>
														  Contact
													  </Typography>
												  </Grid>
											  </Grid>
										  </Grid>
										  <Grid container lg={4} sx={{ justifyContent: "end", display: 'flex', alignItems: 'center' }}>
											  <Grid item lg={5.3}>
												  <Link to="/sign" style={{ textDecoration: 'none' }}>
													  <Button sx={{ fontSize: '10px', fontWeight: '700', color: '#053F5C', border: '2px solid #053F5C', textTransform: 'none', borderRadius: '6px', padding: '14px 21px', height: '32px', fontFamily: 'Space Grotesk' }} >Sign Up</Button>
												  </Link>
											  </Grid>
											  <Grid item lg={5.2}>
												  <Link to="/login" style={{ textDecoration: 'none' }}>
													  <Button sx={{ fontSize: '10px', fontWeight: '700', color: '#fff', backgroundColor: '#053F5C', textTransform: 'none', borderRadius: '6px', padding: '14px 26px', height: '32px', fontFamily: 'Space Grotesk', '&:hover': { backgroundColor: '#053F5C' } }} >Log In</Button>
												  </Link>
											  </Grid>
										  </Grid>
									  </Grid>
								  </Grid>
							  </Grid>
               
							  <Grid sx={{ marginTop: '24px', marginLeft: '37px', padding: '50px 0px 50px 100px', borderRadius: '16px 0px 0px 16px', maxHeight: '512px', width: "93%", display: 'flex' }}>
						
             
							
								  <Grid item lg={6}>
									  <Typography
										  variant="h6"
										  style={{
											  marginTop: '10px',
											  fontWeight: 'bold',
											  fontFamily: 'Space Grotesk',
											  color: '#053F5C',
											  fontSize: latestDocument && latestDocument.title && latestDocument.title.length > 10 ? '37px' : '64px'
										  }}
									  >
										  {latestDocument && latestDocument.title}
  
									  </Typography>
									  <span><Star /></span>
									  <span style={{ color: '#206A8F', fontWeight: "700", fontSize: '14px', fontFamily: 'Space Grotesk', marginLeft: '7px' }}>{latestDocument.averageRating}</span>




									  <Typography variant="h6" style={{ marginTop: '10px', fontWeight: 'bold', fontFamily: 'Space Grotesk', fontSize: "20px" }}>
										  About the Book
									  </Typography>
									  <Typography variant="body2" color="textSecondary" sx={{ fontFamily: 'Space Grotesk', marginTop: '8px', fontSize: "12px", fontWeight: '400', color: '#1B1D1C' }}>
										  {latestDocument && latestDocument.Aboutb
											  ? (latestDocument.Aboutb.length > 200 ? `${latestDocument.Aboutb.substring(0, 170)}...` : latestDocument.Aboutb)
											  : ''}
									  </Typography>
									  <Grid item lg={12}>
										  <Typography variant="h6" style={{ marginTop: '10px', fontWeight: 'bold', fontFamily: 'Space Grotesk', fontSize: "20px" }}>
											  About the Author
										  </Typography>
									
										  <Typography variant="body2" style={{ marginTop: '8px', fontFamily: 'Space Grotesk', fontSize: "12px", fontWeight: '400', color: '#1B1D1C' }}>
                            
											  {latestDocument && latestDocument.Aboutauthor
												  ? (latestDocument.Aboutauthor.length > 200 ? `${latestDocument.Aboutauthor.substring(0, 170)}...` : latestDocument.Aboutauthor)
												  : ''}
										  </Typography>
									  </Grid>
									  <Grid item lg={10} sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
										  <Grid item lg={3}>
											  <img src={latestDocument.pdfPath} style={{ width: "75px", height: "75px", borderRadius: '50%', marginTop: '18px' }} />
										  </Grid>
										  <Grid item lg={8} sx={{ alignItems: 'center', display: 'flex' }}>
											  <Grid item lg={12}>
												  <Typography style={{ marginTop: '10px', fontFamily: 'Space Grotesk' }}>{latestDocument.name}<br />Author</Typography>
											  </Grid>
										
										  
										 
										  </Grid>
									  </Grid>
								  </Grid>
								  <Grid item lg={6}>
									  <Grid item lg={12} sx={{ justifyContent: 'center', display: 'flex' }}>
										  <img src={latestDocument.coverImagePath} style={{ width: "256px", height: "356px", }} />
									  </Grid>
									  <Grid item lg={12} sx={{ justifyContent: 'center', display: 'flex' }}>
										  <Button onClick={handleClick} sx={{
											  fontSize: '16px',
											  fontWeight: '700',
											  lineHeight: '32px',
											  textTransform: 'none',
											  fontFamily: 'Space Grotesk',
											  backgroundColor: '#053F5C',
											  color: '#fff',
											  padding: '14px 24px',
											  height: '42px',
											  borderRadius: '6px',
											  marginBottom: '83px',
											  marginTop: '12px',
											  '&:hover': {
												  color: '#FFF',
												  backgroundColor: "#053F5C"
											  }
										  }}
										  >Buy Now</Button>
										  {/* {error?'yes':'no'} */}
									  </Grid>
								  </Grid>

							  </Grid>
                
						  </Box>
                
             
					  </Grid>}
       </Grid>

       <Grid container lg={12} sx={{backgroundImage: `url(${Create})`,minHeight:mobile?"1500px":'800px',backgroundSize:'100% 100%',backgroundRepeat:'no-repeat'}}>
                <Grid container lg={10.5} xs={12} sx={{margin:'auto',justifyContent:'space-between'}} >
               
                <Grid container lg={12} xs={12}>
                    <Grid item lg={8} xs={10} sx={{margin:mobile?'auto':'',marginBottom:mobile?"":"20px"}}>
                        <Typography sx={{fontSize:mobile?"26px":'56px',fontWeight:'500',color:'#053F5C',letterSpacing:'-1.68px',fontFamily:'Space Grotesk',lineHeight:mobile?"36px":'64px'}}>Dear authors, we want to read your book</Typography>
                    </Grid>
                    
                   
  
</Grid>
					  <Grid container lg={12} xs={10} sx={{justifyContent:mobile?"center":'space-between',marginTop:'60px',margin:'auto'}}>
						  <Grid container lg={3.8} style={{justifyContent:'center',padding:'40px 20px',background:'#FFF',borderRadius:'26px',marginTop:mobile?"20px":"0px",marginBottom:mobile?"20px":"0px"}}>
						  <Lottie height={106} width={106} options={defaultOptions4}/>
						  <Grid item lg={10} xs={12}>
							  <Typography style={{ fontFamily: 'Space Grotesk', fontSize:mobile?"20px": '30px', lineHeight: 'normal', color: '#030605', marginTop: '44px' }}>
							  Authentic Reviews
								  </Typography>
							  </Grid>
							  <Grid item lg={9.5} xs={12} sx={{marginTop:mobile?"0px":"10px"}}>
							  <Typography style={{fontFamily:'Space Grotesk',fontSize:mobile?"14px":'20px',lineHeight:'30px',color:'#5C5E5E'}}>
							  Opinions from genuine readers who are skilled at giving balanced reviews.
								  </Typography>
								  </Grid>
						  </Grid>
						  <Grid container lg={3.8} style={{background:'#FFF',borderRadius:'26px',justifyContent:'center',padding:'40px 20px',marginTop:mobile?"20px":"0px",marginBottom:mobile?"20px":"0px"}}>
						  <Lottie height={106} width={106} options={defaultOptions3}/>
						  <Grid item lg={10} xs={12}>
							  <Typography style={{fontFamily:'Space Grotesk',fontSize:mobile?"20px":'32px',lineHeight:'normal',color:'#030605',marginTop:'44px'}}>
							  Book Community
							  </Typography>  
							  </Grid>
							  <Grid item lg={10} xs={12} sx={{marginTop:mobile?"0px":"10px"}}>
							  <Typography style={{fontFamily:'Space Grotesk',fontSize:mobile?"14px":'20px',lineHeight:'30px',color:'#5C5E5E'}}>
							  A fandom that encourages new readers to join the conversation around your book.
							  </Typography>  
								  </Grid>
						  </Grid>
						  <Grid container lg={3.8} style={{justifyContent:'center',padding:'40px 20px',background:'#FFF',borderRadius:'26px',marginTop:mobile?"20px":"0px",marginBottom:mobile?"20px":"0px"}}>
							  <Lottie height={106} width={106} options={defaultOptions6}/>
							  <Grid item lg={10} xs={12}>
							  <Typography style={{fontFamily:'Space Grotesk',fontSize:mobile?"20px":'32px',lineHeight:'normal',color:'#030605',marginTop:'44px'}}>
							  Affordable{mobile?"":<br/>} Plans
							  </Typography>  
							  </Grid>
							  <Grid item lg={10} xs={12} sx={{marginTop:mobile?"0px":"10px"}}>
							  <Typography style={{fontFamily:'Space Grotesk',fontSize:mobile?"14px":'20px',lineHeight:'30px',color:'#5C5E5E'}}>
							  Your book, your way. Choose from a selection of plans that suit your budget. </Typography>  
								  </Grid>
							 
							  
						  </Grid>
						  {/* <Grid item lg={4}>
						  <Lottie height={206} width={206} options={defaultOptions}/>
							  <Typography style={{fontFamily:'Space Grotesk',fontSize:'32px',lineHeight:'64px',color:'#030605'}}>
							  Authentic Reviews
							  </Typography>
							  <Typography style={{fontFamily:'Space Grotesk',fontSize:'20px',lineHeight:'30px',color:'#5C5E5E'}}>
							  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							  </Typography>
						  </Grid>
						  <Grid item lg={4}>
						  <Lottie height={206} width={206} options={defaultOptions}/>
							  <Typography style={{fontFamily:'Space Grotesk',fontSize:'32px',lineHeight:'64px',color:'#030605'}}>
							  Authentic Reviews
							  </Typography>
							  <Typography style={{fontFamily:'Space Grotesk',fontSize:'20px',lineHeight:'30px',color:'#5C5E5E'}}>
							  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							  </Typography>
						  </Grid> */}
</Grid>
                </Grid>
            </Grid>

          

           <HomeSlider/>

<Grid container lg={12}  sx={{marginTop:'90px',background:'var(--orange-grad, linear-gradient(180deg, #FFF 0%, #F27F0C 346.94%))'}}>
    <Grid container lg={10} xs={12} sx={{margin:'auto',justifyContent:mobile?"center":'space-between'}}>
   
    <Grid item lg={6.1} xs={11}>
        <Typography sx={{ fontSize:mobile?"26px":'56px', fontWeight:'500', color:'#053F5C', letterSpacing:'-1.68px',fontFamily:'Space Grotesk',textAlign:mobile?"center":"" }}>Amazon Reviews</Typography>
        <Typography sx={{ fontSize:mobile?"14px":'22px', fontWeight:'400', color:'#000', lineHeight:'36px' ,fontFamily:'Space Grotesk',lineHeight:mobile?"20px":''}}>If you are haunted by “No Reviews Yet” or tired of reworded blurbs masquerading as book reviews, then RMB is the answer for you. Our reviewer community consists of genuine readers who love discussing their latest reads. Become an RMB author to get your Amazon book page buzzing!</Typography>
    </Grid>
    <Grid item lg={5} sx={{marginTop:'-25px',marginBottom:'81px'}}>
    <Lottie
              height={mobile?200:400}
              width={mobile?200:400}
              options={defaultOptions5}
              style={{ marginTop: '50px' }}
            />
    </Grid>


    </Grid>
</Grid>
<Testimonial/>

{/* <Grid container lg={12} sx={{marginTop:'90px',marginBottom:'50px'}}>
    <Grid container lg={10} sx={{margin:'auto',justifyContent:'space-between'}}>
    <Grid container lg={5} justifyContent="center" alignItems="center">
    <Lottie height={450} width={450} options={defaultOptions}/>
</Grid>
        
        <Grid container lg={6} spacing={2}>
        <Grid item lg={12}>
            <Typography sx={{color:'#005B9D',fontSize:'56px',fontWeight:'500',textAlign:'center',marginBottom:'20px',fontFamily:'Space Grotesk'}}>Contact Us</Typography>
        </Grid>
        <Grid item lg={6}>
          <TextField
            fullWidth
            label="Name"
            name="name"
        
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
                  border: '2px solid transparent', // Set border color to transparent
                  backgroundColor: '#fff',fontFamily:'Space Grotesk'
                }
              }}
          />
        </Grid>
        <Grid item lg={6}>
  <TextField
    fullWidth
    label="Email"
    name="email"
    type="email"
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
        border: '2px solid transparent', // Set border color to transparent
        backgroundColor: '#fff',fontFamily:'Space Grotesk'
      }
    }}
  />
</Grid>


        <Grid item lg={12}>
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            
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
                  border: '2px solid transparent', // Set border color to transparent
                  backgroundColor: '#fff'
                }
              }}
          />
        </Grid>
        <Grid item lg={12}>
          <TextField
            fullWidth
            label="Message"
            name="message"
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
                  border: '2px solid transparent', // Set border color to transparent
                  backgroundColor: '#fff'
                }
              }}
          />
        </Grid>
        <Grid item lg={12}>
  <Button style={{ backgroundColor: '#005B9D', color: 'white',fontSize: '16px',
                  fontWeight: '400',textTransform:'none' ,width:'100%',paddinig:'16px 36px',borderRadius:'12px',fontFamily:'Space Grotesk'}}>
    Submit
  </Button>
</Grid>

     
        </Grid>
    </Grid>
</Grid> */}
<Grid container lg={12} xs={12} sx={{marginTop:'-56px',marginBottom:'0px',backgroundColor:"#F8F5F0"}}>
    <Grid container lg={10}xs={10} sx={{margin:'auto',justifyContent:'space-between'}}>
	<Grid item lg={12} xs={12} style={{justifyContent:'center',marginTop:"90px",display:mobile?"flex":""}}>
						  

						  <Typography sx={{fontSize:'16px', fontWeight:'400', color:'#F39C12', textAlign:'center',marginTop:'70px'}}>GET IN TOUCH</Typography>
						  </Grid>
					  <Grid item lg={12} xs={11} style={{ justifyContent: 'center',marginBottom:'56px' }}>
						  

        <Typography sx={{fontSize:mobile?"26px":'42px', fontWeight:'500', color:'#053F5C', textAlign:mobile?"initial":'center'}}>Needs Help? Let’s Get in Touch</Typography>
		</Grid>
        
						  <Grid container lg={12} xs={12}>
							  <Grid container lg={0.9} xs={2.9}>
							  {/* <Typography sx={{WebkitTextStrokeColor:'#005B9D',fontSize:'76px',fontWeight:'400',textAlign:'center',marginBottom:'20px',fontFamily:'Space Grotesk',transform: 'rotate(-90deg)',WebkitTextStroke:'0.7063490152359009',opacity:'0.6',color:'#fff',color: 'transparent', // Set text color to transparent
    textShadow: '1px 2px 3px var(--Blue-4, #005B9D)',}}>Contact Us</Typography> */}
      					  <img src={Contactus}  style={{height:'89%'}}/>
							  </Grid>
							  <Grid container lg={11.1} xs={9.1} sx={{justifyContent:'space-between'}}>
							  <Grid item lg={5.8} xs={12} sx={{marginBottom:'20px'}}>
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
                  backgroundColor: '#B0E6F0',fontFamily:'Space Grotesk'
                }
              }}
          />
        </Grid>
        <Grid item lg={5.8} xs={12} sx={{marginBottom:'20px'}}>
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
 
        backgroundColor: '#B0E6F0',fontFamily:'Space Grotesk'
      }
    }}
  />
</Grid>


        <Grid item lg={12} xs={12} sx={{marginBottom:'20px'}}>
          <TextField
									  fullWidth
									  placeholder='subject'
			name="phone"
			type="text"
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
               
                  backgroundColor: '#B0E6F0'
                }
              }}
          />
        </Grid>
        <Grid item lg={12} xs={12} sx={{marginBottom:'20px'}}>
          <TextField
            fullWidth
            placeholder="Message"
            name="message"
            multiline
            rows={4}
			value={formData.message}
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
                 
                  backgroundColor: '#B0E6F0'
                }
              }}
          />
        </Grid>
       
								  </Grid>
</Grid>
<Grid item lg={12} xs={12} sx={{marginBottom:'100px',justifyContent:'center',display:'flex',alignItems:'center',marginLeft:'80px'}}>
  <Button  onClick={handleSubmit}  style={{ backgroundColor: '#053F5C', color: 'white',fontSize: '16px',
                  fontWeight: '400',textTransform:'none' ,paddinig:'16px 36px',borderRadius:'12px',fontFamily:'Space Grotesk',width:mobile?'210px':'250px'}}>
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

export default Landingpage