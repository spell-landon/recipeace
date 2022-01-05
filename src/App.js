// Components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Recipes from './components/Recipes/Recipes';
import About from './components/About/About';
// dependencies
import { Routes, Route } from 'react-router-dom';

function App() {
  const searchOptions = {
    apiKey: process.env.REACT_APP_EDAMAM_KEY,
    apiId: process.env.REACT_APP_EDAMAM_ID,
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
