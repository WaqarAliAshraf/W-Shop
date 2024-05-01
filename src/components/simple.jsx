// import React, { useEffect, useState } from 'react';
// import { Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
// import{ DataOfCards} from "./components/DataCards";
// import { Link } from 'react-router-dom';


// const NewDrop = () => {
//   const [cartOpen, setCartOpen] = useState(false);
//   const [selectedProducts, setSelectedProducts] = useState([]);

  
//   useEffect(() => {
//     // Retrieve selected products from local storage
//     const storedProducts = JSON.parse(localStorage.getItem('selectedProducts'));
//     if (storedProducts) {
//       setSelectedProducts(storedProducts);
//     }
//   }, []);

//   useEffect(() => {
//     // Store selected products in local storage
//     localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
//   }, [selectedProducts]);



//   const openCartDrawer = () => {
//     setCartOpen(true);
//   };

//   const closeCartDrawer = () => {
//     setCartOpen(false);
//   };

//   const addToCart = (product) => {
//     setSelectedProducts([...selectedProducts, { ...product, quantity: 1 }]);
//     console.log('Product added to cart:', selectedProducts);
//   };

//   const removeFromCart = (id) => {
//     const updatedSelectedProducts = selectedProducts.filter(item => item.id !== id);
//     setSelectedProducts(updatedSelectedProducts);
//   };

//   const increaseQuantity = (id) => {
//     const updatedSelectedProducts = selectedProducts.map(item => {
//       if (item.id === id) {
//         return { ...item, quantity: item.quantity + 1 };
//       }
//       return item;
//     });
//     setSelectedProducts(updatedSelectedProducts);
//   };

//   const decreaseQuantity = (id) => {
//     const updatedSelectedProducts = selectedProducts.map(item => {
//       if (item.id === id && item.quantity > 1) {
//         return { ...item, quantity: item.quantity - 1 };
//       }
//       return item;
//     });
//     setSelectedProducts(updatedSelectedProducts);
//   };

//   const calculateTotalPrice = () => {
//     return selectedProducts.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
//   };

//   const handleViewCart = () => {
    
//     window.location.href = '/viewcart';
//   };

//   return (
//     <div>
//       <section className='newdrop'>
//         <div className="container">
//           <div className="row text-center text-lg-start">
//             {DataOfCards.map((item) => (
//               <div key={item.id} className="col-sm-12 col-md-6 col-lg-3 mt-5">
//              <Link to="/products">
//              <div className="card">
//                   <div className="image-zoom">
//                     <img src={item.imageurl} alt="" className='img-fluid' />
//                   </div>
//                   <Typography variant='h6' className='mt-3'>{item.product}</Typography>
//                   <Typography variant='h6'>{`$${item.price.toFixed(2)}`}</Typography>
//                   <Button onClick={() => { addToCart(item); openCartDrawer();}}>Add to Cart</Button>
//                 </div>

//              </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Drawer */}
//       <Drawer anchor="right" open={cartOpen} onClose={closeCartDrawer}>
//         <div className="drawer-content">
//           <h3>Shopping Cart</h3>
//           <List>
//             {selectedProducts.map((item) => (
//               <ListItem key={item.id}>
//                 <img src={item.imageurl} alt="" className='img-fluid' style={{ height: '100px' }} />
//                 <ListItemText primary={`Product: ${item.product}`} />
//                 <ListItemText primary={`Price: $${item.price.toFixed(2)}`} />
//                 <ListItemText primary={`Quantity: ${item.quantity}`} />
//                 <Button onClick={() => increaseQuantity(item.id)}>+</Button>
//                 <Button onClick={() => decreaseQuantity(item.id)}>-</Button>
//                 <Button onClick={() => removeFromCart(item.id)}>Delete</Button>
//               </ListItem>
//             ))}
//           </List>
//           <Button onClick={handleViewCart}>View Cart</Button>
//           <Typography variant="subtitle1">Total Price: ${calculateTotalPrice()}</Typography>
//           <Button onClick={closeCartDrawer}>Close</Button>
//         </div>
//       </Drawer>
//     </div>
//   );
// };

// export default NewDrop;




import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

const ViewCart = () => {
  const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];

  return (
    <div className='container'>
    <div className="row justify-content-center text-center">
      <div className="col-sm-12 col-lg-10">
      <Typography variant="h5" gutterBottom>
        Your Cart
      </Typography>
      {selectedProducts.length > 0 ? (
        <List>
          {selectedProducts.map((item) => (
            <ListItem key={item.id}>
              <img src={item.imageurl} alt={item.product} style={{ height: '100px', marginRight: '16px' }} />
              <ListItemText
                primary={item.product}
                secondary={`Price: $${item.price.toFixed(2)}, Quantity: ${item.quantity}`}
              />

              
            </ListItem>
            
          ))}
        </List>
      ) : (
        <Typography>Your cart is empty</Typography>
      )}
      </div>
    </div>
    </div>
  );
};

