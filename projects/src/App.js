import './App.css';
import projectsLogo from './projects.png';

function App() {
  return (
    <div className="App">
      <div className="centered">
        <img src={projectsLogo} alt="Project S logo. May change!" className="logo" />
        <div>
          <span className="loginButton">Login</span>
          <span className="registerButton">Register now!</span>
        </div>
      </div>
      <div className="topLeft">
        <div className="topLeft-image">
          
        </div>
        <div className="topLeft-text">

        </div>
      </div>
    </div>
  );
}

export default App;