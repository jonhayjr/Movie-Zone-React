import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

/*Import Components*/ 
import Header from './components/Header/Header';
import Filterbox from './components/Filterbox/Filterbox';
import FavoriteMoviesContainer from './components/FavoriteMoviesContainer/FavoriteMoviesContainer';
import FavoriteMoviesItem from './components/FavoriteMoviesItem/FavoriteMoviesItem';
import MovieTileContainer from './components/MovieTileContainer/MovieTileContainer';
import MovieTile from './components/MovieTile/MovieTile';

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

  const addMovieToFavorites = (movie) => {
    setFavoriteMovies(prev => {
      const data = [...prev];
      data.push(movie);
      return data;
    })
  }

  const removeMovieFromFavorites = (movie) => {
    setFavoriteMovies(prev => {
      const data = [...prev];
      const newFavorites = data.filter(m => {
        return m.Title !== movie.Title;
      })
      return newFavorites;
    })
  }

  return (
    <div className="App">
      <Header/>
      <Filterbox searchForMovie={searchForMovie}/>
      <FavoriteMoviesContainer favoriteMovies={favoriteMovies}>
        {
          favoriteMovies.map((favMovie, index) => (
            <FavoriteMoviesItem key={index} favMovie={favMovie}/>
          ))
        }
      </FavoriteMoviesContainer>
      <MovieTileContainer>
        {
          movies.map((movie, index) => (
            <MovieTile key={index} movie={movie} addMovieToFavorites={addMovieToFavorites} removeMovieFromFavorites={removeMovieFromFavorites}/>
          ))
        }
      </MovieTileContainer>
    </div>
  );
}

export default App;