export default ViewCart;




// import React from 'react';
// import { Typography } from '@mui/material';
// import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
// import { Link } from 'react-router-dom';
// import { useCart } from './CartContext';

// const Header = () => {

//   let theme = createTheme();
//   theme = responsiveFontSizes(theme);
//   const { selectedProducts } = useCart();
//   return (
//     <>
//       <section className="header-main">
//         <div className="container">
//           <div className="row main align-items-center">
//             <div className="col-12 col-sm-10 col-md-10 col-lg-10">
//               <ul className="d-flex d-none d-lg-flex">
//                 <li>
//                   <i className="fa-solid fa-mobile-screen-button"></i>
//                   <span>+92 3046919328</span>
//                 </li>
//                 <li>
//                   <i className="fa-solid fa-location-dot"></i>
//                   <span>Main 86/6r Road Sahiwal </span>
//                 </li>
//                 <li>
//                   <i className="fa-solid fa-clock-rotate-left"></i>
//                   <span>Mon - Sunday, 24 Hours</span>
//                 </li>
//               </ul>
//             </div>
//             <div className="col-12 col-sm-10 col-md-12 col-lg-2  ">
//               <ul className="d-flex justify-content-center justify-content-lg-end">
//                 <li><a href="http://www.facebook.com"><i className="fa-brands fa-facebook-f"></i></a></li>
//                 <li><a href="http://www.twitter.com"><i className="fa-brands fa-twitter"></i></a></li>
//                 <li><a href="http://www.instagram.com"><i className="fa-brands fa-instagram"></i></a></li>
//                 <li><a href="http://www.youtube.com"><i className="fa-brands fa-youtube"></i></a></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       <nav className="navbar navbar-expand-lg sticky-top">
//         <div className="container">
          
//           <ThemeProvider theme={theme}>
//           <Typography variant='h3' fontWeight="bold" style={{color:"white"}} >W SHOP</Typography>
//           </ThemeProvider>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
//             <i className="fa-solid fa-bars"></i>
//           </button>
//           <div className="collapse navbar-collapse" id="collapsibleNavbar">
//             <ul className="navbar-nav ms-auto me-auto align-items-start align-items-lg-center">
//               <li className="nav-item">
//                 <Link to="/landingpage " className='nav-link'>Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/aboutus" className='nav-link'>About Us</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/faq" className='nav-link'>Faq's</Link>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="">TESTIMONIAL</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="">CONTACT</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="">BLOG</a>
//               </li>
//               <li className="nav-item">
//           <Link to="/login" className='appointment'> <i class="fa-solid fa-user "></i> LogIn</Link>
//               </li>
//             </ul>
//             <button  >

//             <div>Selected Products: {selectedProducts.length}</div>
//             </button>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Header;




// CartDrawer.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText, Typography, Button } from '@mui/material';

const CartDrawer = ({
  cartOpen,
  closeCartDrawer,
  selectedProducts,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  handleViewCart,
  calculateTotalPrice
}) => {
  return (
    <Drawer  anchor="right" open={cartOpen} onClose={closeCartDrawer}>
      <div className="drawer-content">
        <h3>Shopping Cart</h3>
        <List sx={{ps:0}}>
          {selectedProducts.map((item) => (
            <ListItem key={item.id}>
              <img src={item.imageurl} alt="" className='img-fluid' style={{ height: '100px' }} />
              <ListItemText primary={`Product: ${item.product}`} />
              <ListItemText primary={`Price: $${item.price.toFixed(2)}`} />
              <ListItemText primary={`Quantity: ${item.quantity}`} />
              <Button style={{border:'2px solid #63BAB8',backgroundColor:"#024475",color:'#fff',fontSize:"10px" ,marginRight:2  }} onClick={() => increaseQuantity(item.id)}>+</Button>
              <Button style={{border:'2px solid #63BAB8',backgroundColor:"#024475",color:'#fff',marginRight:2,fontSize:"10px" }} onClick={() => decreaseQuantity(item.id)}>-</Button>
              <Button style={{border:'2px solid #63BAB8',backgroundColor:"#024475",color:'#fff',marginRight:2, fontSize:'10px ' }} onClick={() => removeFromCart(item.id)}>Delete</Button>
            </ListItem>
          ))}
        </List>
        <Button style={{border:'2px solid #63BAB8',backgroundColor:"#024475",color:'#fff',fontSize:"10px" ,marginRight:2  }} sx={{mt:5}} onClick={handleViewCart}>View Cart</Button>
        <Typography sx={{mt:2}} variant="subtitle1">Total Price: ${calculateTotalPrice()}</Typography>
        <Button style={{border:'2px solid #63BAB8',backgroundColor:"#024475",color:'#fff',fontSize:"10px" ,marginRight:2  }} sx={{mt:3}} onClick={closeCartDrawer}>Close</Button>
      </div>
    </Drawer>
  );
};

export default CartDrawer;









