import {all,call,put,takeLatest} from 'redux-saga/effects';
import {usertypes} from '../user/user.types';
import { clearCart } from './cart-actions';


export function* cartiscleared(){
    yield put(clearCart());   
}

export function* clearthecart(){
    yield takeLatest(usertypes.SIGN_OUT_SUCCESSFUL,cartiscleared)
}


export function* cartSaga(){
    yield all([call(clearthecart)])
}