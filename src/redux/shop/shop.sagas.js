import SHOP_INFO from './shop.type';
import {takeLatest,call,put, all} from 'redux-saga/effects';
import { firestore,convertFromArrayObjectToListObject } from '../../firebase/firebase.utils';
import { fetchCollectionSuccess, fetchCollectionfail } from './shop.action';


export function* fetchCollectionAsync(){
    try{
        const collectionRef = firestore.collection('collections');
        const collectionSnapshot = yield collectionRef.get();
        const collectionMap = yield call(convertFromArrayObjectToListObject,collectionSnapshot);
        yield put(fetchCollectionSuccess(collectionMap))
    }catch(error){
        yield put(fetchCollectionfail(error.message));
    }
       
}
export function* fetchCollectionStart(){
    yield takeLatest(  
        SHOP_INFO.FETCH_COLLECTION_START,
        fetchCollectionAsync   
    )
}

export function* shopSaga(){
    yield all([call(fetchCollectionStart)]);
}