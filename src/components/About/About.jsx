import React from 'react';
import styles from './About.module.css';
import fruit from '../../assets/fruit-bg.jpg';

function About(props) {
  return (
    <main className={styles.about_container}>
      <img src={fruit} alt='fruit' />
      <div className={styles.text_container}>
        <h1>About</h1>
        <p>
        Recipeace is a website that was built out of both passion for coding and an interest in cooking. This site utilizes the Edamam API to gather the recipes and display their data. 
        </p>
        <br></br>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, sint!
        </p>
      </div>
    </main>
  );
}

export default About;
