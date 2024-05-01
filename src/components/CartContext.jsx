import React, { createContext, useContext, useState } from 'react';

// Create CartContext
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);

// CartContextProvider component
export const CartContextProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [first, setFirst] = useState('hello')
  const collection = {
    first,
    cartOpen,setCartOpen
  }
  return (
    <CartContext.Provider value={collection}>
      {children}
    </CartContext.Provider>
  );
};




