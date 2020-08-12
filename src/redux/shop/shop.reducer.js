
import SHOP_INFO from './shop.type';

const INITIAL_STATE = {
    shop:null
}

const shopReducer = (currentState = INITIAL_STATE,action) => {
    switch(action.type){
        case SHOP_INFO.UPDATE_COLLECTION:
            return{
                ...currentState,
                shop:action.payload
            }
        default:
            return currentState
    }
}

export default shopReducer;