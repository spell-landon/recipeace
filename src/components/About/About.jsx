// dependencies
import React from 'react';
// styles
import styles from './About.module.css';

function About(props) {
  return (
    <div className={styles.about_container}>
      <div className={styles.text_container}>
        <h1>About</h1>
        <p>
          Recipeace is a website that was built out of both passion for coding
          and an interest in cooking. This site utilizes the Edamam API to
          gather the recipes and display their data.
        </p>
        <br></br>
        <p>
          The 'Show More' button on any of the recipe results pages, will
          display more information about each recipe. The 'View Full Recipe'
          will take you the the original recipe link which contains all other
          information, along with cooking instructions.
        </p>
        <br></br>
        <p>
          If you would like to check out the GitHub repo, you can find it{' '}
          <a
            target='_blank'
            href='https://github.com/spell-landon/recipeace'
            rel='noreferrer'>
            here
          </a>
          !
        </p>
      </div>
    </div>
  );
}

export default About;
