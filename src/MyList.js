import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Typography,Grid,Button,useMediaQuery} from '@mui/material';
import { jwtDecode } from 'jwt-decode';
import Header from './Header';
import { Api_url } from './helper';

const MyList = () => {
	const [books, setBooks] = useState([]);
 
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token')
  const userId = jwtDecode(token);
  const userId1=userId._id
  const mobile = useMediaQuery('(max-width:600px)');
  useEffect(() => {
    const fetchUserBooks = async () => {
      try {
        const response = await axios.get(`${Api_url}/sign/users/${userId1}/books`);
        setBooks(response.data);
      console.log(response.data)
      } catch (error) {
        setError(error.message || 'Internal server error');
     
      }
    };

    fetchUserBooks();
  }, []);
	const handlePayment = (hello,bookname) => {
		console.log('yes',hello)
    window.location.href = `/payment?bookname=${bookname}&bookid=${hello}`;
	}

 

  return (
	  <div>
      <Header />
      <Grid container lg={12} xs={12} style={{ background: '#F7AD19' }}>
        <Grid item lg={12} xs={11} sx={{marginTop:mobile?'20px':""}}>
          <Typography sx={{ fontSize: mobile?"26px":'56px', fontWeight: '700', color: '#005B9D', fontFamily: 'Space Grotesk', textAlign: 'center' }}>My Lists</Typography>
        </Grid>

        {books.length > 0 ? (
          <Grid container lg={12} justifyContent="center">
            {books.map((item, index) => (
              <Grid item lg={8} xs={9} key={index} style={{ borderRadius: '24px', background: '#EFEFEF', margin: '24px auto', alignItems: 'center', padding: '20px' }}>
                <Grid container spacing={2}>
				<Grid item lg={2}>
  {item.book && item.book.coverImagePath &&
    <img src={item.book.coverImagePath} alt={item.book.title} style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '12px' }} />
  }
</Grid>

                  <Grid item lg={10}>
				  {item && item.book && 

      <Typography variant="h5" style={{ textAlign: 'start', color: '#1B1D1C', fontFamily: 'Space Grotesk' }}>
        {item.book.title}
      </Typography>
     
  }
             {item && item.book && item.book.Aboutb && 
    <Typography variant="body1" style={{ textAlign: 'start', fontFamily: 'Space Grotesk' }}>
      {item.book.Aboutb}
    </Typography>
							}	{item.status === 'pending' ?
								<Grid item lg={12} xs={12} sx={{justifyContent:mobile?"center":'end',display:'flex'}}>
								<Button
  onClick={() => handlePayment(item.book._id, item.book.title)}
  sx={{ marginTop: '10px',textDecoration:'none',textTransform:'none',background:'#053F5C', fontFamily: 'Space Grotesk',fontSize:"14px",fontWeight:'700',width:mobile?'100%':"auto" }}
  variant="contained"
  color="primary"
>
								Get Payment
									</Button>
									</Grid>: (
    <Typography style={{color:'#053F5C',fontSize:"14px",fontWeight:700,textAlign:mobile?'center':'end'}}>
      {item.status === 'waiting' && 'Waiting for Approval'}
      {item.status === 'accepted' && 'Approved'}
      {item.status === 'rejected' && 'Rejected'}
    </Typography>
  )}

                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid item lg={12} style={{ textAlign: 'center',minHeight:'100vh' }}>
            <Typography variant="body1">No books found for this user</Typography>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default MyList