import React, { useState } from 'react';
import axios from 'axios';
import './LoginSignUp.css';
 import { useNavigate } from 'react-router-dom';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/password.png';
import passward_icon from '../Assets/email.png';

export default function Login() {
    const [action, setAction] = useState("sign Up");
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [resetPasswordMode, setResetPasswordMode] = useState(false);
    const [newPassword, setNewPassword] = useState('');

     const navigate=useNavigate();

    const handleLogin = async() => {
        try {
            const response = await axios.post('http://localhost:3001/login/login', {
                email,
                password
            });
            console.log(response.data.message);
            // history.push("/Header");
            navigate('/Header');
        } catch (error) {
            console.error('Login failed');
        }
    };

    const handleSignUp = async() => {
        try {
            const response = await axios.post('http://localhost:3001/signup/sign', {
                username,
                email,
                password
            });
            console.log(response.data);
            navigate('/Header');
        } catch (error) {
           console.error('Signup failed');
        } 
    };

    const handleForgetClick = () => {
        setResetPasswordMode(true);
    };

    const handleResetPassword = () => {
        console.log('Password changed successfully');
        setResetPasswordMode(false);
    };

    return ( 
        <>
            <div className="main_back">
                <div className="main">
                    <div className="side"></div>

                    {resetPasswordMode ? (
                        <div className="password-reset-container">
                            <h2>Password Reset</h2>
                            <div className="passset">
                                <div className="input input_pass">
                                    <div className="passtext"></div>
                                    <img src={passward_icon} alt="" />
                                    <div className="input_container">
                                        <input
                                            type="password"
                                            placeholder="New Password"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button onClick={handleResetPassword}>Reset Password</button>
                        </div>
                    ) : (
                        <>
                            <div className="container">
                                <img src="" alt="" />
                                <div className="header">
                                    <div className="text">{action} {}</div>
                                    <div className="underline"></div>
                                </div>

                                <div className="inputs">
                                    {action === "Login" ? (
                                        <div></div>
                                    ) : (
                                        <div className="input">
                                            <img src={user_icon} alt="" />
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                        </div>
                                    )}
                                    <div className="input">
                                        <img src={email_icon} alt="" />
                                        <input
                                            type="email"
                                            placeholder="Email Id"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="input">
                                        <img src={passward_icon} alt="" />
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>

                                    {action === "sign Up" ? (
                                        <div></div>
                                    ) : (
                                        <div className="forgot-passward">
                                            Lost Password? <span onClick={handleForgetClick}>Click Here!</span>
                                        </div>
                                    )}

                                    <div className="submit-container">
                                        <div
                                            className={action === "Login" ? "submit gray" : "submit"}
                                            onClick={() => {
                                                setAction("sign Up");
                                                handleSignUp();
                                            }}
                                        >
                                            Sign Up
                                        </div>
                                        <div
                                            className={action === "sign Up" ? "submit gray" : "submit"}
                                            onClick={() => {
                                                setAction("Login");
                                                handleLogin();
                                            }}
                                        >
                                            Login
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
