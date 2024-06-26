import React, { useState, useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import './Tested.css';
import { Grid } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Qu from './Images/Qu.png'
import Testii from './Images/Testii.png'
import { useMediaQuery } from '@mui/material';
import { Left } from './left';
import { Right } from './Right';
import { Leftm } from './leftm';
import { Rightm } from './Rightm';
import naghma from './Images/naghma.jpg';
import archita from './Images/archita.jpg';
const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const mobile = useMediaQuery('(max-width:600px)');
  const slides = [
    {
      text: "I've been a bookworm since forever, and sharing my honest thoughts about what I read is my jam! Thanks to ReviewMyBook, the game has totally changed. No more chasing authors or begging publishers for freebies. Now, I can easily see what's up for grabs and pick what tickles my fancy. It's hassle-free heaven for book lovers like me!",
      image: naghma,
      author: "Naghma",
      
    },
    {
      text: " Reading is a serious hobby for me and I have loved books since forever. Being 100% honest with my thoughts about the book is what makes me feel empowered as a reader. Review My Book makes the process smooth and helps me keep a tab on what booklovers like me think about the newest read",
      image: archita,
      author: "Archita",
      
    },
    // Add more slide objects here as needed
  ];

  const showSlide = (index) => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelector('.dots');

    let newIndex;

    if (index >= slides.length) {
      newIndex = 0;
    } else if (index < 0) {
      newIndex = slides.length - 1;
    } else {
      newIndex = index;
    }

    slides.forEach((slide) => (slide.style.display = 'none'));
    dots.innerHTML = '';

    slides[newIndex].style.display = 'block';

    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      dot.addEventListener('click', () => showSlide(i));
      dots.appendChild(dot);
    }

    dots.children[newIndex].classList.add('active');
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    showSlide(currentSlide);
  }, [currentSlide]);

  return (
    <>
<Grid container lg={12} sx={{backgroundImage: `url(${Testii})`, backgroundSize:'100% 100%',backgroundRepeat:'no-repeat',marginTop:'-36px',zIndex:1}}>
    <Grid container lg={12} >
<Grid item lg={12} sx={{textAlign:'center'}}>
    <Typography style={{fontWeight:'700',color:'#fff',fontSize:'56px',marginBottom:'80px',marginTop:'96px',fontFamily:'Space Grotesk',lineHeight:'64px'}}> Testimonials</Typography>
</Grid>
    
      <div className="slider-container" style={{ backgroundImage: `url(${Qu})`,marginBottom:'96px'}}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div className="text">
              <p className='text-style'>{slide.text}</p>
            </div>
            <div className='aa'>
              <img src={slide.image} id='abc1' alt="Avatar" />
					<p className='slider-text-image' style={{ color: '#292611', fontFamily: 'Space Grotesk' }}>{slide.author} <br />
						{/* <span id='auth' style={{ color: '#292611' }}> <b>'{slide.book}'</b></span> */}
					</p>
					<Button style={{justifyContent:mobile?'end':''}} className="arrow left" onClick={() => prevSlide()} >{mobile ? <Leftm /> : <Left />}</Button>
					<Button style={{justifyContent:mobile?'start':''}} className="arrow right" onClick={() => nextSlide()}>{mobile ? <Rightm /> : <Right />}</Button>
            </div>
          </div>
        ))}
        <div className="dots"></div>
      </div>
      </Grid>
</Grid>
    </>
  );
};

export default Testimonial;