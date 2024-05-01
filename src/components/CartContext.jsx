import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();


export const useCart = () => useContext(CartContext);


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




