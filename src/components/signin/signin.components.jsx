import React from 'react';
import './signin.styles.scss';
import Forminput from './../form-input/form-input.components';
import Custombutton from './../custom-button/custom-button.components';
import {connect} from 'react-redux';
import {signingooglestart, emailgooglestart} from './../../redux/user/user.action';

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
        const {signinwithemail} = this.props;
        const {email,password}=this.state;
        signinwithemail({email,password});
        
    }  

    handleChange = event => {
        const {name,value} = event.target;
        this.setState({[name]:value});
    }
    render(){
        const {signinwithgooglestart} = this.props;
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
                    <Custombutton type="button" isGoogleSignIn onClick = {() => {signinwithgooglestart()}}>
                        Sign in with Google
                    </Custombutton>                     
                </form>
            </div>
        )
    }
}
const matchDispatchToProps = dispatch => ({
    signinwithgooglestart: () => dispatch(signingooglestart()),
    signinwithemail: emailandpass => dispatch(emailgooglestart(emailandpass))
})
export default connect(null,matchDispatchToProps)(Signin);