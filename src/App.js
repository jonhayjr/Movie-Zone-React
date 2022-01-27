import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

/*Import Components*/ 
import Header from './components/Header/Header';

const apiKey = process.env.REACT_APP_MOVIES_API_KEY;

const App = () => {

  const [movies, setMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const defaultSearch = 'marvel';
    const URL = `https://www.omdbapi.com/?apiKey=${apiKey}&type=movie&s=${defaultSearch}`;
    axios.get(URL)
          .then(
            res => {
              setMovies(res.data.Search);
            })
            .catch(err => {
              console.log(err);
            })
  }, [])

  return (
    <div className="App">
      <Header/>

    </div>
  );
}

export default App;
