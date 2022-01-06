import React from 'react';
import { useEffect } from 'react';
import styles from './Recipes.module.css';
import fruit from '../../assets/fruit-bg.jpg';
import InputField from '../InputField/InputField';
import RecipeCard from '../RecipeCard/RecipeCard';
import { useParams } from 'react-router-dom';

function Recipes({
  data,
  setData,
  handleChange,
  handleSubmit,
  searchString,
  setSearchString,
  setLastSearch,
  searchOptions,
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

  if (data.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <main className={styles.recipes_container}>
      <img src={fruit} alt='fruit' className={styles.background} />
      <section className={styles.recipes_page}>
        <InputField
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchString={searchString}
          getRandom={getRandom}
        />
        <h1>
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
    </main>
  );
}

export default Recipes;
