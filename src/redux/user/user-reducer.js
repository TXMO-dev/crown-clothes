import {usertypes} from './user.types'
const INITIAL_STATE = {
    currentUser:null,
    error:null
}

const userReducer = (currentReducer = INITIAL_STATE,action) => {
    switch(action.type){   
        case usertypes.SIGNIN_SUCCESS:
            return{
                ...currentReducer,
                currentUser:action.payload
            }
        case usertypes.SIGNIN_FAIL: 
        case usertypes.SIGN_OUT_FAILURE:  
            return {
                ...currentReducer,
                error:action.payload    
            }

        case usertypes.SIGN_OUT_SUCCESSFUL:
            return{
                ...currentReducer,
                currentUser:null,
                error:null
            }
        default:
            return currentReducer
    }

}

export default userReducer;