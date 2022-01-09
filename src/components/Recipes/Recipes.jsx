// dependencies
import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// styles
import styles from './Recipes.module.css';
// components
import InputField from '../InputField/InputField';
import RecipeCard from '../RecipeCard/RecipeCard';
import Footer from '../Footer/Footer';

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
  // Get the search parameters from searchString
  const { search } = useParams(searchString);
  // Return a random option for the random api fetch
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
  // API call based on search String
  function getRecipeSearch() {
    let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${searchOptions.apiId}&app_key=${searchOptions.apiKey}&random=true`;
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
  // API call based on random search option
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
  // When component loads, get the recipeSearch data
  useEffect(() => {
    getRecipeSearch();
    return setData([]);
  }, []);

  // If there is no data to display, show a no results page.
  if (data.length === 0 || data.hits.length === 0) {
    return (
      <div className={styles.loading}>
        <div>
          <p>
            No result found!<br></br>Go back to the homepage to try again!
            <br></br>
          </p>
          <Link to='/' className={styles.homeLink}>
            Home
          </Link>
        </div>
      </div>
    );
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
            : `Recipes`}
        </h1>
        {/* <p className={styles.description}>
          Check out some random categorized recipes to find something new!
          <br></br>Or, try searching something specific in the bar above.
        </p> */}
        <ul>
          {data.hits.map((recipe, index) => (
            <li key={index}>
              <RecipeCard recipe={recipe} />
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </div>
  );
}

export default Recipes;
