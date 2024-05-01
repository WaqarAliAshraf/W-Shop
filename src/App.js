import React from 'react';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from './components/StripeMethod';
// // import CheckoutForm from './CheckoutForm';

import './style.css';
import AppRoutes from './routes/routes';
import { CartContextProvider } from './components/CartContext';

// const stripePromise = loadStripe('pk_test_51HxmROCmTw5RHoXG8HKf8jNdtYJsQw5E1AlY22M325hFy8YkcGxBhuvlz0jF3oWyu3sVXpjOVcVJotmjXekYo9jA00EPrtjitS');

function App() {
  return (
    <div>
      {/* <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements> */}
<CartContextProvider>
  
      <AppRoutes/>

</CartContextProvider>
    </div>
  );
}

export default App;
