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
          <p>Swarreeyyy,<br></br>Piranthanaal nalVaazhthukkal.First of all I miss you so much seriyaaa. Ithu evlo vithyaasama irukum nu therila aana naa kathukitathu vachu unakku ethaachu panni kudukanum nu irunchu. I just wanna say that I love you so much and I would just do almost anything for you. I wish I was there with you right now. I would have taken care of you like my baby.And Please know that you are doing great and I am so so freaking proud of you. Our frinendship is a treasure to me and I am just so grateful to have you in my life. Stay super strong, just like you always do swarr. I am here with you no matter what. Loooovvveee youuuuu. </p>
        </div>
      </div>
    </div>
  );
}

export default App;
