import React from 'react';
import './cart-dropdown.styles.scss';
import Custombutton from './../custom-button/custom-button.components';
import {connect} from 'react-redux';
import Cartitem from './../cart-item/cart-item.components';
import {saveCartItemsToLocalCache} from './../../redux/cart/cart.selectors';
import {withRouter} from 'react-router-dom';

const cartDropdown = ({cartItem,history}) => (
    <div className = 'cart-dropdown'>
        <div className='cart-items'>
            {cartItem.length ?   
            (cartItem.map(cart =>(<Cartitem key={cart.id} cart={cart}/>)))        
            : (<span className='empty-message'>Your Cart Is Empty</span>)
            }
        </div>
        <Custombutton onClick={() => {history.push('/checkout')}}>GO TO CHECKOUT</Custombutton>           
    </div>
);
const mapStateToProps = root_reducer => ({
    cartItem:saveCartItemsToLocalCache(root_reducer)
})
export default withRouter(connect(mapStateToProps)(cartDropdown));             