import React from 'react';
import styles from './Home.module.css';
import fruit from '../../assets/fruit-bg.jpg';

function Home(props) {
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
        <form>
          <input
            type='text'
            name='searchBar'
            id='searchBar'
            className={styles.searchBar}
            placeholder='ex: chicken, tofu, juice, smoothie'
            autoComplete='off'
          />
          <input type='submit' value='' />
        </form>
      </div>
    </main>
  );
}

export default Home;
