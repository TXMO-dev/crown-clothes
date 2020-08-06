import {combineReducers} from 'redux';

import Userreducer from './user/user-reducer';
import Cartreducer from './cart/cart-reducer';

export default combineReducers({
    user:Userreducer,
    cart:Cartreducer      
});