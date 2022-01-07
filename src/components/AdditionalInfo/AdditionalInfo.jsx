// dependencies
import React from 'react';
// styles
import styles from './AdditionalInfo.module.css';

function AdditionalInfo({ recipe }) {
  return (
    <section className={styles.additionalInfo}>
      <div className={styles.upper}>
        <h3 className={styles.title}>
          Servings: <span>{recipe.recipe.yield}</span>
        </h3>
        <h3 className={styles.title}>
          Calories: <span>{Math.floor(recipe.recipe.calories)}</span>
        </h3>
        <h3 className={styles.title}>
          Cook Time: <span>{recipe.recipe.totalTime} min</span>
        </h3>
      </div>
      <section className={styles.lower}>
        <div className={styles.ingredients}>
          <h3 className={styles.title}>Ingredients</h3>
          <ul>
            {recipe.recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient.text}</li>
            ))}
          </ul>
        </div>
        <div className={styles.healthLabels}>
          <h3 className={styles.title}>Health Labels</h3>
          <ul>
            {recipe.recipe.healthLabels.map((label, index) => (
              <li key={index}>{label}</li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
}

export default AdditionalInfo;
