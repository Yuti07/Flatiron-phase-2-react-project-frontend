import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/main.jsx">Home</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
