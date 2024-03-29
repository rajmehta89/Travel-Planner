import './App.css';
import Navbar from '../../project/src/Components/Navbar';
import TextForm from './components/Textform';
import React, { useState } from 'react';


export default function App() {
    const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#042743';
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
        }
    }
    return ( <
        > { /* <Navbar title="TextUtils" aboutText="About TextUtils" /> */ } { /* <Navbar/> */ }

        <
        Navbar title = "TextUtils"
        mode = { mode }
        toggleMode = { toggleMode }
        /> <
        div className = "container my-3" >
        <
        TextForm heading = "Enter the text to analyze below"
        mode = { mode }
        /> <
        /div> <
        /> 
    );
}