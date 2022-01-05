import React from 'react';
import { useState, useEffect } from 'react/cjs/react.development';
import styles from './RecipeCard.module.css';

function RecipeCard({ recipe }) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (!recipe) {
      return <p className={styles.loading}>Try searching for something!</p>;
    }
  }, []);
  function openRecipe() {
    setIsOpen(!isOpen);
  }
  function isPicture() {
    if (!recipe.recipe.images.SMALL.url) {
      return <span className={styles.imageTxt}>image</span>;
    } else {
      return recipe.recipe.label;
    }
  }
  return (
    <div className={isOpen ? styles.cardContainerActive : styles.cardContainer}>
      <div className={styles.cardContent}>
        <img src={recipe.recipe.images.SMALL.url} alt={isPicture()} className={styles.foodImg}/>
        <section className={styles.textArea}>
          <h1>{recipe.recipe.label}</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            cum impedit illum ea cupiditate laborum, accusamus nam nostrum
            reprehenderit vel!
          </p>
        </section>
      </div>
      <div className={styles.showML} onClick={openRecipe}>
        {isOpen ? `Show Less` : `Show More`}
      </div>
    </div>
  );
}

export default RecipeCard;
