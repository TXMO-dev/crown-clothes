import React from 'react';
import './cart-dropdown.styles.scss';
import Custombutton from './../custom-button/custom-button.components';
import {connect} from 'react-redux';
import Cartitem from './../cart-item/cart-item.components';
import {saveCartItemsToLocalCache} from './../../redux/cart/cart.selectors';

const cartDropdown = ({cartItem}) => (
    <div className = 'cart-dropdown'>
        <div className='cart-items'>
            {
            cartItem.map(cart =><Cartitem key={cart.id} cart={cart}/>)
            }
        </div>
        <Custombutton>GO TO CHECKOUT</Custombutton>
    </div>
);
const mapStateToProps = root_reducer => ({
    cartItem:saveCartItemsToLocalCache(root_reducer)
})
export default connect(mapStateToProps)(cartDropdown);  