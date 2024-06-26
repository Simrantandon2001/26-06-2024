import React, { useState } from 'react';
import Header from './Header';
import { Grid, Button, Typography } from '@mui/material';
import Footer from './Footer';
import '@fontsource/alegreya';
import Uploadd from './Images/Uploadd.png';
import { Api_url } from './helper';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from 'axios';

const Upload = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [language, setLanguage] = useState('');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [loading, setLoading] = useState(false);
	const [Amazon, setAmazon] = useState('');
	const [Aboutb, setAboutb] = useState('');
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

    const formData = new FormData();
    formData.append('name', name);
    formData.append('title', title);
    formData.append('category', category);
    formData.append('language', language);
	//   formData.append('description', description);
	  formData.append('Amazon', Amazon);
	  formData.append('Aboutb', Aboutb);
	  formData.append('Aboutauthor', Aboutauthor);
    formData.append('coverImage', coverImage);
    formData.append('pdfFile', pdfFile);
console.log(formData)
    axios.post(`${Api_url}/sign/upload`, formData)
      .then((response) => {
        setLoading(false);
        console.log('Data saved successfully!');
      })
      .catch((error) => {
        setLoading(false);
        console.error('Error saving data:', error);
      });
  };

  return (
    <>
      <Header />
      <Grid container lg={12} sx={{ backgroundColor: '#9FE7F5', marginTop: '12px' }}>
        <Grid container lg={10} sx={{ margin: 'auto' }}>
          <Grid container lg={12} spacing={2} sx={{ justifyContent: 'space-between' }}>
            <Grid item lg={12}>
              <Typography sx={{ fontSize: '56px', fontWeight: '700', color: '#005B9D', fontFamily: 'Space Grotesk', marginTop: '76px' }}>Lorem ipsum</Typography>
              <Typography sx={{ fontSize: '20px', fontWeight: '400', color: '#000', fontFamily: 'Space Grotesk' }}>Lorem ipsum dolor sit amet, consectetur adipiscing.</Typography>
            </Grid>
            <Grid container lg={8}>
              <Grid container spacing={2}>
                <Grid item lg={6}>
                  <Typography sx={{ textAlign: 'left', fontSize: '16px', fontWeight: '600', fontFamily: 'Space Grotesk', color: '#1E1E1E', marginTop: '40px' }}>Name</Typography>
                  <TextField
                   
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    variant="outlined"
									  fullWidth
									  size={'small'}
                    InputProps={{
                      style: { marginTop: '8px', borderRadius: '6px', backgroundColor: '#FFF', border: '1px solid #A3A2A2' }
                    }}
                    InputLabelProps={{
						style: { color: '#787373', fontSize: '14px', fontWeight: '400', fontFamily: 'Space Grotesk' },
						placeholderTypographyProps: {
							style: {
								fontSize: '14px', // Adjust font size as needed
								fontFamily: 'Space Grotesk' // Change the font family for the placeholder
							}
						}
                    }}
                  />
                </Grid>
                <Grid item lg={6}>
                  <Typography sx={{ textAlign: 'left', fontSize: '16px', fontWeight: '600', fontFamily: 'Space Grotesk', color: '#1e1e1e', marginTop: '40px' }}>Title</Typography>
                  <TextField
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    label="Title"
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
                <Grid item lg={6}>
                  <Typography sx={{ fontSize: '16px', fontWeight: '600', fontFamily: 'Space Grotesk', color: '#1e1e1e', marginTop: '20px' }}>Category</Typography>
                  <Select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
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
                    <MenuItem value="Adventure">Adventure</MenuItem>
                    <MenuItem value="Horror">Horror</MenuItem>
	  <MenuItem value="Fantasy">Fantasy</MenuItem>
	  <MenuItem value="Fanfiction">Fanfiction</MenuItem>
	  <MenuItem value="Fiction">Fiction</MenuItem>
	  <MenuItem value="Romance">Romance</MenuItem>
	  <MenuItem value="Mystery">Mystery</MenuItem>
	  <MenuItem value="Science Fiction">Science Fiction</MenuItem>
	  <MenuItem value="Non Fiction">Non Fiction</MenuItem>
	  <MenuItem value="Poetry">Poetry</MenuItem>
	  <MenuItem value="Comedy">Comedy</MenuItem>
	  <MenuItem value="Thriller">Thriller</MenuItem>
                    
                  </Select>
                </Grid>
                <Grid item lg={6}>
                  <Typography sx={{ textAlign: 'left', fontSize: '16px', fontWeight: '600', fontFamily: 'Space Grotesk', color: '#1e1e1e', marginTop: '20px' }}>Language</Typography>
                  <Select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
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
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="Hindi"  >Hindi</MenuItem>
	  <MenuItem value="French">French</MenuItem>
	  <MenuItem value="Japanese">Japanese</MenuItem>
	  <MenuItem value="Spanish">Spanish</MenuItem>
                
                  </Select>
							  </Grid>
							  <Grid item lg={12}>
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

							  <Grid item lg={12}>
                  <Typography sx={{ textAlign: 'left', fontSize: '16px', fontWeight: '600', fontFamily: 'Space Grotesk', color: '#1e1e1e', marginTop: '20px' }}>About the Book</Typography>
                  <TextField
                    multiline
                    value={Aboutb}
                    onChange={(e) => setAboutb(e.target.value)}
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
							  <Grid item lg={12}>
                  <Typography sx={{ textAlign: 'left', fontSize: '16px', fontWeight: '600', fontFamily: 'Space Grotesk', color: '#1e1e1e', marginTop: '20px' }}>About the Author</Typography>
                  <TextField
                    multiline
                    value={Aboutauthor}
                    onChange={(e) => setAboutauthor(e.target.value)}
                    placeholder='write here'
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
              <Grid container lg={12} spacing={2}>
       
        <Grid item lg={6}>
          <input type="file" accept="image/*" id="pdf-upload" onChange={handlePdfUpload} style={{ display: 'none' }} />
          <label htmlFor="pdf-upload">
          <Button
                      style={{
                        width: '100%',
                        border: '2px solid #005B9D',
                        borderRadius: '6px',
                        color: '#005B9D',
                        textTransform: 'none',
                        fontSize: '18px',
                        fontWeight: '700',
                        fontFamily: 'Space Grotesk',
                      }}
                      component="span"
                    >
                      Upload Your display Photo
									  </Button>
									  {pdfFile && (
        <Typography> {pdfFile.name}</Typography>
      )}
								  </label>
								  
        </Grid>
		<Grid item lg={6}>
          <input type="file" accept="image/*" id="cover-image-upload" onChange={handleCoverImageUpload} style={{ display: 'none' }} />
          <label htmlFor="cover-image-upload">
          <Button
                      style={{
                        width: '100%',
                        border: '2px solid #005B9D',
                        borderRadius: '6px',
                        color: '#005B9D',
                        textTransform: 'none',
                        fontSize: '18px',
                        fontWeight: '700',
                        fontFamily: 'Space Grotesk',
                      }}
                      component="span"
                    >
                      Upload Cover Image
                    </Button>
								  </label>
								  {coverImage && (
        <Typography> {coverImage.name}</Typography>
      )}
        </Grid>
      </Grid>
              <Grid item lg={12}>
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
            <Grid container lg={4}>
              <Grid item lg={12} sx={{ justifyContent: 'end', display: 'flex', marginLeft: '70px' }}>
                <img src={Uploadd} style={{ width: '400px', height: '450px' }} alt="upload" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
   
    </>
  );
};

export default Upload;