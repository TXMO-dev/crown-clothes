import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const buttonforstripe = price * 100;
    const publishable_key = 'pk_test_51HEUNGFlZTOae50raXN3iedy9zkgWrej0mkePCqzjYGPTNgmrIao6CT3Iy3aVJXGwBCXR8HI6yWmKWIyOZeIKRk6004Mt8nAmT'
    const onToken = token =>{
        console.log(token)
        alert('payment successful!!');
    }
    return(
        <StripeCheckout
            name="The crown application"
            description={`Your total is $${price}`}
            label='Pay now'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            amount={buttonforstripe}
            panelLabel='Pay now'
            token={onToken}
            stripekey={publishable_key}
        />
    );  
}

export default StripeCheckoutButton;