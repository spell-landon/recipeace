// dependencies
import React from 'react';
import { Link } from 'react-router-dom';
// styles
import styles from './Header.module.css';

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
          <Link to='/random'>
            <li>Surprise Me</li>
          </Link>
          {/* <select>
            <option default value='-'>
              Search By...
            </option>
            <option value='Surprise Me'>
              <Link to='/random'>Surprise Me</Link>
            </option>
            <option value='Time of Day'>Time of Day</option>
            <option value='Weather'>Weather</option>
          </select> */}
          <Link to='/about'>
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
