import React from 'react';
import './signin.styles.scss';
import Forminput from './../form-input/form-input.components';
import Custombutton from './../custom-button/custom-button.components';
import {signinwithgoogle, auth} from './../../firebase/firebase.utils';

class Signin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email,password}=this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
        }catch(err){
            console.error(err)
        }
        
    }  

    handleChange = event => {
        const {name,value} = event.target;
        this.setState({[name]:value});
    }
    render(){
        return(
            <div className = "signin">
                <h1>Already have an Account</h1>
                <span>please enter your details</span>
                <form onSubmit = {this.handleSubmit}>
                    <Forminput
                        name="email" 
                        type = "email" 
                        value = {this.state.email} 
                        handleChange = {this.handleChange}
                        label='email'
                    />
                    <Forminput 
                        name="password" 
                        type = "password" 
                        value = {this.state.password}
                        handleChange = {this.handleChange}
                        label='password' 
                    />

                    <Custombutton type = "submit">
                        Sign in
                    </Custombutton> 
                    <Custombutton type="button" isGoogleSignIn onClick = {signinwithgoogle}>
                        Sign in with Google
                    </Custombutton>                     
                </form>
            </div>
        )
    }
}

export default Signin;