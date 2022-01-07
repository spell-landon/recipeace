import React from 'react';
import { useState, useEffect } from 'react';
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
    return () => {
      setIsOpen(false);
    };
  }, []);

  function openRecipe() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={isOpen ? styles.cardContainerActive : styles.cardContainer}>
      <div className={styles.cardContent}>
        {recipe.recipe.images?.SMALL?.url ? (
          <img
            src={recipe.recipe.images.SMALL?.url}
            alt={recipe.recipe.label}
            className={styles.foodImg}
          />
        ) : (
          <p className={styles.foodImg}>image</p>
        )}

        <section className={styles.textArea}>
          <div className={styles.titleSection}>
            <h1>{recipe.recipe.label}</h1>
            <span>
              <a
                target='_blank'
                href={recipe.recipe.url}
                rel='noreferrer'
                className={styles.recipeLink}>
                View Full Recipe
              </a>
            </span>
          </div>
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
