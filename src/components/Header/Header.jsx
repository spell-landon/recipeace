import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className={styles.header}>
      <nav>
        <Link to='/'>
          <h1>
            Reci<span>peace</span>
          </h1>
        </Link>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/recipes'>
            <li>Recipes</li>
          </Link>
          <Link to='/about'>
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
