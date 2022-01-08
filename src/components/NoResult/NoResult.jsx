import React from 'react';
import styles from './NoResult.module.css';
function NoResult(props) {
  return (
    <div className={styles.noResultContainer}>
      <section className={styles.text_container}>
        <h1>Uh oh!</h1>
        <p>Looks like there's nothing here!</p>
        <p>Try going to the Home page and try a different search!</p>
      </section>
    </div>
  );
}

export default NoResult;
