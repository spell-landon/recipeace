// Components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Recipes from './components/Recipes/Recipes';
import About from './components/About/About';
import Random from './components/Random/Random';
import NoResult from './components/NoResult/NoResult';
// dependencies
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const searchOptions = {
    apiKey: process.env.REACT_APP_EDAMAM_KEY,
    apiId: process.env.REACT_APP_EDAMAM_ID,
  };
  useEffect(() => {
    setData([]);
    setSearchString('');
    setLastSearch('');
  }, []);
  const [data, setData] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [lastSearch, setLastSearch] = useState('');

  // For URL navigation
  const navigate = useNavigate();

  function getRecipes() {
    let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=${searchOptions.apiId}&app_key=${searchOptions.apiKey}`;
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
  function handleSubmit(e) {
    e.preventDefault();
    getRecipes(searchString);
    // For URL navigation
    navigate(`/recipes/${searchString}`);
    setLastSearch('');
    console.log(data);
  }
  function handleChange(e) {
    setSearchString(e.target.value);
    setLastSearch(e.target.value);
  }

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            index
            path='/'
            element={
              <Home
                data={data}
                setData={setData}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                searchString={searchString}
                setSearchString={setSearchString}
                lastSearch={lastSearch}
              />
            }
          />
          <Route
            path='/recipes/'
            element={
              <Recipes
                data={data}
                setData={setData}
                searchString={searchString}
                setSearchString={setSearchString}
                lastSearch={lastSearch}
                setLastSearch={setLastSearch}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                searchOptions={searchOptions}
              />
            }
          />
          <Route
            path='/recipes/:search'
            element={
              <Recipes
                data={data}
                setData={setData}
                searchString={searchString}
                setSearchString={setSearchString}
                lastSearch={lastSearch}
                setLastSearch={setLastSearch}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                searchOptions={searchOptions}
                getRecipes={getRecipes}
              />
            }
          />
          <Route
            path='/random'
            element={
              <Random
                data={data}
                setData={setData}
                searchString={searchString}
                setSearchString={setSearchString}
                lastSearch={lastSearch}
                setLastSearch={setLastSearch}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                searchOptions={searchOptions}
                getRecipes={getRecipes}
              />
            }
          />
          <Route path='/about' element={<About />} />
          <Route path='/*' element={<NoResult />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
