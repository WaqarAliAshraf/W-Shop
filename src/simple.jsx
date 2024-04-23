// import React, { useState } from 'react';
// import { Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
// import drop1 from "./Asserts/images/drop1.webp";
// import drop2 from "./Asserts/images/drop2.webp";
// import drop3 from "./Asserts/images/drop3.webp";
// import drop4 from "./Asserts/images/drop4.webp";
// import drop5 from "./Asserts/images/drop5.webp";
// import drop6 from "./Asserts/images/drop6.webp";
// import drop7 from "./Asserts/images/drop7.webp";
// import drop8 from "./Asserts/images/drop8.webp";
// import ViewCart from './ViewCart';

// const NewDrop = () => {
//   const [cartOpen, setCartOpen] = useState(false);
//   const [selectedProducts, setSelectedProducts] = useState([]);

//   let obj = [
//     { id: 1, product: "Product 1", price: 15.00, imageurl: drop1 },
//     { id: 2, product: "Product 2", price: 15.00, imageurl: drop2 },
//     { id: 3, product: "Product 3", price: 15.00, imageurl: drop3 },
//     { id: 4, product: "Product 4", price: 15.00, imageurl: drop4 },
//     { id: 5, product: "Product 5", price: 15.00, imageurl: drop5 },
//     { id: 6, product: "Product 6", price: 15.00, imageurl: drop6 },
//     { id: 7, product: "Product 7", price: 15.00, imageurl: drop7 },
//     { id: 8, product: "Product 8", price: 15.00, imageurl: drop8 },
//   ];

//   const openCartDrawer = () => {
//     setCartOpen(true);
//   };

//   const closeCartDrawer = () => {
//     setCartOpen(false);
//   };

//   const addToCart = (product) => {
//     setSelectedProducts([...selectedProducts, { ...product, quantity: 1 }]);
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

//   return (
//     <div>
//       <section className='newdrop'>
//         <div className="container">
//           <div className="row">
//             {obj.map((item) => (
//               <div key={item.id} className="col-sm-12 col-md-3 mt-5 mt-lg-0">
//                 <div className="card">
//                   <div className="image-zoom">
//                     <img src={item.imageurl} alt="" className='img-fluid' />
//                   </div>
//                   <Typography variant='h6' className='mt-3'>{item.product}</Typography>
//                   <Typography variant='h6'>{`$${item.price.toFixed(2)}`}</Typography>
//                   <Button onClick={() => { addToCart(item); openCartDrawer(); }}>Add to Cart</Button>
//                 </div>
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
//           <Button onClick={"/viewcart"} component={<ViewCart/>} >View Cart</Button>
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

const ViewCart = ({ location }) => {
  
  const selectedProducts = location && location.state ? location.state.selectedProducts : [];

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Shopping Cart
      </Typography>
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
      <Typography>your cart is empty</Typography>
    </div>
  );
};

export default ViewCart;

