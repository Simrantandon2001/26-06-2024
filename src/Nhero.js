import React from 'react'
import { Grid,Typography,Button } from '@mui/material'
import Image from 'mui-image'
import Im from './Images/HeroBook.json'
import Im1 from './Images/Pen.json'
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom'
import {useMediaQuery} from '@mui/material'
import Her from './Images/Her.png'
import '@fontsource/alegreya'
const Nhero = () => {
    const mobile = useMediaQuery('(max-width:600px)');
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: Im,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      },
    };
    const defaultOptions1 = {
		loop: true,
		autoplay: true,
		animationData: Im1,
		rendererSettings: {
		  preserveAspectRatio: "xMidYMid slice"
		}
    
	};
  
  return (
    <>
  <Grid container lg={12} sx={{ backgroundImage: `url(${Her})`,backgroundRepeat:'no-repeat', borderRadius: '20px',marginTop:'40px',}}>
<Grid container lg={10} sx={{margin:'auto'}}>
<Grid container lg={12} >
        <Grid container lg={7.5} sx={{alignItems:'center'}} >
          <Grid item lg={2}>
            <Typography sx={{fontSize:'24px',fontWeight:'500',lineHeight:'32px',color:'#F27F0C',fontFamily:'Alegreya'}}>reviewmybooks</Typography>
          </Grid>
          <Grid item lg={10}>
          <Lottie height={100} width={100} options={defaultOptions1} style={{borderRadius:'280px'}}/>
          </Grid>
<Grid item lg={12}>
    <Typography sx={{fontSize:'64px',fontWeight:'600',lineHeight:'normal',color:'#053F5C',fontFamily:'Alegreya'}}>Free reads, Paid Critiques-Double the Perks</Typography>


    <Typography sx={{fontSize:'24px',fontWeight:'400',lineHeight:'32px',color:'#053F5C',marginTop:'20px',fontFamily:'Alegreya'}}>Building a community for authors, readers and book reviewers to bring remarkable books to the limelight.</Typography>
    </Grid>
    <Grid container lg={9.5} xs={12}  spacing={2} sx={{display:'flex',marginTop:'30px'}}>
      <Grid item lg={3} xs={12} style={{justifyContent:mobile?"center":'',display:'flex'}}>
        <Link to='/Ausign'>
      <Button 
            sx={{
                fontSize:'18px',
                fontWeight:'700',
                lineHeight:'32px',
                backgroundColor:'#053F5C',
                borderRadius:'6px',
                padding:'14px 30px',
                width:'100%',
									  color: '#fff',
									  fontFamily:'alegreya',
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
      <Grid item lg={3} xs={12}style={{justifyContent:mobile?"center":'',display:'flex'}}>
        <Link to='/sign'>
      <Button 
           sx={{
            fontSize:'18px',
            fontWeight:'700',
            lineHeight:'32px',
            backgroundColor:'#053F5C',
            borderRadius:'6px',
            padding:'14px 30px',
            width:'100%',
                                  color: '#fff',
                                  fontFamily:'alegreya',
            textTransform: 'capitalize',
            height:'42px',
            '&:hover': {
                backgroundColor:'#053F5C',
                color:'#fff',
            },
            marginRight: '10px' // Add margin between buttons
        }}
        >
           Reviewer
        </Button>
        </Link>
      </Grid>
    </Grid>


        </Grid>
            <Grid container lg={4}>
            <Lottie height={399} width={399} options={defaultOptions} style={{borderRadius:'280px'}}/>
            </Grid>
         
            </Grid>
            </Grid>



</Grid>
  
    </>
  )
}

export default Nhero