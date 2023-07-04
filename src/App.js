import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import projectsLogo from './projects.png';

function App() {
  //Controls the login window, that opens when clicking the "START PROJECT S-ING" NOW!"
  const [showLogin, setShowLogin] = useState(false); 
  const [closingLogin, setClosingLogin] = useState(false);
  const loginRef = useRef(null);

  useEffect(() => { //Handle click outside the login window to close it.
    const handleClickOutside = (event) => {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setClosingLogin(true);
        setTimeout(() => {
          setShowLogin(false);
          setClosingLogin(false);
        }, 500);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleButtonClick = () => { //Show login window when button is clicked
    setShowLogin(true);
  }

  return (
    <div className="App">
      <div className="centered">
        <img src={projectsLogo} alt="Project S logo. May change!" className="logo" />
        <div className="menu">
          <button className="menuItem" onClick={handleButtonClick}>START "PROJECT S-ING" NOW!</button>
        </div>
      </div>
      {showLogin && (
        <div className={`overlay ${closingLogin ? 'closing' : ''}`}>
          <div ref={loginRef} className="login">
            <div className="loginContainer">
              <button className="loginButton">I already have an account</button>
              <button className="registerButton">I want my Project S account!</button>
            </div>
          </div>
        </div>
      )};
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