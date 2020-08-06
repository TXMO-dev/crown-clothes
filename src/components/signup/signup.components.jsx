import React from 'react';
import {auth,joiningAuthToDatabase} from './../../firebase/firebase.utils';
import './signup.styles.scss';
import Forminput from './../form-input/form-input.components';
import Custombutton from './../custom-button/custom-button.components';

class Signup extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmpassword:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName,email,password,confirmpassword} = this.state;

        if(password !== confirmpassword){
            alert('passwords do not match');
            return;
        }
    try{
        const {user} = await auth.createUserWithEmailAndPassword(email,password);
            if(user){
                await joiningAuthToDatabase(user,{displayName});
            }
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmpassword:''
            })  
    }catch(err){
        console.error(err);    
    }      
    }

     handleChange = event => {
        const {name,value} = event.target;
        this.setState({[name]:value});
    }

    render(){
        const {displayName,email,password,confirmpassword} = this.state;
        return(
            <div className='sign-up'>
            <h1 className='title'>Do not have an Account</h1>
            <span>Please signup here</span>
            <form className='sign-up-form' onSubmit = {this.handleSubmit}>
                <Forminput
                type='text'
                name='displayName'
                label='displayName'
                value={displayName}
                handleChange = {this.handleChange}      
                required
                />

                <Forminput
                type='email'
                name='email'
                label='email'
                value={email}
                handleChange = {this.handleChange}
                required
                />

                <Forminput
                type='password'
                name='password'
                label='password'
                value={password}
                handleChange = {this.handleChange}
                required
                />

                <Forminput
                type='password'
                name='confirmpassword'
                label='confirmpassword'
                value={confirmpassword}
                handleChange = {this.handleChange}
                required 
                />

                <Custombutton type = "submit">
                    SIGN UP  
                </Custombutton>  
            </form>
            </div>
            
        )
    }
}

export default Signup;