import React from 'react';
import styles from './Home.module.css';

function Home({
  handleSubmit,
  handleChange,
  searchString,
  setSearchString,
  show,
  lastSearch,
}) {
  return (
    <div className={styles.home_container}>
      <div className={styles.textContainer}>
        <span>Hungry?</span>
        <span>Stressed?</span>
        <span>We have what you need.</span>
        <h2>
          Find your Reci
          <span>peace</span>.
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

          <input type='submit' value='' className={styles.submitBtn} />
        </form>
      </div>
    </div>
  );
}

export default Home;
