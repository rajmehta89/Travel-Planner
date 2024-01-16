import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Header from './Components/Header/Header.js';
import Login from './Components/LoginSignup/Login.js';
import Map from './Components/Surround/Map.js';

function App()
{
    return(
      <>
      <Router>
        <Routes>  
        <Route path="/" element={<Login/>} />
        <Route path="/Map" element={<Map/>} />
        <Route path="/Header" element={<Header/>}/>
        </Routes>
      </Router>  
      </>
    );
}

export default App;