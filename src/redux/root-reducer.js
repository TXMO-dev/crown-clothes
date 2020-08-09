import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import Userreducer from './user/user-reducer';
import Cartreducer from './cart/cart-reducer';
import Listreducer from './list/list.reducer';
import Shopreducer from './shop/shop.reducer'
import storage from 'redux-persist/lib/storage'; //access path to local storage

const persistConfig = {
    key:'root', //key similiar to getitem
    storage, //where wewill want to put our persisted file in
    whitelist: ['cart'] //slice of state we want to persist in local storage user is already handled by firebase
}
const rootreducer = combineReducers({
    user:Userreducer,
    cart:Cartreducer,
    list:Listreducer,
    shop:Shopreducer      
});   

export default persistReducer(persistConfig,rootreducer) //method to finally persist with our configuration details and rootreducer