import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="link-container">
        <Link to="/">Back to Home </Link>
      </div>
    </div>
  );
}

export default Navbar;
