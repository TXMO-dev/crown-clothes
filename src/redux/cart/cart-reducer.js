import Carttypes from './cart-types';
import {cartItemsToAdd,cartItemsToRemove} from './cart.utils';

const INITIAL_STATE = {
    hidden:true,
    cartItem:[]
}

const cartReducer = (currentstate = INITIAL_STATE,action) => {
    switch(action.type){
        case Carttypes.TOGGLE_DROPDOWN:
            return{
                ...currentstate,
                hidden: !currentstate.hidden
            }
        case Carttypes.ALL_ITEMS:
            return{
                ...currentstate,
                cartItem:cartItemsToAdd(currentstate.cartItem,action.payload)
            }
        case Carttypes.REMOVE_ITEMS:
            return{
                ...currentstate,
                cartItem:currentstate.cartItem.filter(cartitem => (
                    cartitem.id !== action.payload.id
                ))
            }
        case Carttypes.REMOV_LEFT:
            return{
                ...currentstate,
                cartItem:cartItemsToRemove(currentstate.cartItem,action.payload)
            }
        case Carttypes.CLEAR_CART:
            return{
                ...currentstate,
                cartItem:[]   
                }
        default:
            return currentstate
    }   
    
}

export default cartReducer;      