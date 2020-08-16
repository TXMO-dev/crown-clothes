
import SHOP_INFO from './shop.type';

const INITIAL_STATE = {
    shop:null,
    isFetching:true,
    errorMessage:undefined
}

const shopReducer = (currentState = INITIAL_STATE,action) => {
    switch(action.type){
        case SHOP_INFO.FETCH_COLLECTION_START:
            return{   
                ...currentState,
                isFetching:true
            }
        case SHOP_INFO.FETCH_COLLECTION_SUCCESS:
            return{
                ...currentState,
                isFetching:false,
                shop:action.payload
            }
        case SHOP_INFO.FETCH_COLLECTION_FAIL:
            return{
                ...currentState,
                isFetching:false,
                errorMessage:action.payload
            }
        
        default:
            return currentState
    }
}

export default shopReducer;