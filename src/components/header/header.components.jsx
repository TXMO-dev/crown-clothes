import React from 'react'
import './header.styles.scss'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {ReactComponent as Logo} from './../../assets/crown.svg';
//import {auth} from './../../firebase/firebase.utils';
import Carticon from './../cart-icon/cart-icon.component';
import Cartdropdown from './../cart-dropdown/cart-dropdown.components';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUserOutput} from './../../redux/user/user.selectors';
import {saveHiddenCartToLocaleCache} from './../../redux/cart/cart.selectors';
import { signoutsession } from '../../redux/user/user.action';
   
const Header = ({currentUser,hidden,signoutsession}) => (
    <div className="header">
        <Link className = "logo-container" to='/'>
            <Logo className = "logo"/>
        </Link>
        <div className = "options">
            <Link className="option" to='/shop'>SHOP</Link>
            <Link className="option" to='/contact'>CONTACT</Link>
            
            {
                currentUser ?
                    <div className="option" onClick={() => {signoutsession()}}> SIGN OUT </div> :      
                    <Link className="option" to='/signin'> SIGNIN </Link>

            } 
            
            <Carticon/>      
            

        </div>
        {
            hidden ? null :
            <Cartdropdown/>         
        }
        
    </div>
)
const matchStateToProps = createStructuredSelector({
    currentUser:selectCurrentUserOutput,
    hidden:saveHiddenCartToLocaleCache
})

const matchDispatchToProps = dispatch => ({
    signoutsession: _ => dispatch(signoutsession())
});


export default connect(matchStateToProps,matchDispatchToProps)(Header);