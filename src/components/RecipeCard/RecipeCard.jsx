import React from 'react';
import { useState, useEffect } from 'react/cjs/react.development';
import styles from './RecipeCard.module.css';

function RecipeCard({ recipe }) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (!recipe) {
      return <p className={styles.loading}>Try searching for something!</p>;
    } else {
      return recipe;
    }
  }, []);

  function openRecipe() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={isOpen ? styles.cardContainerActive : styles.cardContainer}>
      <div className={styles.cardContent}>
        <img
          src={recipe.recipe.images.SMALL.url}
          alt={recipe.recipe.label}
          className={styles.foodImg}
        />
        <section className={styles.textArea}>
          <h1>{recipe.recipe.label}</h1>
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
      {isOpen ? (
        <section className={styles.additionalInfo}>
          <div className={styles.first}>
            <h3>Ingredients</h3>
            <ul>
              {recipe.recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text}</li>
              ))}
            </ul>
          </div>
          <div className={styles.second}>
            <h3>Cooking Instructions</h3>
          </div>
          <div className={styles.third}>
            <h3>Settings</h3>
          </div>
        </section>
      ) : (
        ''
      )}
      <div className={styles.showML} onClick={openRecipe}>
        {isOpen ? `Show Less` : `Show More`}
      </div>
    </div>
  );
}

export default RecipeCard;
