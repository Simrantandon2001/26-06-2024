import React, { useState } from 'react';
import Header from './Header';
import { Grid, Button, Typography } from '@mui/material';
import {Footer} from './Footer';
import '@fontsource/alegreya';
import Uploadd from './Images/Uploadd.png';
import { Api_url } from './helper';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useMediaQuery} from '@mui/material'

const Authorform = () => {
	const mobile = useMediaQuery('(max-width:600px)');
	const [publishername, setpublishername] = useState('');
	const navigate = useNavigate();
	const [title, setTitle] = useState('');
	const [Platform, setPlatform] = useState('');
	const [nreviews, setnreviews] = useState('');
	const [description, setDescription] = useState('');
	const [coverImage, setCoverImage] = useState(null);
	const [pdfFile, setPdfFile] = useState(null);
	const [loading, setLoading] = useState(false);
	  const [Amazon, setAmazon] = useState('');
	  const [Comments, setcomments] = useState('');
	  const [Aboutauthor, setAboutauthor] = useState('');
	const handleCoverImageUpload = (event) => {
	  const file = event.target.files[0];
	  setCoverImage(file);
	};
  
	const handlePdfUpload = (event) => {
	  const file = event.target.files[0];
	  console.log(file)
	  setPdfFile(file);
	};
  
	const handleSubmit1 = () => {
		setLoading(true);
		const data = {
			publishername: publishername,
			Platform: Platform,
			nreviews: nreviews,
			Amazon: Amazon,
			Comments: Comments
		  };
		const formData = new FormData();
		formData.append('publishername', publishername);
		formData.append('Platform', Platform);
		formData.append('nreviews', nreviews);
		formData.append('Amazon', Amazon);
		formData.append('Comments', Comments);
	  
		console.log(formData, publishername, Platform, nreviews, Amazon, Comments);
	  
		axios.post(`${Api_url}/sign/uploada`, data) // Adjust the URL path here
		  .then((response) => {
			setLoading(false);
			  console.log('Data saved successfully!');
			  navigate('/authorlanding')
		  })
		  .catch((error) => {
			setLoading(false);
			console.error('Error saving data:', error);
		  });
	  };
	  

  
	return (
	  <>
		<Header />
		<Grid container lg={12} xs={12} sx={{ backgroundColor: '#9FE7F5', marginTop: '12px' }}>
		  <Grid container lg={10} xs={11} sx={{ margin: 'auto' }}>
			<Grid container lg={12} xs={12} spacing={2} sx={{ justifyContent: 'space-between' }}>
			  <Grid item lg={12} xs={12}>
				<Typography sx={{ fontSize: mobile?"26px":'56px', fontWeight: '700', color: '#005B9D', fontFamily: 'Space Grotesk', marginTop: '76px' }}>Sign Up To Get Reviews</Typography>
				<Typography sx={{ fontSize:  mobile?"14px":'20px', fontWeight: '400', color: '#000', fontFamily: 'Space Grotesk' }}>Just fill up these details and we're ready to go</Typography>
			  </Grid>
			  <Grid container lg={8} xs={12} sx={{justifyContent:mobile?'center':''}}>
							<Grid container xs={12} spacing={2} sx={{justifyContent:mobile?'center':''}}>
							<Grid item lg={6} xs={11}>
					<Typography sx={{ textAlign: 'left', fontSize: '16px', fontWeight: '600', fontFamily: 'Space Grotesk', color: '#1e1e1e', marginTop: '40px' }}>Amazon Link</Typography>
					<TextField
					  type="text"
					  value={Amazon}
					  onChange={(e) => setAmazon(e.target.value)}
					  placeholder='Provide your link here'
					  variant="outlined"
					  fullWidth
					  InputProps={{
						size: 'small',
						style: { marginTop: '8px', borderRadius: '6px', backgroundColor: '#Fff', border: '1px solid #A3A2A2' }
					  }}
					  InputLabelProps={{
						style: { color: '#787373', fontSize: '14px', fontWeight: '400', fontFamily: 'Space Grotesk' }
					  }}
					/>
				  </Grid>
				  <Grid item lg={6} xs={11}>
					<Typography sx={{ textAlign: 'left', fontSize: '16px', fontWeight: '600', fontFamily: 'Space Grotesk', color: '#1E1E1E', marginTop: '40px' }}>Publisher’s Name</Typography>
					<TextField
					 
					  value={publishername}
					  onChange={(e) => setpublishername(e.target.value)}
					  placeholder="Enter your publishername"
					  variant="outlined"
										fullWidth
										
										InputProps={{
											size: 'small',
											style: { marginTop: '8px', borderRadius: '6px', backgroundColor: '#Fff', border: '1px solid #A3A2A2' }
										  }}
										  InputLabelProps={{
											style: { color: '#787373', fontSize: '14px', fontWeight: '400', fontFamily: 'Space Grotesk' }
										  }}
					/>
				  </Grid>
				  
				  <Grid item lg={6} xs={11}>
					<Typography sx={{ fontSize: '16px', fontWeight: '600', fontFamily: 'Space Grotesk', color: '#1e1e1e', marginTop: '20px' }}>Preferred Platform</Typography>
					<Select
					  value={Platform}
					  onChange={(e) => setPlatform(e.target.value)}
					  variant="outlined"
					  fullWidth
					  displayEmpty
					  IconComponent={KeyboardArrowDownIcon}
					  style={{
						mb: 2,
						borderRadius: '6px',
						backgroundColor: '#fff',
						marginTop: '8px',
						'& .MuiSelect-root': {
						  pl: '10px',
						},
						'& .MuiSelect-icon': {
						  color: 'red',
						},
					  }}
					>
					  <MenuItem value="" disabled>
						<Typography sx={{ fontSize: '14px', fontWeight: '400', fontFamily: 'Space Grotesk', color: '#787373' }}> Select </Typography>
					  </MenuItem>
					  <MenuItem value="Amazon">Amazon</MenuItem>
					
					  
					</Select>
				  </Grid>
				  <Grid item lg={6} xs={11}>
					<Typography sx={{ textAlign: 'left', fontSize: '16px', fontWeight: '600', fontFamily: 'Space Grotesk', color: '#1e1e1e', marginTop: '20px' }}>Number of Reviews</Typography>
					<Select
					  value={nreviews}
					  onChange={(e) => setnreviews(e.target.value)}
					  variant="outlined"
					  fullWidth
					  displayEmpty
					  IconComponent={KeyboardArrowDownIcon}
					  style={{
						mb: 2,
						borderRadius: '6px',
						backgroundColor: '#fff',
						marginTop: '8px',
						'& .MuiSelect-root': {
						  pl: '10px',
						},
						'& .MuiSelect-icon': {
						  color: 'red',
						},
					  }}
					>
					  <MenuItem value="" disabled>
						<Typography sx={{ fontSize: '14px', fontWeight: '400', fontFamily: 'Space Grotesk', color: '#787373' }}> Select </Typography>
					  </MenuItem>
					  <MenuItem value={5}>5</MenuItem>
      <MenuItem value={10}>10</MenuItem>
      <MenuItem value={15}>15</MenuItem>
      <MenuItem value={20}>20</MenuItem>
      <MenuItem value={25}>25</MenuItem>
      <MenuItem value={30}>30</MenuItem>
      <MenuItem value={35}>35</MenuItem>
      <MenuItem value={40}>40</MenuItem>
      <MenuItem value={45}>45</MenuItem>
      <MenuItem value={50}>50</MenuItem>
      <MenuItem value={55}>55</MenuItem>
      <MenuItem value={60}>60</MenuItem>
      <MenuItem value={65}>65</MenuItem>
      <MenuItem value={70}>70</MenuItem>
      <MenuItem value={75}>75</MenuItem>
      <MenuItem value={80}>80</MenuItem>
      <MenuItem value={85}>85</MenuItem>
      <MenuItem value={90}>90</MenuItem>
      <MenuItem value={95}>95</MenuItem>
      <MenuItem value={100}>100</MenuItem>
      <MenuItem value={105}>105</MenuItem>
      <MenuItem value={110}>110</MenuItem>
      <MenuItem value={115}>115</MenuItem>
      <MenuItem value={120}>120</MenuItem>
      <MenuItem value={125}>125</MenuItem>
      <MenuItem value={130}>130</MenuItem>
      <MenuItem value={135}>135</MenuItem>
      <MenuItem value={140}>140</MenuItem>
      <MenuItem value={145}>145</MenuItem>
      <MenuItem value={150}>150</MenuItem>
      <MenuItem value={155}>155</MenuItem>
      <MenuItem value={160}>160</MenuItem>
      <MenuItem value={165}>165</MenuItem>
      <MenuItem value={170}>170</MenuItem>
      <MenuItem value={175}>175</MenuItem>
      <MenuItem value={180}>180</MenuItem>
      <MenuItem value={185}>185</MenuItem>
      <MenuItem value={190}>190</MenuItem>
      <MenuItem value={195}>195</MenuItem>
      <MenuItem value={200}>200</MenuItem>


				  
					</Select>
								</Grid>
							
				  {/* <Grid item lg={12}>
					<Typography sx={{ textAlign: 'left', fontSize: '16px', fontWeight: '600', fontFamily: 'Space Grotesk', color: '#1e1e1e', marginTop: '20px' }}>Description</Typography>
					<TextField
					  multiline
					  value={description}
					  onChange={(e) => setDescription(e.target.value)}
					  label="Description"
					  fullWidth
					  variant="outlined"
					  minRows={5}
					  InputProps={{
						size: 'small',
						style: {
						  marginTop: '8px',
						  borderRadius: '6px',
						  backgroundColor: '#Fff',
						  border: '1px solid #A3A2A2',
						  marginBottom: '16px'
						}
					  }}
					  InputLabelProps={{
						style: {
						  color: '#787373',
						  fontSize: '14px',
						  fontWeight: '400',
						  fontFamily: 'Space Grotesk',
						}
					  }}
					/>
								</Grid> */}
  
								<Grid item lg={12} xs={11}>
					<Typography sx={{ textAlign: 'left', fontSize: '16px', fontWeight: '600', fontFamily: 'Space Grotesk', color: '#1e1e1e', marginTop: '20px' }}>Additional Comments (Optional)</Typography>
					<TextField
					  multiline
					  value={Comments}
					  onChange={(e) => setcomments(e.target.value)}
					placeholder='Write here'
					  fullWidth
					  variant="outlined"
					  minRows={5}
					  InputProps={{
						size: 'small',
						style: {
						  marginTop: '8px',
						  borderRadius: '6px',
						  backgroundColor: '#Fff',
						  border: '1px solid #A3A2A2',
						  marginBottom: '16px'
						}
					  }}
					  InputLabelProps={{
						style: {
						  color: '#787373',
						  fontSize: '14px',
						  fontWeight: '400',
						  fontFamily: 'Space Grotesk',
						}
					  }}
					/>
								</Grid>
							
				</Grid>
				
				<Grid item lg={12} xs={11}>
				  <Button
					type="submit"
					variant="contained"
					color="primary"
					fullWidth
					onClick={handleSubmit1}
					disabled={loading}
					style={{ marginBottom: '76px', marginTop: '36px', fontSize: '18px', fontWeight: '700px', lineHeight: '32px', color: '#fff', backgroundColor: '#005B9D', textTransform: 'none', fontFamily: 'Space Grotesk' }}
				  >
					Submit
				  </Button>
				</Grid>
			  </Grid>
			  <Grid container lg={4} xs={12}>
				<Grid item lg={12} sx={{ justifyContent: 'end', display: 'flex', marginLeft: mobile?"20px":'70px',marginBottom:mobile?"25px":"" }}>
				  <img src={Uploadd} style={{ width: mobile?"300px":'400px', height: mobile?"250px":'450px' }} alt="upload" />
				</Grid>
			  </Grid>
			</Grid>
		  </Grid>
		</Grid>
	 <Footer/>
	  </>
	);
};

export default Authorform;