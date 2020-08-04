import React from 'react';
//import logo from './logo.svg';
import './App.css';

import {Route, Switch} from 'react-router-dom';

import Homepage from './pages/homepage/hompage.components';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.components';
import Signinandsignup from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import {auth,joiningAuthToDatabase} from './firebase/firebase.utils';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser:null
    }
  }

  unsubscribedUser = null;

  componentDidMount(){
    this.unsubscribedUser = auth.onAuthStateChanged(async userAuth => {
    if(userAuth){
      const  userRef = await joiningAuthToDatabase(userAuth);
      userRef.onSnapshot(snapshot => {
        this.setState({
          currentUser:{
            id:snapshot.id,
            ...snapshot.data()   
          }
        })
      }
      );
    }

    this.setState({currentUser:userAuth});

      
  }
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
