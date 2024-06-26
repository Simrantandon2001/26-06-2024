import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Grid,Typography,Button} from '@mui/material'
import Header from './Header';
import { Footer } from './Footer';
import { Api_url } from './helper';
import {useMediaQuery} from '@mui/material';
function BookList() {
    const [books, setBooks] = useState([]);
	const mobile = useMediaQuery('(max-width:600px)');
    useEffect(() => {
        getAllBooks();
    }, []);

    async function getAllBooks() {
        try {
            const response = await axios.get(`${Api_url}/sign/getallbooks`);
            setBooks(response.data);
        } catch (error) {
            console.error('Error:', error);
            alert('Error fetching books. Please try again later.');
        }
	}
	const handleReview = (review) => {
		window.location.href = `/bookreview?bookid=${review}`;
	 }

	 return (
        <>
        <Header/>
        <Grid container lg={12} sx={{background:'#F7AD19'}}>
        <Grid container lg={10} xs={11} sx={{margin:'auto',justifyContent:mobile?'center':""}}>
            <Grid item lg={12}>
            <Typography sx={{color:'#053F5C',fontSize: mobile?"26px":'56px',fontWeight:'700',fontFamily:'Space Grotesk',textAlign:'center',marginTop:'60px'}}>Book for Reviews</Typography>
            </Grid> 
            <Grid container lg={12} xs={12}  sx={{marginTop:'60px',marginBottom:'60px',justifyContent:mobile?'center':""}}>
                {books.map(book => (
                    <Grid container lg={12} xs={10} key={book._id} sx={{marginBottom:'40px',background:'#FFF',borderRadius:'20px',padding:mobile?"16px 16px 16px 16px":'26px 64px 26px 64px'}}>
                        <Grid item lg={4.5}>
							<Grid item lg={10} sx={{borderRadius:'10px',justifyContent:'center',display:'flex'}}>
								
                              <img src={book.coverImagePath}  style={{width:'239px',height:'288px'}}/>
                            </Grid> 
							</Grid>
                              <Grid item lg={7}>
                       <Typography sx={{color:'#1B1D1C',fontSize:mobile?"22px":'40px',fontWeight:'700',fontFamily:'Space Grotesk'}}>{book.title}</Typography> 
                      
                    <Typography sx={{color:'#1B1D1C',fontSize:'18px',fontWeight:'700',marginTop:'26px',fontFamily:'Space Grotesk'}}>Overview</Typography>
                    <Typography sx={{ color: '#1B1D1C', fontSize: '16px', fontWeight: '400', lineHeight: '24px', fontFamily: 'Space Grotesk', marginTop: 'px' }}>
  {/* {book.description.length > 200 ? book.description.substring(0, 250) + '...' : book.description}
   */}
												{book && book.Aboutb
    ? (book.Aboutb.length > 200 ? `${book.Aboutb.substring(0, 170)}...` : book.Aboutb)
    : ''}
</Typography>

                       <Button onClick={(e)=>handleReview(book._id)} sx={{backgroundColor:'#053F5C',color:'#fff',textTransform:'none',fontSize:mobile?"14px":'16px',fontWeight:'400',padding:mobile?"10px":'16px 36px',borderRadius:'12px',width:mobile?"128px":'153px',marginTop:'22px',height:'55px',fontFamily:'Space Grotesk','&:hover':{backgroundColor:'#053F5C'}}}>See More</Button>
                       </Grid>
                        </Grid>
                    
                ))}
            </Grid>
            </Grid>
            </Grid>
            <Footer/>
        </>
    );
}

export default BookList;
