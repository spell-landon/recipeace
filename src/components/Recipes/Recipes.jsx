// dependencies
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// styles
import styles from './Recipes.module.css';
// components
import InputField from '../InputField/InputField';
import RecipeCard from '../RecipeCard/RecipeCard';

function Recipes({
  data,
  setData,
  handleChange,
  handleSubmit,
  searchString,
  setSearchString,
  setLastSearch,
  searchOptions,
  getRecipes,
}) {
  const { search } = useParams(searchString);

  function randomSearch() {
    let options = [
      `vegan`,
      `chicken`,
      `tofu`,
      `cookies`,
      `smoothies`,
      `salads`,
      `dessert`,
      `hearty`,
      `soup`,
      `healthy`,
    ];
    let item = options[Math.floor(Math.random() * options.length)];
    return item;
  }

  function getRandom() {
    let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${randomSearch()}&app_id=${
      searchOptions.apiId
    }&app_key=${searchOptions.apiKey}&random=true`;
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

    if (data.length === 0 || data.hits.length === 0) {
      return <p className={styles.loading}>Loading...</p>;
    } 


  return (
    <div className={styles.recipes_container}>
      <section className={styles.recipes_page}>
        <InputField
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchString={searchString}
          getRandom={getRandom}
        />
        <h1 className={styles.mainTitle}>
          {search
            ? search.charAt(0).toUpperCase() + search.slice(1) + ' Recipes'
            : `Random Recipes`}
        </h1>
        <p className={styles.description}>
          Check out some random categorized recipes to find something new!
          <br></br>Or, try searching something specific in the bar above.
        </p>
        <ul>
          {data.hits.map((recipe, index) => (
            <li key={index}>
              <RecipeCard recipe={recipe} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Recipes;
