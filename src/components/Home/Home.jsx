// dependencies
import React from 'react';
// styles
import styles from './Home.module.css';

function Home({
  handleSubmit,
  handleChange,
  searchString,
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
            required
          />

          <input type='submit' value='Search' className={styles.submitBtn} />
        </form>
      </div>
    </div>
  );
}

export default Home;
