import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import fruit from '../../assets/fruit-bg.jpg';

function Home({ data, setData, handleSubmit, handleChange, searchString }) {
  return (
    <main className={styles.home_container}>
      <img src={fruit} alt='fruit' />
      <div className={styles.textContainer}>
        <span>Hungry?</span>
        <span>Stressed?</span>
        <span>We have what you need.</span>
        <h2>
          Find your Reci<span>peace</span>.
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='searchBar'
            id='searchBar'
            className={styles.searchBar}
            onChange={handleChange}
            value={searchString}
            placeholder='ex: chicken, tofu, juice, smoothie'
            autoComplete='off'
          />
          {/* <Link to='/recipes'> */}
          <input type='submit' value='' className={styles.submitBtn} />
          {/* </Link> */}
        </form>
      </div>
    </main>
  );
}

export default Home;
