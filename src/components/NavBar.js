// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Recipe List</Link></li>
        <li><Link to="/form">Add Recipe</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;

