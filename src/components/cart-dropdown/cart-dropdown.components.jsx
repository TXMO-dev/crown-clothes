import React from 'react';
import './cart-dropdown.styles.scss';
import Custombutton from './../custom-button/custom-button.components';
import {connect} from 'react-redux';
import Cartitem from './../cart-item/cart-item.components';

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
const mapStateToProps = ({cart:{cartItem}}) => ({
    cartItem
})
export default connect(mapStateToProps)(cartDropdown);  