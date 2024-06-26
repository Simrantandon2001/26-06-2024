import React, { useState,useEffect} from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Grid, Typography,Button } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import axios from 'axios'
import { Api_url } from './helper';
import Sl from './Images/Sl.png'
import '@fontsource/alegreya'
import StarIcon from '@mui/icons-material/Star';
// Sample images for testing
const LatestSlider = () => {
	
	const [books, setBooks] = useState([]);

    useEffect(() => {
        getAllBooks();
    }, []);

    async function getAllBooks() {
        try {
            const response = await axios.get(`${Api_url}/sign/getallbooks1`);
			setBooks(response.data);
			console.log(response.data)
        } catch (error) {
            console.error('Error:', error);
            alert('Error fetching books. Please try again later.');
        }
    }

  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width:600px)');
  
const imagesToShow = isMobile ? 1 : 3;
  const handleIndexChange = (index) => {
    setCurrentIndex(index);
  };
  const numSets = Math.ceil(books.length / imagesToShow);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? numSets- 1 : prevIndex - 1));
  };
  
	const handleNext = () => {
		
		console.log(numSets)
    setCurrentIndex((prevIndex) => (prevIndex === numSets- 1 ? 0 : prevIndex + 1));
	};
	const handleReview = (review) => {
		window.location.href = `/bookreview?bookid=${review}`;
	 }

	 return (
		<>
		<Grid container lg={12} xs={12} sx={{margin:'auto'}}>
		
		
				  <Grid container lg={12} xs={12} sx={{ margin: isMobile ? "" : 'auto', alignItems: 'center', justifyContent: 'center' }}>
					  <Grid container lg={12} xs={10} sx={{alignItems: 'center', justifyContent: 'center',background:isMobile?'#fff':'',borderRadius:'40px 40px 40px 40px' }}>
				  <Grid container lg={0.2} xs={0.2} sx={{marginRight:"20px"}}>
				  <NavigateBeforeIcon onClick={handlePrev} style={{width:isMobile?'26px':'56px',height:isMobile?'26px':'56px'}}  />
		   
			</Grid>
				  <Grid container lg={10.7} xs={9} sx={{margin:isMobile?"":""}}>
				  <SwipeableViews index={currentIndex} onChangeIndex={handleIndexChange} enableMouseEvents>
			{Array.from({ length: numSets }).map((_, index) => (
				
					<Grid container lg={11.5} xs={12} sx={{display:'flex',margin:'auto',marginRight:'0px'}}>
				{books
				  .slice(index * imagesToShow, (index + 1) * imagesToShow)
						.map((image, innerIndex) => (
					
					<Grid container lg={isMobile ? 12 : 4} xs={12} key={innerIndex} className="image-container"  sx={{ marginBottom: '26px' }}>
								<Grid item lg={11} xs={12} sx={{background: '#fff',borderRadius:'40px 40px 0px 0px',justifyContent:'center',display:'flex'}}>
							
								<img
						src={image.coverImagePath}
						alt={image.coverImagePath}
						onClick={(e)=>handleReview(image._id)}
					   style={{width: '209px',borderRadius: '12px',
						height: '270px',marginTop:'24px'}}
									/>
								</Grid>
				  <Grid container lg={11} sx={{marginTop:'-15px'}}>
					<Grid container lg={12} sx={{backgroundColor:'#fff',justifyContent:'center'}}>
	<Grid item lg={7.5} >
	  <span style={{color: '#206A8F',fontFamily: "Space Grotesk",fontSize: '16px',fontWeight: 700,
	lineHeight: 'normal',alignItems:'center',display:'flex',marginTop:'12px',
	letterSpacing: '0.48px'}}>
	<StarIcon sx={{ color: '#FFD700', marginRight: '5px' }} />{image.averageRating}</span>
	  </Grid>
					
					</Grid>
				  <Grid container lg={12}  sx={{justifyContent:"center",backgroundColor:'#fff',borderRadius:' 0px 0px 40px 40px'}}>
	
													  
								<Typography sx={{color:'#053F5C',fontSize:'20px',fontWeight:'700',fontFamily:'Space Grotesk',display:'flex',justifyContent:'center',textAlign:'center',padding:isMobile?"0px":' 27px 31px 35px',letterSpacing:'0.3px'}}>{image.title
	}</Typography>
	</Grid>
	
									</Grid>
				  
								
				   
					</Grid>
						))}
						 </Grid>
			 
			))}
				  </SwipeableViews>
				  </Grid>	
				  <Grid container lg={0.2} xs={0.2}>
				  <NavigateNextIcon onClick={handleNext} style={{width:isMobile?'26px':'56px',height:isMobile?'26px':'56px'}}  />
		
						  </Grid>
						  </Grid>
		<Grid item lg={12} xs={12} sx={{textAlign:'center'}}>
			  <Button sx={{textDecoration: 'underline', textTransform: 'capitalize',fontSize:'22px',fontWeight:'500px',lineHeight:'30px',fontFamily:'Space Grotesk',marginBottom:'56px',color:'#EFEFEF'}}>See more</Button>
			</Grid>
			 </Grid>
		   
			 </Grid>
		</>
	  );
};

export default LatestSlider;