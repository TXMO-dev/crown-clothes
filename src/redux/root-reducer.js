import {combineReducers} from 'redux';

import Userreducer from './user/user-reducer';

export default combineReducers({
    user:Userreducer   
});