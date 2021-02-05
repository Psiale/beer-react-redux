import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.linkContainer}>
        <Link data-testid="link-test" to="/">Back to Home </Link>
      </div>
    </div>
  );
}

export default Navbar;
