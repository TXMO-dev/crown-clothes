import React from 'react';
//import logo from './logo.svg';
import './App.css';

import {Route, Switch, Redirect} from 'react-router-dom';

import Homepage from './pages/homepage/hompage.components';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.components';
import Signinandsignup from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import {auth,joiningAuthToDatabase} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import Setcurrentuser from './redux/user/user.action';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUserOutput} from './redux/user/user.selectors';
import Checkoutpage from './pages/checkout/checkout.components';
//import {selectShopItems} from './redux/shop/shop.select';
//import {addCollectionsAndDocuments} from './firebase/firebase.utils';

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
            ...snapshot.data()  //but for the shop we just did the .data in a new firebase function 
          }
        })
      }
      );
    }

    //addCollectionsAndDocuments('collections',collectionsArray.map(({title,items}) => ({title,items})));       
    //setCurrentUser({currentUser:userAuth});

      
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
          <Route  path='/shop' component={Shop} />  
          <Route exact path='/signin' render = {() => (this.props.currentUser ? (
          <Redirect to='/'/>         
          ) : (
          <Signinandsignup/>
          ) 
          )
          } 
          />
          <Route exact path='/checkout' component={Checkoutpage} />            
        </Switch>
      </div>   
      
    );
  }
  
}
const matchStateToProp = createStructuredSelector({
  currentUser: selectCurrentUserOutput,
  //collectionsArray: selectShopItems 
})
const matchDispatchtoState = dispatch =>({
  setCurrentUser:user => dispatch(Setcurrentuser(user))
});
export default connect(matchStateToProp,matchDispatchtoState)(App);
