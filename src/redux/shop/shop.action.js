import SHOP_INFO from './shop.type'
import {firestore,convertFromArrayObjectToListObject} from './../../firebase/firebase.utils';


export const fetchCollectionStart = () => ({
    type:SHOP_INFO.FETCH_COLLECTION_START
})

export const fetchCollectionSuccess = normalized_data => ({
    type:SHOP_INFO.FETCH_COLLECTION_SUCCESS,
    payload:normalized_data
})

export const fetchCollectionfail = error_message => ({
    type:SHOP_INFO.FETCH_COLLECTION_FAIL,
    payload:error_message
})

export const fetchCollectionAsync = () => {
    return async dispatch => {
        try {
            const collectionRef = firestore.collection('collections'); //collection refference now lets get its snapshot
            //but before that we need to dispatch collection start for the spinner to start loading
            dispatch(fetchCollectionStart());
            //retreival of collection starts here and now we have access to docs an array of docsnapshot but with
            //collection ref we can go two levels down by using .data()
            const collectionSnapshot = await collectionRef.get();
            const normalized_data = convertFromArrayObjectToListObject(collectionSnapshot);
            dispatch(fetchCollectionSuccess(normalized_data));   
        }catch(err){
            dispatch(fetchCollectionfail(err.message));
        }
        
        
    }
}

/*collectionRef.onSnapshot(async snapshot => {
    try {
        const normalized_data = convertFromArrayObjectToListObject(snapshot)
        //now we have successfully retreived the data and was successful using the observable observer pattern
        //now we have to dispatch it to the reducer
        dispatch(fetchCollectionSuccess(normalized_data));
    }catch(err){
        dispatch(fetchCollectionfail(err.message));
    }
    
})*/