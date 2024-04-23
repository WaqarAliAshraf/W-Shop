import React from 'react';
import banner1 from './Asserts/images/banner-1.webp'
import banner2 from './Asserts/images/banner-2.webp'
import banner3 from './Asserts/images/banner-3.webp'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Typography } from '@mui/material';




const Banner = () => {

  let theme = createTheme();
theme = responsiveFontSizes(theme);

  return (
<section className='banner-wrapper'>
<div className="container-fluid">
  <div className="row justify-content-center text-center">
    <div className="col-sm-12 col-lg-4">
<ThemeProvider theme={theme}>
  <Typography variant="h2" fontWeight="bold" >W SHOP</Typography>
  <Typography className=' mb-5 text' fontWeight="bold" >There’s One for Everyone</Typography>
</ThemeProvider>
    </div>
  </div>
  <div className="banner-back-image">
  <div id="demo" className="carousel slide" data-bs-ride="carousel">
<div className="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>

<div className="carousel-inner">
  <div className="carousel-item active">
    <div className="row justify-content-center text-center">
      <div className="col-sm-12 col-md-7">
      <ThemeProvider theme={theme}>
  <Typography variant="h1" fontWeight="bold" style={{color:"white"}} >New Outerwear Collection</Typography>
  </ThemeProvider>
      </div>
    </div>
  </div>
  <div className="carousel-item">
    <div className="row justify-content-center text-center">
      <div className="col-sm-12 col-md-10">
      <ThemeProvider theme={theme}>
  <Typography variant="h1" fontWeight="bold" style={{color:"white"}} >
GET 10% OFF YOUR FIRST ORDER!</Typography>
  </ThemeProvider>
      </div>
    </div>
  </div>
  <div className="carousel-item">
    <div className="row justify-content-center text-center ">
      <div className="col-sm-12 col-md-7">
      <ThemeProvider theme={theme}>
      <Typography variant='h2' fontWeight="bold" style={{color:"white"}}>At the end of every month</Typography>
        <Typography variant='h4' fontWeight="bold" style={{color:"white"}}>Sale is on</Typography>
  <Typography variant="h1" fontWeight="bold" style={{color:"white"}} >25% OFF</Typography>
  </ThemeProvider>
      </div>
    </div>
  </div>
</div>
</div>
  </div>
     
  </div>
</section>
  );
};

export default Banner;
