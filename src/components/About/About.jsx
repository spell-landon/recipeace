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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, sint!
        </p>
      </div>
    </div>
  );
}

export default About;
