import React from 'react';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Typography } from '@mui/material';




const Banner = () => {

  let theme = createTheme();
theme = responsiveFontSizes(theme);

  return (
    <>
<div className="container">
<div className="row justify-content-center mt-5 mb-5">
<div className="text-center col-lg-4">
<ThemeProvider theme={theme}>
  <Typography variant="h2" fontWeight="bold" >W SHOP</Typography>
  <Typography className=' mb-5 text' fontWeight="bold" >There’s One for Everyone</Typography>
</ThemeProvider>
    </div>
</div>
</div>
<section className='banner-wrapper'>
<div className="container-fluid">
  <div className="row justify-content-center text-center">
    
  </div>
  <div className="banner-back-image mt-5">
  <div id="demo" className="carousel slide" data-bs-ride="carousel">


<div className="carousel-inner">
  <div className="carousel-item active">
    <div className="row justify-content-center text-center">
      <div className="col-sm-12 col-md-10 pt-4">
      <ThemeProvider theme={theme}>
  <Typography variant="h1" fontWeight="bold" style={{color:"white"}} >New Outer wear Collection</Typography>
  </ThemeProvider>
      </div>
    </div>
  </div>
  <div className="carousel-item">
    <div className="row justify-content-center text-center">
      <div className="col-sm-12 col-md-10 pt-4">
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
        <Typography variant='h6' fontWeight="bold"  style={{color:"white"}}>Sale is on</Typography>
  <Typography variant="h2" fontWeight="bold" style={{color:"white"}} >25% OFF</Typography>
  </ThemeProvider>
      </div>
    </div>
  </div>
</div>
<div className="buttons-bg">
<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
</div>

  </div>
     
  </div>
</section>
</>
  );
};

export default Banner;
