import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <div className="Top-carusel">
        
        <h1 className="Cta-text">Find your perfect dog breed</h1>
        <a href="#" className="Cta-btn">here</a>

      </div>

      <div className="Start-section">
        <h2 className="start-title">Where to start?</h2>
        <div className="start-text-container">
          <p className="start-text">You  don’t know where to start ? Don’t worry, we got you covered , just see a random dog  breed by clicking </p>
          <a href="#" className="start-btn">here</a>
        </div>
      </div>
        
    </div>
  );
}

export default Home;
