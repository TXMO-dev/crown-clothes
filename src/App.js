import React from 'react';
//import logo from './logo.svg';
import './App.css';

import {Route, Switch} from 'react-router-dom';

import Homepage from './pages/homepage/hompage.components';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.components';
import Signinandsignup from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser:null
    }
  }

  unsubscribedUser = null;

  componentDidMount(){
    this.unsubscribedUser = auth.onAuthStateChanged(user => (
      this.setState({currentUser:user}))       
      );
  }

  componentWillUnmount(){
    this.unsubscribedUser();
  }

  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage} /> 
          <Route exact path='/shop' component={Shop} />  
          <Route exact path='/signin' component={Signinandsignup} />          
        </Switch>
      </div>   
      
    );
  }
  
}

export default App;
