import React from 'react';
import './cart-item.styles.scss';

const cart_item = ({cart}) => (
    <div className = 'cart-item'>
        
        <img src = {cart.imageUrl} alt={cart.name} />
        <div className = "item-details">
            <span className='title'>{cart.name}</span>
<span className='price'>{cart.quantity} x {cart.price}</span>  
        </div>
        

    </div>
);

export default cart_item