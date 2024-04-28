import React, { useEffect, useState } from 'react';
import { Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { DataOfCards } from "./DataCards";
import { useNavigate } from 'react-router-dom';


const NewDrop = () => {

  const navigate = useNavigate();

  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);





  useEffect(() => {
    // Retrieve selected products from local storage
    const storedProducts = JSON.parse(localStorage.getItem('selectedProducts'));
    setSelectedProducts(storedProducts);
  }, []);

  // if (storedProducts) {
  //   setSelectedProducts(storedProducts);
  // }
  // useEffect(() => {

  //   localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
  // }, [selectedProducts]);



  const openCartDrawer = () => {
    setCartOpen(true);
  };

  const closeCartDrawer = () => {
    setCartOpen(false);
  };

  const addToCart = (product) => {
    setSelectedProducts([...selectedProducts, { ...product, quantity: 1 }]);
    localStorage.setItem('selectedProducts', JSON.stringify([...selectedProducts, { ...product, quantity: 1 }]));
    console.log('Product added to cart:', selectedProducts);
  };

  const removeFromCart = (id) => {
    const updatedSelectedProducts = selectedProducts.filter(item => item.id !== id);
    setSelectedProducts(updatedSelectedProducts);
  };

  const increaseQuantity = (id) => {
    const updatedSelectedProducts = selectedProducts.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setSelectedProducts(updatedSelectedProducts);
  };

  const decreaseQuantity = (id) => {
    const updatedSelectedProducts = selectedProducts.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setSelectedProducts(updatedSelectedProducts);
  };

  const calculateTotalPrice = () => {
    return selectedProducts.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleViewCart = () => {
    navigate("/viewcart")

  };

  return (
    <div>
      <section className='newdrop'>
        <div className="container">
          <div className="row text-center text-lg-start">
            {DataOfCards.map((item) => (
              <div key={item.id} className="col-sm-12 col-md-6 col-lg-3 mt-5">

                <div className="card">
                  <div className="image-zoom">
                    <img src={item.imageurl} alt="" className='img-fluid' />
                  </div>
                  <Typography variant='h6' className='mt-3'>{item.product}</Typography>
                  <Typography variant='h6'>{`$${item.price.toFixed(2)}`}</Typography>
                  <Button onClick={() => { addToCart(item); openCartDrawer(); }}>Add to Cart</Button>
                </div>


              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drawer */}
      <Drawer anchor="right" open={cartOpen} onClose={closeCartDrawer}>
        <div className="drawer-content">
          <h3>Shopping Cart</h3>
          <List>
            {selectedProducts.map((item) => (
              <ListItem key={item.id}>
                <img src={item.imageurl} alt="" className='img-fluid' style={{ height: '100px' }} />
                <ListItemText primary={`Product: ${item.product}`} />
                <ListItemText primary={`Price: $${item.price.toFixed(2)}`} />
                <ListItemText primary={`Quantity: ${item.quantity}`} />
                <Button onClick={() => increaseQuantity(item.id)}>+</Button>
                <Button onClick={() => decreaseQuantity(item.id)}>-</Button>
                <Button onClick={() => removeFromCart(item.id)}>Delete</Button>
              </ListItem>
            ))}
          </List>
          <Button onClick={handleViewCart}>View Cart</Button>
          <Typography variant="subtitle1">Total Price: ${calculateTotalPrice()}</Typography>
          <Button onClick={closeCartDrawer}>Close</Button>
        </div>
      </Drawer>
    </div>
  );
};

export default NewDrop;