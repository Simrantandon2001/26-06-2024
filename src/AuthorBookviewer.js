import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Typography,Button, Rating } from '@mui/material';
import Header from './Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CloseIcon from '@mui/icons-material/Close';
import { Api_url } from './helper';
import HomeSlider from './HomeSlider';
import HomeSlider2 from './Slider2';
import { jwtDecode } from 'jwt-decode';
import { Footer } from './Footer';
import { Dialog, DialogTitle, DialogContent,  InputAdornment, IconButton } from '@mui/material';

const AuthorBookviewer = () => {
	const dialogStyle = {
		textAlign: 'center',
		fontFamily: 'Space Grotesk',
		fontSize: '24px',
		fontStyle: 'normal',
		fontWeight: 700,
		lineHeight: 'normal',
		color: 'var(--Dark, #292611)'
	  };
	  
	  const buttonStyle = {
		display: 'inline-flex',
		padding: '14px 30px',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '10px',
		borderRadius: '12px',
		background: 'var(--Brand-Dark-Blue, #053F5C)',
		  color: 'white',
		  fontSize: '18px',
		  fontWeight: '700',
	};
	const closeButtonStyle = {
		position: 'absolute',
		right: '8px',
		top: '8px'
	  };
    const queryParams = new URLSearchParams(window.location.search);
	const storyId = queryParams.get('bookid');
	const [open1, setOpen1] = useState(false);

  const handleOpen = () => {
    setOpen1(true);
  };

  const handleClose = () => {
    setOpen1(false);
  };
	const token = localStorage.getItem('token')
	const [bookreviews,setBookreviews]=useState([])
	const userId = jwtDecode(token);
	const [Error,setError]=useState(null)
	const userId1=userId._id
      console.log(userId1,'userid');
    const [books, setBooks] = useState([]);

    useEffect(() => {
		getAllBooks();
		getAllReviews();
    }, []);

    async function getAllBooks() {
        try {
            const response = await axios.get(`${Api_url}/sign/documents/${storyId}`);
			setBooks(response.data); // Assuming response.data is an array of books
			console.log(response.data,'nppl')
        } catch (error) {
            console.error('Error:', error);
            alert('Error fetching books. Please try again later.');
        }
	}
	async function getAllReviews() {
        try {
            const response = await axios.get(`${Api_url}/sign/docu/${storyId}`);
			setBookreviews(response.data); // Assuming response.data is an array of books
			console.log(response.data,'bookreviews')
        } catch (error) {
            console.error('Error:', error);
            alert('Error fetching books. Please try again later.');
        }
    }
	
	const handleClick = async () => {
		console.log(storyId)
		try {
		  const response = await axios.post(`${Api_url}/sign/users/${userId1}/books`, { bookId: storyId });
		  console.log(response.data, 'bunow');
		  if (response.data.error) {
			toast.error(response.data.error);
		  } else {
			toast.success('Book added successfully!');
			// Redirect to the Amazon link stored in books.Amazon
			window.open(books.Amazon, '_blank');
		  }
		  setOpen1(false);
		} catch (error) {
		  console.log('Error:', error.response.data.error);
		  toast.error(error.response.data.error);
		}
	  };
	const handleClick1 = () => {
		setOpen1(true);
	}
	
    return (
		<div>
			<Header />
			<ToastContainer />
            <Grid container lg={12} xs={12} style={{background:'#F8F5F0'}}>
				<Grid container lg={10} xs={12} sx={{ margin:'auto',justifyContent:'space-between' }}>
				<Grid container lg={5}>
					<Grid item lg={12} xs={12} className="book-container" style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'94px'}}>
                        <img
                            src={books.coverImagePath}
                            alt={books.title}
                            style={{
                                width:'310px',height:'385px',
                                objectFit: 'cover',
                                borderRadius: '12px'
                            }}
							/>
						</Grid>

						<Grid container lg={12} sx={{ justifyContent: 'center', display: 'flex' }}>
							
							<Grid item lg={12} style={{justifyContent:'center',display:'flex'}}>
							<Typography style={{ marginTop: '10px', fontFamily: 'Space Grotesk',color:'#1A5E81',fontSize:'20px',fontWeight:500 }}>Remaining Reviews:{books.bookReviewCount}</Typography>
						
				
							</Grid>
						
								
								
        
      
						</Grid>
						
					</Grid>
					<Grid container lg={5}>
						<Grid item lg={12}>
						<Typography variant="h6" sx={{color:'#005B9D',fontSize:'56px',fontWeight:'700',fontFamily:'Space Grotesk',textAlign:'start',marginTop:'60px'}}>
                            {books.title}
                        </Typography>
						</Grid>
						<Grid item lg={12}>
						<Typography variant="h6" style={{ marginTop: '10px', fontWeight: 'bold',fontFamily:'Space Grotesk' }}>
                           About the Book
                        </Typography>	
						</Grid>
					
                        <Typography variant="body2" color="textSecondary" sx={{fontFamily:'Space Grotesk'}}>
						{books.Aboutb}		
                        </Typography>
                        {/* <Typography variant="body2" color="primary" style={{ marginTop: '10px',fontFamily:'Space Grotesk' }}>
                            Language: {books.language}
						</Typography> */}
						<Grid item lg={12}>
						<Typography variant="h6" style={{ marginTop: '10px', fontWeight: 'bold',fontFamily:'Space Grotesk' }}>
                           About the Author
							</Typography>	
							<Typography variant="body2" color="textSecondary" sx={{fontFamily:'Space Grotesk'}}>		          
							{books.Aboutauthor}</Typography>
						</Grid>
						<Grid item lg={10} sx={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
								  <Grid item lg={3}>
										  <img src={books.pdfPath} style={{ width: "100px", height: "100px",borderRadius:'50%' }} />
								  </Grid>
									  <Grid item lg={8} sx={{ alignItems: 'center', display: 'flex' }}>
										  <Grid item lg={12}>
										  <Typography   style={{ marginTop: '10px',fontFamily:'Space Grotesk' }}>{books.name}<br/>Author</Typography> 
										  </Grid>
										
										  
										 
									  </Grid>
									  </Grid>
					</Grid>
					
					<Grid item lg={12} sx={{marginTop:'100px'}}>
				<Typography style={{fontSize:"32px",fontWeight:'700',fontFamily:'Space Grotesk'}}> View All {bookreviews.length} Reviews </Typography>	
					</Grid>
					<Grid item lg={12}>
					{bookreviews.map((review, index) => (
  // Check if review exists and if bookreview is not empty
  review && review.bookreview && review.bookreview.trim() !== '' && (
    <Grid container lg={12} key={index} style={{ background: 'white', height: "222px", borderRadius: '20px', border: '1px solid #000', marginBottom: '30px', justifyContent: 'center', alignItems:'center'}}>
      <Grid item lg={11.5}>
								{books.ratings.map((ratingObj, index) => (
        <div key={index}>
         
		 {ratingObj.user === review.userId && (
      <Rating value={ratingObj.rating} readOnly />
    )}
        </div>
								))}
									</Grid>
								<Grid item lg={11.5}>
        <Typography style={{fontSize:"16px",fontWeight:'400',fontFamily:'Space Grotesk',lineHeight:'24.96px'}}>{review.bookreview}</Typography>
								</Grid>
								
      {/* Add additional fields as needed */}
    </Grid>
  )
					))}
						{/* {books.ratings.map((ratingObj, index) => (
        <div key={index}>
          <span>User: {ratingObj.user}</span>
          <Rating value={ratingObj.rating} readOnly />
        </div>
      ))} */}

					</Grid>
				</Grid>
				
			
					{/* <Grid item lg={12}>
						<Typography variant="h6" sx={{color:'#005B9D',fontSize:'56px',fontWeight:'700',fontFamily:'Space Grotesk',textAlign:'center',marginTop:'60px'}}>
                            Explore More 
                        </Typography>
				</Grid> */}
			
			
			</Grid>
			<Footer/>
        </div>
    );
};

export default AuthorBookviewer;
