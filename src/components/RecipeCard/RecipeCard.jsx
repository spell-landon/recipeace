import React from 'react';
import { useState, useEffect } from 'react/cjs/react.development';
import styles from './RecipeCard.module.css';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';

function RecipeCard({ recipe }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!recipe) {
      return <p className={styles.loading}>Try searching for something!</p>;
    } else {
      return recipe;
    }
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  function openRecipe() {
    setIsOpen(!isOpen);
  }

  function picAvailable() {
    //   THUMBNAIL, SMALL, REGULAR, LARGE
    if (recipe.recipe.images?.SMALL)
    if (recipe.recipe.images.SMALL?.url) {
      return recipe.recipe.images.SMALL.url;
    } else if (!recipe.recipe.images.SMALL) {
      return recipe.recipe.images.THUMBNAIL.url;
    } else if (!recipe.recipe.images.SMALL && !recipe.recipe.images.THUMBNAIL) {
      return recipe.recipe.image;
    } else {
      return null;
    }
  }

  return (
    <div className={isOpen ? styles.cardContainerActive : styles.cardContainer}>
      <div className={styles.cardContent}>
        <img
          src={picAvailable()}
          alt={recipe.recipe.label}
          className={styles.foodImg}
        />

        <section className={styles.textArea}>
          <h1>
            <a
              target='_blank'
              href={recipe.recipe.url}
              rel='noreferrer'
              className={styles.recipeLink}>
              {recipe.recipe.label}
            </a>
          </h1>
          <section className={styles.quickInfo}>
            <div>
              <h2>
                Cuisine: <span>{recipe.recipe.cuisineType}</span>
              </h2>
            </div>
            <div>
              <h2>
                Dish Type: <span>{recipe.recipe.dishType}</span>
              </h2>
            </div>
            <div>
              <h2>
                Source: <span>{recipe.recipe.source}</span>
              </h2>
            </div>
          </section>
        </section>
      </div>
      {isOpen ? <AdditionalInfo recipe={recipe} /> : ''}
      <div className={styles.showML} onClick={openRecipe}>
        {isOpen ? `Show Less` : `Show More`}
      </div>
    </div>
  );
}

export default RecipeCard;
