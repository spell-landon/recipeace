// dependencies
import React from 'react';
import { useEffect } from 'react/cjs/react.development';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fasSearch } from '@fortawesome/free-solid-svg-icons';
// styles
import styles from './Home.module.css';

function Home({ handleSubmit, handleChange, searchString }) {
  // Change placeholder text
  // https://www.titanwolf.org/Network/q/eec68783-2ff7-45e0-8dbd-d73dbd5eef6c/y
  let options = [
    'chicken',
    'tofu',
    'juice',
    'smoothie',
    'lemons',
    'cookies',
    'stroganoff',
    'chinese',
    'cactus',
    'noodles',
    'beef',
    'ice cream',
    'lasagna',
    'cheese dips',
    'sushi',
    'steak',
    'curry',
    'rice',
  ];
  let counter = 0;
  function changePlaceholder() {
    let placeholder = document.querySelector('#searchBar');
    if (counter >= options.length) {
      counter = 0;
    }
    placeholder.setAttribute('placeholder', options[counter]);
    counter++;
  }
  useEffect(() => {
    setInterval(changePlaceholder, 2000);
    return () => {
      clearInterval(changePlaceholder);
    };
  }, []);

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
            placeholder='beef'
            autoComplete='off'
            required
          />

          <button type='submit' className={styles.submitBtn}>
            <i className='fas fa-search'></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
