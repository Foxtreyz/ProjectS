import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import projectsLogo from './projects.png';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [closingLogin, setClosingLogin] = useState(false);
  const [closingRegister, setClosingRegister] = useState(false);

  const loginRef = useRef(null);
  const registerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setClosingLogin(true);
        setTimeout(() => {
          setShowLogin(false);
          setClosingLogin(false);
        }, 500);
      } else if (registerRef.current && !registerRef.current.contains(event.target)) {
        setClosingRegister(true);
        setTimeout(() => {
          setShowRegister(false);
          setClosingRegister(false);
        }, 500);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleButtonClick = () => {
    setShowLogin(true);
  };

  const handleRegisterButtonClick = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const handleConfirmRegisterButton = () => {
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const birthdate = document.getElementById('birthdate').value;

    const data = {
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email,
      password: password,
      birthdate: birthdate
    };

    fetch('register.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        //Server response. console.log MUST CHANGE
        console.log(result);
      })
      .catch(error => {
        //Manages any error
        console.error(error);
      });
  };

  return (
    <div className="App">
      <div className="centered">
        <img src={projectsLogo} alt="Project S logo. May change!" className="logo" />
        <div className="menu">
          <button className="menuItem" onClick={handleButtonClick}>START "PROJECT S-ING" NOW!</button>
        </div>
      </div>
      {(showLogin) && (
        <div className={`overlay ${closingLogin ? 'closing' : ''}`}>
          {showLogin && (
            <div ref={loginRef} className="login">
              <div className="loginContainer">
                <div className="inputGroup">
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" placeholder="your@registeredEmail.net" />
                </div>
                <div className="inputGroup">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" placeholder="********" />
                </div>
                <button className="loginButton">Login!</button>
                <button className="registerButton" onClick={handleRegisterButtonClick}>
                  Don't you have an account?
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      {(showRegister) && (
        <div className={`overlay ${closingRegister ? 'closing' : ''}`}>
          {showRegister && (
            <div ref={registerRef} className="register">
              <div className="registerContainer">
                <div className="inputGroup">
                  <label htmlFor="name">First is first. What's your name?</label>
                  <div className="namesContainer">
                    <input type="text" id="firstname" placeholder="My first name is..." />
                    <input type="text" id="lastname" placeholder="My last name is..." />
                  </div>
                </div>
                <div className="inputGroup">
                  <label htmlFor="username">Choose an username</label>
                  <input type="text" id="username" placeholder="My username is..." />
                </div>
                <div className="inputGroup">
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" placeholder="your@registeredEmail.net" />
                </div>
                <div className="inputGroup">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" placeholder="********" />
                </div>
                <div className="inputGroup">
                  <label htmlFor="birthdate">Date of birth</label>
                  <input type="date" id="birthdate" name="birthdate" />
                </div>
                <button className="registerButton" onClick={handleConfirmRegisterButton}>
                  Register now!
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      <div className="info1">
        <img src={projectsLogo} alt="NO RATE LIMITS" className="info1-image" />
        <div className="info1-text">
          WE DON'T RATE LIMIT OUR USERS!
        </div>
      </div>
    </div>
  );
}

export default App;
