import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
// import './fontawesome.min.css';

const LoginForm = () => {
  const [passwordType, setPasswordType] = useState('password');
  const [showText, setShowText] = useState('SHOW');
  const [color, setColor] = useState('#222');
  const [isLogin, setIsLogin] = useState(true); // Added state for conditional rendering

  const navigate=useNavigate();

  const handlePasswordVisibility = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      setShowText('HIDE');
      setColor('#3498db');
    } else {
      setPasswordType('password');
      setShowText('SHOW');
      setColor('#222');
    }
  };

  const toggleForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  const handleAuthentication = async (e) => {
    e.preventDefault();  // Prevent default form submission
        // Use navigate instead of history
        navigate("/EventDetails");
        
  };
  

  return (
    <div className="bg-img">
      <div className="content">
        <header>{isLogin ? 'Login Form' : 'Signup Form'}</header>
        <form onSubmit={handleAuthentication}>

        {isLogin ? null : ( // Conditionally render for signup
        <div className="field username">
          <span className="fa fa-user"></span>
          <input type="text" required placeholder="Username" />
        </div>
      )}

          <div className="field">
            <span className="fa fa-user"></span>
            <input type="text" required placeholder="Email" />
          </div>


          <div className="field space">
            <span className="fa fa-lock"></span>
            <input
              type={passwordType}
              className="pass-key"
              required
              placeholder="Password"
            />
            <span className="show" style={{ color }} onClick={handlePasswordVisibility}>
              {showText}
            </span>
          </div>
          <div className="pass">
            <a href="#">Forgot Password?</a>
          </div>
          <div className="field">
            <input type="submit" value={isLogin ? 'LOGIN' : 'SIGNUP'} />
          </div>
        </form>

        <div className="signup">
          {isLogin ? (
            <>
              Don't have an account?
              <a href="#" onClick={toggleForm}>
                Signup Now
              </a>
            </>
          ) : (
            <>
              Already have an account?
              <a href="#" onClick={toggleForm}>
                Login Now
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;