import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="Header">
        <p className="Title">Dog Breeds</p>
        <ul className="nav">
            <li className="nav-link">Home</li>
            <li className="nav-link">Breeds</li>
            <li className="nav-link">About</li>
        </ul>
    </div>
  );
}

export default Header;
