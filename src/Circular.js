import React, { useRef, useEffect } from 'react';
import './OrbitingIcons.css'; // Import your CSS file for styling
import Image from 'mui-image'
import Abo from './Images/circu.png'
import Contactus from './Images/CONTACTUS.png'
import Logo from './Images/Logo.png';
const CircularPath = () => {
  const centralObjectRef = useRef(null);

  useEffect(() => {
	const icons = Array.from(document.querySelectorAll('.orbit-icon'));
	const centralObject = centralObjectRef.current;
	const centralWidth = centralObject.offsetWidth;
	const centralHeight = centralObject.offsetHeight;
	const radius = Math.min(centralWidth, centralHeight) * 0.48; // Adjust the factor as needed
	const centerX = centralWidth / 2;
	const centerY = centralHeight / 2;
	const iconCount = icons.length;
  
	let angle = 0;
	const angleIncrement = (2 * Math.PI) / iconCount;
  
	const intervalId = setInterval(() => {
	  icons.forEach((icon, index) => {
		const x = centerX + radius * Math.cos(angle + index * angleIncrement);
		const y = centerY + radius * Math.sin(angle + index * angleIncrement);
		icon.style.left = `${x}px`;
		icon.style.top = `${y}px`;
	  });
  
	  angle += 0.05; // Adjust the speed of rotation
	}, 50); // Adjust the interval time
  
	return () => clearInterval(intervalId);
  }, []);
  

  return (
    <div className="orbit-container" ref={centralObjectRef} style={{background:'yellow',borderRadius:'60%', width: '450px', height: '450px'}}>
      <div className="central-object" style={{background:'red'}}>
        <img src={Logo} style={{width:'100%',height:'100%'}}/>
      </div>
      
      {/* Render orbiting icons */}
      <div className="orbit-icon"> <img src={Logo} style={{width:'100%',height:'100%'}}/></div>
      <div className="orbit-icon"> <img src={Logo} style={{width:'100%',height:'100%'}}/></div>
      <div className="orbit-icon"> <img src={Logo} style={{width:'100%',height:'100%'}}/></div>
      <div className="orbit-icon"> <img src={Logo} style={{width:'100%',height:'100%'}}/></div>
      <div className="orbit-icon"> <img src={Logo} style={{width:'100%',height:'100%'}}/></div> {/* Corrected the duplicated icon number */}
      {/* Add more orbit icons as needed */}
    </div>
  );
};

export default CircularPath;
