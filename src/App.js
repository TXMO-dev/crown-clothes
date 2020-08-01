import React from 'react';
//import logo from './logo.svg';
import './App.css';

import {Route} from 'react-router-dom';

import Homepage from './pages/homepage/hompage.components';

function App() {
  return (
    <div>
      <Route exact path='/' component={Homepage} />       
    </div>
  );
}

export default App;
