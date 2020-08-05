import {usertypes} from './user.types'
const INITIAL_STATE = {
    currentUser:null
}

const userReducer = (currentReducer = INITIAL_STATE,action) => {
    switch(action.type){
        case usertypes.SET_CURRENT_USER:
            return{
                ...currentReducer,
                currentUser:action.payload
            }
        default:
            return currentReducer
    }

}

export default userReducer;