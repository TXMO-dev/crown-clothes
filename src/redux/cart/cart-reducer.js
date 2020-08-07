import Carttypes from './cart-types';
import {cartItemsToAdd} from './cart.utils';

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
        default:
            return currentstate
    }
    
}

export default cartReducer;      