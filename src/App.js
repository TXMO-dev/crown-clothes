import React from 'react';
//import logo from './logo.svg';
import './App.css';

import {Route, Switch} from 'react-router-dom';

import Homepage from './pages/homepage/hompage.components';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.components';
import Signinandsignup from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import {auth,joiningAuthToDatabase} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import Setcurrentuser from './redux/user/user.action';

class App extends React.Component {



  unsubscribedUser = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribedUser = auth.onAuthStateChanged(async userAuth => {
    if(userAuth){
      const  userRef = await joiningAuthToDatabase(userAuth);
      userRef.onSnapshot(snapshot => {
        setCurrentUser({
          currentUser:{
            id:snapshot.id,
            ...snapshot.data()   
          }
        })
      }
      );
    }

    setCurrentUser({currentUser:userAuth});

      
  }
    );
  }

  componentWillUnmount(){
    this.unsubscribedUser();
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage} /> 
          <Route exact path='/shop' component={Shop} />  
          <Route exact path='/signin' component={Signinandsignup} />          
        </Switch>
      </div>   
      
    );
  }
  
}
const matchDispatchtoState = dispatch =>({
  setCurrentUser:user => dispatch(Setcurrentuser(user))
})
export default connect(null,matchDispatchtoState)(App);
