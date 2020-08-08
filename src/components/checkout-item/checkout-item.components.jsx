import React from 'react';

import './checkout-item.styles.scss';

const checkoutItem = ({cart}) => (
    <div className = 'checkout-item'>
        <div className = 'image-container'>
            <img src = {cart.imageUrl} alt='item'/>
        </div>
<span className='name'>{cart.name}</span>
<span className='quantity'>{cart.quantity}</span>
<span className='price'>{cart.price}</span>
        <div className='remove-button'>&times;</div>
    </div>
)

export default checkoutItem;  