import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ViewCart = () => {
const navigate=useNavigate();

const handleback=()=>{
navigate("/product");
}

const [selectedProducts, setSelectedProducts] = useState([]);


useEffect(() => {
const storedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
setSelectedProducts(storedProducts);
}, []);


const removeFromCart = (id) => {
  const updatedSelectedProducts = selectedProducts.filter(item => item.id !== id);
  setSelectedProducts(updatedSelectedProducts);
  localStorage.setItem('selectedProducts', JSON.stringify(updatedSelectedProducts)); // Update localStorage
};


const increaseQuantity = (id) => {
const updatedSelectedProducts = selectedProducts.map(item => {
if (item.id === id) {
return { ...item, quantity: item.quantity + 1 };
}
return item;
});
setSelectedProducts(updatedSelectedProducts);
localStorage.setItem('selectedProducts', JSON.stringify(updatedSelectedProducts));
};

const decreaseQuantity = (id) => {
const updatedSelectedProducts = selectedProducts.map(item => {
if (item.id === id && item.quantity > 1) {
return { ...item, quantity: item.quantity - 1 };
}
return item;
});
setSelectedProducts(updatedSelectedProducts);
localStorage.setItem('selectedProducts', JSON.stringify(updatedSelectedProducts));
};

return (
<div className="viewcart">
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
          <ListItemText primary={item.product} secondary={`Price: $${item.price.toFixed(2)}, Quantity:
            ${item.quantity}`} />
          <Button
            style={{border:'2px solid #63BAB8',backgroundColor:"#024475",color:'#fff',fontSize:"10px" ,marginRight:2  }}
            onClick={()=> increaseQuantity(item.id)}>+</Button>
          <Button
            style={{border:'2px solid #63BAB8',backgroundColor:"#024475",color:'#fff',fontSize:"10px" ,marginRight:2  }}
            onClick={()=> decreaseQuantity(item.id)}>-</Button>
          <Button
            style={{border:'2px solid #63BAB8',backgroundColor:"#024475",color:'#fff',fontSize:"10px" ,marginRight:2  }}
            onClick={()=> removeFromCart(item.id)}>Delete</Button>
        </ListItem>
        ))}
        <button style={{border:'2px solid #63BAB8',backgroundColor:"#024475",color:'#fff' ,marginRight:2  }}
          onClick={handleback}>Back to products</button>
      </List>
      ) : (
      <Typography>Your cart is empty</Typography>
      )}
    </div>
  </div>
</div>
</div>
);
};

export default ViewCart;