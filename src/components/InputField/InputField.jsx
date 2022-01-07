// dependencies
import React from 'react';
import { Link } from 'react-router-dom';
// styles
import styles from './InputField.module.css';

function InputField({ handleSubmit, handleChange, searchString, getRandom }) {
  return (
    <div className={styles.inputContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type='text'
          name='search'
          id='search'
          className={styles.search}
          onChange={handleChange}
          value={searchString}
          placeholder='ex: chicken, tofu, juice, smoothie'
          autoComplete='off'
        />
        <input type='submit' value='' className={styles.submit_btn} />
      </form>
      <Link to='/random'>
        <button onClick={getRandom} className={styles.randomBtn}>
          Randomize
        </button>
      </Link>
    </div>
  );
}

export default InputField;
