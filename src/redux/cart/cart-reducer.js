import Carttypes from './cart-types';

const INITIAL_STATE = {
    hidden:true
}

const cartReducer = (currentstate = INITIAL_STATE,action) => {
    switch(action.type){
        case Carttypes.TOGGLE_DROPDOWN:
            return{
                ...currentstate,
                hidden: !currentstate.hidden
            }
        default:
            return currentstate
    }
    
}

export default cartReducer;      