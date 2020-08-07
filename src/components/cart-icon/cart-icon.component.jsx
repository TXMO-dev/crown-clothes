import React from 'react';
import {ReactComponent as Cart} from './../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import {cartAction} from './../../redux/cart/cart-actions';
import {saveaccumulatedValueToCache} from './../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

const cartIcon = ({cartAction,cartItem}) => (
    <div className='cart-icon' onClick = {cartAction}>
        <Cart className='shopping-icon'/>
<span className='item-count'>{cartItem}</span>  
    </div>       
    
);

const matchStateToProps = createStructuredSelector({
    cartItem:saveaccumulatedValueToCache   
})  


const toMatchDispatchToProp = dispatch => ({
    cartAction: () => dispatch(cartAction())      
});  

export default connect(matchStateToProps,toMatchDispatchToProp)(cartIcon);