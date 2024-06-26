import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Thanky from './Thanky';
import { jwtDecode } from 'jwt-decode';
import { Api_url } from './helper';
import Header from './Header';
import { Star } from './Star'
import {Grid} from '@mui/material'
import {Footer} from './Footer';
import { Typography,Button } from '@mui/material';
import '@fontsource/alegreya';
export const Authorlanding = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

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
  useEffect(() => {
	  const fetchDocuments = async () => {
		const token = localStorage.getItem('token');
   
      const userId = jwtDecode(token);
      console.log(userId,'userid');
      const ab = userId._id; //check in console.log object open krke dekehnege then wahan id ayegi
    console.log(ab)
    
      try {
        const response = await axios.get(`${Api_url}/sign/documents1/${ab}`);
		  setDocuments(response.data);
		  console.log(response.data)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching documents:', error);
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (documents.length === 0) {
    return <Thanky />;
	}
	const handleReview = (review) => {
		window.location.href = `/authorbookreview?bookid=${review}`;
	 }

  return (
    <div>
		  <Header />
		  <Grid container lg={12} sx={{background:'#EFEFEF'}}>
		  <Grid container lg={10} sx={{margin:'auto'}}>
          <Grid item lg={12}>
            <Typography sx={{fontSize:'56px',fontWeight:'700',color:'#005B9D',fontFamily:'Space Grotesk',marginTop:'76px'}}>Welcome {user.Name}!</Typography>
          </Grid> 
          <Grid item lg={12}>
            <Typography sx={{fontSize:'40px',fontWeight:'700',color:'#292611',fontFamily:'Space Grotesk',marginTop:'64px',marginBottom:'42px'}}>Your Uploads</Typography>
          </Grid> 
			  </Grid>
		
      <Grid container lg={10} sx={{margin:'auto'}}>
        {documents.map((document) => (
			<Grid container lg={10} key={document._id} sx={{ background: '#FFF',padding:'18px',marginTop:"20px",marginBottom:'20px',borderRadius:'20px' }}>
				<Grid container lg={4}>
					<img src={document.coverImagePath} style={{width:'215px',height:'290px'}} />
				</Grid>
				<Grid container lg={8}>
					<span><Star />{document.averageRating}</span>
					<Grid item lg={12}>
					<Typography style={{color:'#053F5C',fontSize:'26px',fontWeight:'700',fontFamily:'Space Grotesk'}}>{document.name}</Typography>
					</Grid>
					<Grid item lg={12}>
					<Typography style={{color:'#1B1D1C',fontSize:'16px',fontWeight:'700',lineHeight:"25px",fontFamily:'Space Grotesk'}}>{document.Aboutb}</Typography>
					</Grid>
					<Grid item lg={6}>
						
					<Typography style={{color:'#1A5E81',fontSize:'20px',fontWeight:'500',lineHeight:"25px",fontFamily:'Space Grotesk'}}>Remaining Reviews: <span style={{color:'#053F5C',fontSize:'20px',fontWeight:'700',lineHeight:"25px",fontFamily:'Space Grotesk'}}>{document.bookReviewCount}</span></Typography>
						</Grid>
				
           
					<Grid item lg={6} style={{justifyContent:'end',display:'flex'}}>
					<Button variant='contained' style={{color:'#FFF',display: 'inline-flex',
height: '42px',
padding: '14px 30px',
justifyContent: 'center',
alignItems: 'center',
gap: '10px',borderRadius: '6px',background:'#053F5C',fontSize:"18px",fontWeight:700,lineHeight:'32px',fontFamily:'Space Grotesk',
flexShrink: 0}} onClick={(e)=>handleReview(document._id)}>Reviews</Button>
						</Grid>
					
					</Grid>
          
            {/* Render other document fields as needed */}
          </Grid>
		))}
				  </Grid>
			 
			  </Grid>
		  <Footer/>
    </div>
  );
};
