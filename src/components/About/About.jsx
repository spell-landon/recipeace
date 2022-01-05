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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis
          hic minima, velit odio repellat explicabo optio iusto quis unde quos.
          Veritatis, dolorum atque commodi iste vitae aliquam tempore enim
          doloremque, deserunt natus accusamus provident nisi impedit quisquam
          eveniet ipsam reprehenderit earum deleniti dolor iure consectetur.
          Exercitationem ad labore atque.
        </p>
        <br></br>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum saepe
          debitis quam maxime laboriosam, sunt laudantium
        </p>
      </div>
    </main>
  );
}

export default About;
