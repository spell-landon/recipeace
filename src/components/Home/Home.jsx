import React from 'react';
import { useState, useEffect } from 'react';
import styles from './Home.module.css';
import fruit from '../../assets/fruit-bg.jpg';

function Home({ handleSubmit, handleChange, searchString, show, lastSearch }) {
  // Mount animation
  const [render, setRender] = useState(false);
  useEffect(() => {
    if (show) {
      setRender(true);
    }
  }, [show]);
  function onAnimationEnd() {
    if (!show) {
      setRender(false);
    }
  }
  return (
    render && (
      <main className={styles.home_container}>
        <img src={fruit} alt='fruit' />
        <div
          className={styles.textContainer}
          style={{ animation: `${show ? 'fadeIn' : 'fadeOut'} 1.5s` }}
          onAnimationEnd={onAnimationEnd}>
          <span>Hungry?</span>
          <span>Stressed?</span>
          <span>We have what you need.</span>
          <h2>
            Find your Reci
            <span
              style={{
                animation: `${show ? `moveShadowIn` : `moveShadowOut`} 1.5s`,
              }}>
              peace
            </span>
            .
          </h2>
          <form
            onSubmit={handleSubmit}
            style={{ animation: `${show ? 'fadeUp' : 'fadeDown'} 1.5s` }}>
            <input
              type='text'
              name='searchBar'
              id='searchBar'
              className={styles.searchBar}
              onChange={handleChange}
              value={lastSearch}
              placeholder='ex: chicken, tofu, juice, smoothie'
              autoComplete='off'
            />

            <input type='submit' value='' className={styles.submitBtn} />
          </form>
        </div>
      </main>
    )
  );
}

export default Home;
