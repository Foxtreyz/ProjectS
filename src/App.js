import './App.css';
import projectsLogo from './projects.png';

function App() {
  return (
    <div className="App">
      <div className="centered">
        <img src={projectsLogo} alt="Project S logo. May change!" className="logo" />
        <div className="menu">
          <span className="menuItem">START "PROJECT S-ING" NOW!</span>
        </div>
      </div>
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