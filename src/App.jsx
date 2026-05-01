import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="iconContainer">
          <svg 
            viewBox="0 0 24 24" 
            width="64" 
            height="64" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="icon"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
        <h1 className="title">System Under Repair</h1>
        <p className="message">
          There is an issue with the project and some errors have occurred. We are currently working on fixing them.
        </p>
        <div className="pulseContainer">
          <div className="pulseDot"></div>
          <span className="statusText">Resolving Issues</span>
        </div>
      </div>
    </div>
  );
}

export default App;
