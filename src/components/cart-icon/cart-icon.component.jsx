import React from 'react';
import {ReactComponent as Cart} from './../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import {cartAction} from './../../redux/cart/cart-actions';

const cartIcon = ({cartAction}) => (
    <div className='cart-icon' onClick = {cartAction}>
        <Cart className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>       
    
);

const toMatchDispatchToProp = dispatch => ({
    cartAction: () => dispatch(cartAction())      
});  

export default connect(null,toMatchDispatchToProp)(cartIcon);