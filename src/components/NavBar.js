import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/search">Search</Link></li>
        {/* Nullish coalescing check for the 'to' prop */}
        <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;