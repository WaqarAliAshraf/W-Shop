import React from 'react'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Footer = () => {
    let theme = createTheme();
    theme = responsiveFontSizes(theme);
  return (
    <footer>
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-sm-12 col-lg-3  text-lg-center">
                <ThemeProvider theme={theme}>
                    <Typography variant='h3' fontWeight="bold">W SHOP</Typography>
                    <Typography variant='h6' className='mt-2'>info@mysite.com</Typography>
                    <Typography variant='h6' className='mt-2'>Tel:03046919328</Typography>
</ThemeProvider>
                </div>
                <div className="col-sm-12 col-md-7 mt-5 mt-lg-0">
                    <div className="row">
                        <div className="col-6 col-lg-4">
                            <Typography variant='h6' fontWeight="bold">Shop</Typography>
                            <Typography fontWeight="bold" className='mt-2'>New</Typography>
                            <Typography fontWeight="bold">Men</Typography>
                            <Typography fontWeight="bold">Women</Typography>
                        </div>
                        <div className="col-6 col-lg-4">
                            <Typography variant='h6' fontWeight="bold">Our Store</Typography>
                            <Link to="/aboutus">  
                            <Typography fontWeight="bold" className='mt-2'>About Us</Typography>
                            </Link>
                            <Link to="/faq">
                            <Typography fontWeight="bold">FAQ's</Typography>

                            </Link>
                            
                            <Typography fontWeight="bold">Subscribe</Typography>

                        </div>
                        <div className="col-12 col-lg-4 mt-5 mt-lg-0">
                        <Typography variant='h6' fontWeight="bold">Terms&Conditions</Typography>
                            <Typography fontWeight="bold" className='mt-2'>Lorem 1</Typography>
                            <Typography fontWeight="bold">Lorem 2</Typography>
                            <Typography fontWeight="bold">Lorem 3</Typography>

                        </div>

                    </div>
                </div>
            </div>
            <div className="row align-items-center justify-content-between mt-5 ">
                <div className="col-sm-12 col-md-12 col-lg-3 for-border ">
                <ul className="d-flex justify-content-center">
                <li className='ms-0'><a href="http://www.facebook.com"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="http://www.twitter.com"><i className="fa-brands fa-twitter"></i></a></li>
                <li><a href="http://www.instagram.com"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="http://www.youtube.com"><i className="fa-brands fa-youtube"></i></a></li>
              </ul>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-7 text-center for-border mt-5 mt-lg-0">
                    <Typography> © 2024 by W Shop. Powered and secured by Waqar </Typography>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer