import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Grid, Typography,Button } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import '@fontsource/alegreya'
// Sample images for testing
import S1 from './Images/S1.png';
import S2 from './Images/S2.png';
import S3 from './Images/S3.png';
import S4 from './Images/S4.png';
import S5 from './Images/S5.png';
import S6 from './Images/S6.png';
import S7 from './Images/S7.png';
import S8 from './Images/S8.png';
import S9 from './Images/S9.png';
import S10 from './Images/S10.png';
import S11 from './Images/S11.png';
import S12 from './Images/S12.png';
import S13 from './Images/S13.png';
const Slider = () => {
	
	const data = [
		{ image: S1, name: 'Joy of Missing Out' },
		{ image: S2, name: 'The Celebrity CEO' },
		{ image: S3, name: 'Indra' },
		{ image: S4, name: 'Like a Summer Song' },
		{ image: S5, name: 'Midlife Mojo' },
		{ image: S6, name: 'You Belong With Me' },
		{ image: S7, name: 'The Shark and The Dolphins' },
    { image: S8, name: 'Ashoka’s Secret' },
    { image: S9, name: 'The Wandering Star' },
    { image: S10, name: 'Shakuni' },
    { image: S11, name: 'Wastra' },
    { image: S12, name: 'Kaliyuga' },
    { image: S13, name: 'Indian Emergency' },

		
		

		// Add more objects as needed...
	  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width:600px)');
  
const imagesToShow = isMobile ? 1 : 4;
  const handleIndexChange = (index) => {
    setCurrentIndex(index);
  };
  const numSets = Math.ceil(data.length / imagesToShow);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? numSets- 1 : prevIndex - 1));
  };
  
	const handleNext = () => {
		
		console.log(numSets)
    setCurrentIndex((prevIndex) => (prevIndex === numSets- 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
    <Grid container lg={12} sx={{backgroundColor:'#E2F2FF',marginTop:'80px'}}>
      <Grid item lg={12}>
       <Typography sx={{textAlign:'center',fontSize:'56px',fontWeight:'500',lineHeight:'84px',color:'#005B9D',marginBottom:'70px',marginTop:'70px',fontFamily:'Space Grotesk'}}>Discover Fresh Titles</Typography> 
      </Grid>
    
      <Grid container lg={11} xs={12} justifyContent="center" alignItems="center" sx={{margin:'auto',}}>
			  <Grid container lg={0.2} xs={0.2}>
			  <NavigateBeforeIcon onClick={handlePrev} style={{width:'56px',height:'56px'}}  />
       
		</Grid>
			  <Grid container lg={11.6} xs={10}>
			  <SwipeableViews index={currentIndex} onChangeIndex={handleIndexChange} enableMouseEvents>
		{Array.from({ length: numSets }).map((_, index) => (
			
				<Grid container lg={11.2} xs={12} sx={{display:'flex',margin:'auto',marginRight:'20px'}}>
            {data
              .slice(index * imagesToShow, (index + 1) * imagesToShow)
					.map((image, innerIndex) => (
				
                <Grid container lg={isMobile ? 12 : 3} xs={12} key={innerIndex} className="image-container" sx={{ marginBottom: '26px' }}>
							<Grid item lg={12}>
						
							<img
                    src={image.image}
                    alt={image.pdfName}
                   
                   
								/>
							</Grid><Grid item lg={12}>
							<Typography sx={{color:'#1B1D1C',fontSize:'20px',fontWeight:'700',fontFamily:'Space Grotesk'}}>{image.name}</Typography>
								</Grid>
						
							
               
				</Grid>
					))}
					 </Grid>
         
        ))}
			  </SwipeableViews>
			  </Grid>	
			  <Grid container lg={0.2} xs={0.2}>
			  <NavigateNextIcon onClick={handleNext} style={{width:'56px',height:'56px'}}  />
    
		</Grid>
         </Grid>
         <Grid item lg={12} sx={{textAlign:'center'}}>
          <Button sx={{textDecoration: 'underline', textTransform: 'capitalize',fontSize:'22px',fontWeight:'500px',lineHeight:'30px',fontFamily:'Space Grotesk',marginBottom:'56px',}}>See more</Button>
        </Grid>
         </Grid>
    </>
  );
};

export default Slider;
