import React from 'react';

import './checkout-item.styles.scss';
import {removeItemAction,addItemAction,removeItemLeft} from './../../redux/cart/cart-actions';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {saveaccumulatedValueToCache,removeaccumulatedValueToCache} from './../../redux/cart/cart.selectors';

const checkoutItem = ({cart,removeItem,addQty,removeQty}) => (
    <div className = 'checkout-item'>
        <div className = 'image-container'>
            <img src = {cart.imageUrl} alt='item'/>
        </div>
<span className='name'>{cart.name}</span>
<span className='quantity'>
    <div className="arrow" onClick = {() => {removeQty(cart)}}>&#10094;</div>
        <span className='value'>{cart.quantity}</span>
    <div className="arrow" onClick = {() => {addQty(cart)}}>&#10095;</div>
</span>
<span className='price'>{cart.price}</span>
        <div className='remove-button' onClick = {() => {removeItem(cart)}}>&times;</div>
    </div>
)

const matchDispatchToProps = dispatch => ({
    removeItem:item => dispatch(removeItemAction(item)),
    addQty:item => dispatch(addItemAction(item)),
    removeQty:item => dispatch(removeItemLeft(item))
})

const matchStateToProps = createStructuredSelector({
    cartItem:saveaccumulatedValueToCache,
    removeItem:removeaccumulatedValueToCache   
})

export default connect(matchStateToProps,matchDispatchToProps)(checkoutItem);     