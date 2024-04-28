import React from 'react'
import offer2 from "../Asserts/images/offer2.webp"
import { Typography } from '@mui/material'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';


const Offer = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
return (
<section className='offer'>
  <div className="container-fluid">
    <div className="row backgroung-color align-items-center ">
      <div className="col-sm-12 col-md-6 mt-5 mt-lg-0  text-center">
<ThemeProvider theme={theme}>
<Typography variant='h3'><i class="fa-solid fa-percent"></i></Typography>
        <Typography variant='h5' className='mt-3'>SALE IS ON!</Typography>
        <Typography variant='h2'>25% OFF</Typography>
        <Typography variant='h6'>25% off Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellat.
        </Typography>
        <Typography variant='h6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo repudiandae voluptates, earum
          accusamus cupiditate voluptatum quia. Veritatis ex facere molestias voluptatum eaque totam, adipisci
          reiciendis commodi voluptatem. Dolores sed, quam modi pariatur dolore, beatae, optio aperiam at labore nostrum
          libero totam! Error blanditiis, culpa ut ducimus laudantium ex eligendi soluta!</Typography>
</ThemeProvider>
       
      </div>
      <div className="col-sm-12 col-md-6 mt-5 mt-lg-0 pe-lg-0  ">
        <img src={offer2} alt="" className='img-fluid' />
      </div>
    </div>
  </div>
</section>
)
}

export default Offer