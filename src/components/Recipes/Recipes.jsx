import React from 'react';
import { useEffect } from 'react';
import styles from './Recipes.module.css';
import fruit from '../../assets/fruit-bg.jpg';
import InputField from '../InputField/InputField';
import RecipeCard from '../RecipeCard/RecipeCard';

function Recipes({
  data,
  setData,
  handleChange,
  handleSubmit,
  searchString,
  setSearchString,
  lastSearch,
  setLastSearch,
  searchOptions,
}) {
  function getRandom() {
    let url = `https://api.edamam.com/api/recipes/v2?type=public&q=all&app_id=${searchOptions.apiId}&app_key=${searchOptions.apiKey}&random=true`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLastSearch(searchString);
        setSearchString('');
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        return;
      });
  }
  useEffect(() => {
    getRandom();
    return setData([]);
  }, []);
  if (data.length === 0) {
    return null;
  }
  console.log(data.hits);
  return (
    <main className={styles.recipes_container}>
      <img src={fruit} alt='fruit' />
      <section className={styles.recipes_page}>
        <InputField
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchString={searchString}
        />
        <h1>Recipes</h1>
        <p className={styles.description}>
          Check out some random recipes to find something new!<br></br>Or, try
          searching something specific in the search bar above.
        </p>
        <ul>
          {data.hits.map((recipe, index) => (
            <li key={index}>
              <RecipeCard recipe={recipe} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Recipes;
