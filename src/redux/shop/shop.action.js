import SHOP_INFO from './shop.type'



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
});





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