import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

const ViewCart = ({ product }) => {

  
  
  const selectedProducts = product && product.state ? product.state.selectedProducts : [];

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
