import React from 'react';
import './checkout.styles.scss'
import {createStructuredSelector} from 'reselect';
import {saveCartItemsToLocalCache,saveaccumulatedTotalToCache} from '../../redux/cart/cart.selectors';
import {connect} from 'react-redux';
import Checkoutitem from './../../components/checkout-item/checkout-item.components';

const checkoutPage = ({cartItems,total}) => (
    <div className = "checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>price</span>
            </div>
            <div className="header-block">
                <span>remove</span>
            </div>
        </div>
        {   cartItems.length ?
            (cartItems.map(cart => <Checkoutitem key={cart.id} cart={cart}/>)) :
            (<div>You have no items in your cart</div>)
        }
        <span>${total}</span>
    </div>
)
const matchStateToProps = createStructuredSelector({
    cartItems:saveCartItemsToLocalCache,
    total:saveaccumulatedTotalToCache
})
export default connect(matchStateToProps)(checkoutPage);