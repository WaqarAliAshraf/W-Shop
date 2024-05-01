import React from 'react';
import { Button, Typography } from '@mui/material';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';


const Header = () => {

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const { cartOpen, setCartOpen } = useCart()



  return (
    <>
      <section className="header-main">
        <div className="container">
          <div className="row main align-items-center">
            <div className="col-12 col-sm-10 col-md-10 col-lg-10">
              <ul className="d-flex d-none d-lg-flex">
                <li>

                  <i className="fa-solid fa-mobile-screen-button"></i>
                  <span>+92 3046919328</span>
                </li>
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  <span>Main 86/6r Road Sahiwal </span>
                </li>
                <li>
                  <i className="fa-solid fa-clock-rotate-left"></i>
                  <span>Mon - Sunday, 24 Hours</span>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-10 col-md-12 col-lg-2  ">
              <ul className="d-flex justify-content-center justify-content-lg-end">
                <li><a href="http://www.facebook.com"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="http://www.twitter.com"><i className="fa-brands fa-twitter"></i></a></li>
                <li><a href="http://www.instagram.com"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="http://www.youtube.com"><i className="fa-brands fa-youtube"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">

          <ThemeProvider theme={theme}>
            <Typography variant='h3' fontWeight="bold" style={{ color: "white" }} >W SHOP</Typography>
          </ThemeProvider>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ms-auto me-auto align-items-start align-items-lg-center">
              <li className="nav-item">
                <Link to="/landingpage " className='nav-link'>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className='nav-link' >Shop</Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className='nav-link'>About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/faq" className='nav-link'>Faq's</Link>
              </li>
            
              <li className="nav-item">
                <a className="nav-link" href="">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Blog</a>
              </li>
              <li >
                <Link to="/login" className='appointment '> <i class="fa-solid fa-user me-2 "></i> Login</Link>
              </li>
              <li>
              <button className='appointment-2' onClick={() => setCartOpen(true)}>
            <i class="fa-solid fa-cart-shopping me-2"> </i>
            Cart
            </button>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;