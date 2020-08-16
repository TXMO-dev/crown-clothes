import {takeLatest,put,call,all} from 'redux-saga/effects';
import {auth,google_provider,joiningAuthToDatabase,checkUserAuthentication} from './../../firebase/firebase.utils';
import {usertypes} from './user.types';
import {signingooglefail,emailgooglesuccess,signoutsuccessful,signoutfailure} from './user.action';


export function* authentication_setup(userAuth,additionalData){
    try{
        const userRef = yield call(joiningAuthToDatabase,userAuth,additionalData);
        const userSnapshot = yield userRef.get();
        yield put(emailgooglesuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    }catch(error){
        yield put(signingooglefail(error.message));
    }
}
export function* authenticate_google(){
        const {user} = yield auth.signInWithPopup(google_provider);
        yield call(authentication_setup,user);
}

export function* signinemailprocess({payload:{email,password}}){
        const {user} = yield auth.signInWithEmailAndPassword(email,password);
        yield call(authentication_setup,user)  

}


export function* signinwithgoogle(){
    yield takeLatest(usertypes.SIGNIN_GOOGLE_START,authenticate_google);
}

export function* signinwithemail(){
    yield takeLatest(usertypes.EMAIL_GOOGLE_START,signinemailprocess);
}
export function* check_authentication(){
    try{
        const userAuth = yield checkUserAuthentication();
        if(!userAuth) return;
        yield joiningAuthToDatabase(userAuth);
    }catch(error){
        yield put(signingooglefail(error.message));
    }
    
} 
export function* is_authenticated(){
    yield takeLatest(usertypes.CHECK_USER_SESSION,check_authentication);
}

export function* done_sign_out(){
    try{
        yield auth.signOut();
        yield put(signoutsuccessful())
    }catch(error){
        yield put(signoutfailure(error));
    }
    
}
export function* has_signed_out(){
    yield takeLatest(usertypes.SIGN_OUT_SESSION,done_sign_out)
}
export function* signedupuser({payload:{displayName,email,password,confirmpassword}}){
    if(password !== confirmpassword){
        alert('passwords do not match');
        return;
    }
    const {user} = yield auth.createUserWithEmailAndPassword(email,password);
    yield call(authentication_setup,user,{displayName})
}

export function* sign_up_user(){
    yield takeLatest(usertypes.SIGNUP_START,signedupuser)
}


export default function* Usersaga(){
    yield all([
        call(signinwithgoogle),
        call(signinwithemail),
        call(checkUserAuthentication),
        call(has_signed_out),
        call(sign_up_user)     
    ]);
}