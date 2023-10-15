import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  // Add basic styling for NavLinks
  const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
    }
  return (
    <>
      <Link to="/" style={linkStyles}>Home</Link>
      <Link to="/search" style={linkStyles} >Search</Link>
    </>
  );
};


export default NavBar;