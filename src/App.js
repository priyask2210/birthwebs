// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleCardClick = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <div className="app">
      <div className={`birthdayCard ${isCardOpen ? 'open' : ''}`} onClick={handleCardClick}>
        <div className="cardFront">
          <div className="box">
            <h3 className="happy">HAPPY BIRTHDAY</h3>
          </div>
          <div className="balloons">
            <div className="balloon-1"></div>
            <div className="balloon-2"></div>
            <div className="balloon-3"></div>
            <div className="balloon-4"></div>
          </div>
        </div>
        <div className="cardInside">
          <p>Happy birthday </p>
        </div>
      </div>
    </div>
  );
}

export default App;
