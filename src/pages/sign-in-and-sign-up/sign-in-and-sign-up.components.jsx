import React from 'react';

import './sign-in-and-sign-up.styles.scss';
import Signin from './../../components/signin/signin.components';
import Signup from './../../components/signup/signup.components'

const signInAndSignUp = () => (
    <div className = "signinandsignup">
        <Signin/> 
        <Signup/> 
    </div>
);

export default signInAndSignUp;  
