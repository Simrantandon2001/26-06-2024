import React, { useState } from 'react';
import Header from './Header';
import { Typography, Grid, TextField, Button } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import axios from 'axios'; // Import Axios library for making HTTP requests
import { jwtDecode } from 'jwt-decode';
import bgpay from './Images/pay-ss.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Api_url } from './helper';
import Rating from '@mui/material/Rating';
import { Footer } from './Footer';
const Paymentform = () => {
  const mobile = useMediaQuery('(max-width:600px)');
  const [user, setUser] = useState({});
  const [pdfFile, setPdfFile] = useState(null);
  const [screenshotFile, setScreenshotFile] = useState(null);

  const [bookReview, setBookReview] = useState('');
  const queryParams = new URLSearchParams(window.location.search);
	const storyId = queryParams.get('bookid');
	const bookname = queryParams.get('bookname');
	
	console.log(bookname,'yes',storyId,'book')
  const handlePdfUpload = (e) => {
    setPdfFile(e.target.files[0]);
  };
  const token = localStorage.getItem('token');
  const userId = jwtDecode(token);
  console.log(userId)
	const userId1 = userId._id
	const useremail = userId.Email;
	const userName = userId.Name;
	console.log(userId1,'userid1',useremail,userName)
	const [value, setValue] = React.useState(2);
  const handleScreenshotUpload = (e) => {
    setScreenshotFile(e.target.files[0]);
  };
  const handleBookReviewChange = (e) => {
    setBookReview(e.target.value);
  };
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('pdfFile', pdfFile);
    formData.append('screenshotFile', screenshotFile);
    formData.append('bookReview', bookReview);
    formData.append('bookid',storyId)
    formData.append('userid',userId1)
	  formData.append('rating', value)
	  formData.append('bookname', bookname)
	  formData.append('userName', userName)
	  formData.append('useremail',useremail)
    axios.post(`${Api_url}/sign/upload3`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      console.log(response.data,'risy');
    })
    .catch(error => {
		console.log('Error:', error); 
		console.log(error.response.data.error)
		toast.error(error.response.data.error)
    });
  };

  return (
    <>
		  <Header />
		  <ToastContainer />
      <Grid container lg={12} xs={12} style={{background:`url(${bgpay})`,backgroundSize:'100% 100%',backgroundRepeat:'no-repeat'}}>
        <Grid container lg={7.5} xs={10} sx={{ margin: 'auto', justifyContent: 'center', marginBottom: '100px' }}>

          <Grid item lg={12}>
            <Typography sx={{ textAlign: 'center', fontSize: mobile ? '26px' :'56px', fontFamily: 'Space Grotesk', color: '#005B9D', fontWeight: mobile ? '700' :'400', marginTop: '40px' }}>Payment Form</Typography>
          </Grid>
          <Grid item lg={12}>
            <Typography sx={{ textAlign: 'center', fontSize: mobile ? '14px' :'22px', fontFamily: 'Space Grotesk', color: '#1B1D1C', fontWeight: '400' }}>Get your payment by filling up this form</Typography>
          </Grid>
		 
          <Grid container lg={7.6} xs={12} sx={{ marginTop: '60px', marginBottom: 'auto', backgroundColor: '#e2f2ff', borderRadius: '24px', justifyContent: "center" }}>
          <Grid item lg={6.3} xs={11}  sx={{ marginBottom: '24px' ,marginTop:'56px', marginLeft: mobile ? '16px' : '0px',marginRight: mobile ? '16px' : '0px'}}>
            <Typography sx={{fontSize:'16px',fontWeight:'500',fontFamily:'Space Grotesk'}}>Book Review</Typography>
              <TextField
                placeholder="Book Review"
                multiline
                rows={8}
                fullWidth
                variant="outlined"
                value={bookReview}
                onChange={handleBookReviewChange}
                InputProps={{
                  size: 'small',
                  style: { marginTop: '8px', borderRadius: '6px', backgroundColor: '#Fff',  }
                }}
                InputLabelProps={{
                  style: {
                    color: '#787373',
                    fontSize: '14px', fontWeight: '400', fontFamily: 'Space Grotesk',
                  }
                }}
              />
					  </Grid>
					  <Grid item lg={6.3} xs={11} >
					  <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /> 
					  </Grid>
            <Grid item lg={6.3} xs={12} sx={{ marginRight: mobile ? '16px' : '2px', marginLeft: mobile ? '16px' : '0px', marginTop: '0px' }}>
              <input type="file" accept="application/pdf" id="pdf-upload" onChange={handlePdfUpload} style={{ display: 'none' }} />
              <label htmlFor="pdf-upload">
                <Button
                  style={{
                    width: '100%',
                    border: '2px solid #005B9D',
                    borderRadius: '6px',
                    color: '#005B9D',
                    textTransform: 'none',
                    fontSize: mobile ? '14px' :'18px',
                    fontWeight: '700',
                    fontFamily: 'Space Grotesk',
                    lineHeight: '32px',
                  }}
                  component="span"
                >
                  Upload Invoice in Pdf format
                </Button>
              </label>
            </Grid>

            <Grid item lg={6.3} xs={12} sx={{ marginRight: mobile ? '16px' : '0px', marginLeft: mobile ? '16px' : '0px', marginTop: '36px', justifyContent: "center" }}>
              <input type="file" accept="image/*" id="screenshot-upload" onChange={handleScreenshotUpload} style={{ display: 'none' }} />
              <label htmlFor="screenshot-upload">
                <Button
                  style={{
                    width: '100%',
                    border: '2px solid #005B9D',
                    borderRadius: '6px',
                    color: '#005B9D',
                    textTransform: 'none',
                    fontSize: mobile ? '14px' :'18px',
                    fontWeight: '700',
                    fontFamily: 'Space Grotesk',
                    lineHeight: '32px'
                  }}
                  component="span"
                >
                  Upload Screenshot of Review
                </Button>
              </label>
            </Grid>

            <Grid item lg={6.1} sx={{ display: 'flex', justifyContent: 'center', marginBottom: '56px', marginTop: '32px' }}>
              <Button onClick={handleSubmit} sx={{
                padding: '14px 30px', borderRadius: '6px', fontSize: '18px', marginTop: '10px', height: '42px', fontWeight: '700', fontFamily: 'Space Grotesk', backgroundColor: '#005B9D', color: '#fff', lineHeight: '32px', textTransform: 'none', width: mobile?"240px":'652px', '&:hover': {
                  backgroundColor: '#005B9D',
                }
              }}>
                Submit Form
              </Button>
            </Grid>

          </Grid>

        </Grid>
      </Grid>
<Footer/>
    </>
  )
}

export default Paymentform;