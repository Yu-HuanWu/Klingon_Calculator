import React from "react";
import "./stylesheets/App.css";
import "./stylesheets/Calculator.css";
import Calculator from "./components/Class";

const App = () => {
  return (
    <div className="App">
      <header>
        <img src="klingonlogo.png" className="logo" alt="Klingon Logo" />
      </header>
      <Calculator />
      <footer>
        <p>Created by Yu-Huan Wu</p>
        <div className="footer-info">
          <a href="https://github.com/Yu-HuanWu" target="_blank" title="My GitHub link" rel="noopener noreferrer">
            <img src="githublogo.gif" alt="GitHub waving gif made by Yu-Huan Wu" height="70"/>
          </a>
          <a href="https://github.com/Yu-HuanWu/Klingon_Calculator#readme" target="_blank" title="Info about this calculator" rel="noopener noreferrer">
            <img src="question.svg" alt="Star Trek question mark" height="70" />
          </a>
          <a href="https://www.linkedin.com/in/yu-huan-wu" target="_blank" title="My LinkedIn. If you want to hire me just holler at me my dude" rel="noopener noreferrer">
            <img src="linkedin.gif" alt="LinkedIn bouncing gif made by Yu-Huan Wu" height="70"/>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;