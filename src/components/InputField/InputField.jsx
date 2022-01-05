import React from 'react';
import styles from './InputField.module.css';

function InputField({ handleSubmit, handleChange, searchString, getRandom}) {
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
      <button onClick={getRandom} className={styles.randomBtn}>Randomize</button>
    </div>
  );
}

export default InputField;
