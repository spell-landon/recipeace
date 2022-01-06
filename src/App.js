// Components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Recipes from './components/Recipes/Recipes';
import About from './components/About/About';
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
  const navigate = useNavigate();
  function getRecipes() {
    let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=${searchOptions.apiId}&app_key=${searchOptions.apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(data);
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
    navigate(`/recipes/${searchString}`);
  }
  function handleChange(e) {
    setSearchString(e.target.value);
  }

  return (
    <div>
      <Header />
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
            />
          }
        />
        <Route
          path='/recipes'
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
            />
          }
        />

        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
