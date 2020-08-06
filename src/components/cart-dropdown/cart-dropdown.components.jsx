import React from 'react';
import './cart-dropdown.styles.scss';
import Custombutton from './../custom-button/custom-button.components';

const cartDropdown = () => (
    <div className = 'cart-dropdown'>
        <div className='cart-items' />
        <Custombutton>GO TO CHECKOUT</Custombutton>
    </div>
);

export default cartDropdown;  