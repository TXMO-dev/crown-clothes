import {usertypes} from './user.types'

export const checkusersession = () => ({
    type:usertypes.CHECK_USER_SESSION
})
export const signingooglestart = () => ({
    type:usertypes.SIGNIN_GOOGLE_START
})


export const emailgooglestart = (emailandpassword) => ({
    type:usertypes.EMAIL_GOOGLE_START,
    payload:emailandpassword
})


export const signoutsession = _ => ({
    type:usertypes.SIGN_OUT_SESSION
})

export const signoutsuccessful = _ => ({
    type:usertypes.SIGN_OUT_SUCCESSFUL
})

export const signoutfailure = error => ({
    type:usertypes.SIGN_OUT_FAILURE,
    payload:error
})


export const signingooglefail = error => ({
    type:usertypes.SIGNIN_FAIL,
    payload:error
})



export const emailgooglesuccess = current_user => ({
    type:usertypes.SIGNIN_SUCCESS,
    payload:current_user
}) 


export const signupstart = signup_info => ({
    type:usertypes.SIGNUP_START,
    payload:signup_info
})




