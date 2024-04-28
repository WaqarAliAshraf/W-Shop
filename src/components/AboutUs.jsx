import React from 'react'
import banner3 from "../Asserts/images/banner-3.webp";
import { Typography } from '@mui/material';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';


const AboutUs = () => {

let theme = createTheme();
theme = responsiveFontSizes(theme);

return (
<section className='aboutus'>
    <div className="container-fluid">
<div className="about-text">
    <ThemeProvider theme={theme}>
        <Typography variant='h1' fontWeight="bold">About Us</Typography>
    </ThemeProvider>
</div>

        <div className="row backgroung-color align-items-center text-center">
            <div className="col-sm-12 col-md-6 pt-5 pt-md-0">
                <ThemeProvider theme={theme}>

                    <Typography variant='h3' fontWeight="bold">
                        <i class="fa-regular fa-face-grin-beam"></i>
                    </Typography>
                    <Typography variant='h6' fontWeight="bold" className='mt-3'>Everything you need to know about your
                        fave
                        T brand.</Typography>
                    <Typography className='mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, vitae
                        dolor ipsam veniam quasi
                        eaque perspiciatis officia nam unde officiis sed facilis eos hic labore inventore! Ducimus earum
                        inventore, ipsum labore unde eos? Maiores vel cupiditate repellendus ex! Unde tempore numquam
                        iure accusamus harum odit dolorem corporis. Ad, consequuntur voluptatibus?</Typography>
                </ThemeProvider>


            </div>
            <div className="col-sm-12 col-md-6 pe-lg-0 mt-5 mt-md-0">
                <img src={banner3} alt="" className='img-fluid' />
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row about text-center">
            <div className="col-sm-12 col-md-4 ">
                <ThemeProvider theme={theme}>
                    <Typography variant='h1' fontWeight="bold">
                    <i class="fa-solid fa-temperature-three-quarters"></i>
                    </Typography>
                    <Typography >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, quibusdam.</Typography>
                </ThemeProvider>
            </div>
            <div className="col-sm-12 col-md-4 mt-5 mt-md-0">
              <ThemeProvider theme={theme}>
                    <Typography variant='h1' fontWeight="bold">
                    <i class="fa-solid fa-shirt"></i>
                    </Typography>
                    <Typography >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, quibusdam.</Typography>
                </ThemeProvider>
                </div>
            <div className="col-sm-12 col-md-4 mt-5 mt-md-0">

            <ThemeProvider theme={theme}>
                    <Typography variant='h1' fontWeight="bold">
                    <i class="fa-solid fa-shop"></i>
                    </Typography>
                    <Typography >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, quibusdam.</Typography>
                </ThemeProvider>
            </div>
        </div>
    </div>
</section>
)
}

export default AboutUs