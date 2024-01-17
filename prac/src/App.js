import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from './Components/Header/Header.js';
import Login from './Components/LoginSignup/Login.js';
import Map from './Components/Surround/Map.js';

function App()
{
    return(
      <Router>  
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/Map" component={Map} />
        <Route path="/Header" component={Header}/>
        </div>
      </Router>  
    );
}

export default App;