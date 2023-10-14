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
      <Link to="/" style={linkStyles} activeStyle={{background: "darkblue"}}>Home</Link>
      <Link to="/search" style={linkStyles} activeStyle={{background: "darkblue"}}>Search</Link>
      <Link to="/contact" style={linkStyles} activeStyle={{background: "darkblue"}}>Contact</Link>
    </>
  );
};


export default NavBar;