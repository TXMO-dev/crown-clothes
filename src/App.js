import React from 'react';
//import logo from './logo.svg';
import './App.css';

import {Route, Switch} from 'react-router-dom';

import Homepage from './pages/homepage/hompage.components';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.components';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} /> 
        <Route exact path='/shop' component={Shop} />          
      </Switch>
    </div>
    
  );
}

export default App;
