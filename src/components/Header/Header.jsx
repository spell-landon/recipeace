import React from 'react';
import styles from './Header.module.css';

function Header(props) {
  return (
    <header className={styles.header}>
      <nav>
        <h1>
          Reci<span>peace</span>
        </h1>
        <ul>
          <li>Home</li>
          <li>Recipes</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
