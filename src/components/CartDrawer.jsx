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









