import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="title-container">
        <h2>Math Magicians</h2>
      </div>
      <div className="link-container">
        <Link to="/">Home </Link>
        <span> | </span>
        <Link to="/BeerItem">Beer Item </Link>
        <span> | </span>
      </div>
    </div>
  );
}

export default Navbar;
