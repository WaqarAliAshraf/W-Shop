import React from 'react';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
           
            return;
        }

        // Get card element
        const card = elements.getElement(CardElement);

      
        const { error, token } = await stripe.createToken(card);

        if (error) {
            console.error('Error:', error);
        } else {
            console.log('Token:', token);
         
        }
    };

    return (
       <div className="container">
        <div className="row justify-content-center ">
            <div className="col-5">
          <div className="viewcart">
          <form onSubmit={handleSubmit}>
            <CardElement />
            <button className='mt-5' type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
          </div>
            </div>
        </div>
       </div>
    );
};

export default CheckoutForm;
