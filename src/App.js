import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

/*Import Components*/ 
import Header from './components/Header/Header';
import Filterbox from './components/Filterbox/Filterbox';

const apiKey = process.env.REACT_APP_MOVIES_API_KEY;

const App = () => {

  const [movies, setMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const defaultSearch = 'marvel';
    getMovies(defaultSearch);
  }, []);

  const getMovies = (search) => {
    const URL = `https://www.omdbapi.com/?apiKey=${apiKey}&type=movie&s=${search}`;
    axios.get(URL)
          .then(
            res => {
              setMovies(res.data.Search);
            })
            .catch(err => {
              console.log(err);
            })
  }

  const searchForMovie = (search) => {
    getMovies(search);
  }

  return (
    <div className="App">
      <Header/>
      <Filterbox searchForMovie={searchForMovie}/>
    </div>
  );
}

export default App;
