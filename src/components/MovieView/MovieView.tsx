import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Movie } from '../../interfaces/MovieInterface';

/*Import Components*/ 
import Filterbox from '../Filterbox/Filterbox';
import FavoriteMoviesItem from '../FavoriteMoviesItem/FavoriteMoviesItem';
import FavoriteMoviesContainer from '../FavoriteMoviesContainer/FavoriteMoviesContainer';
import MovieTileContainer from '../MovieTileContainer/MovieTileContainer';
import MovieTile from '../MovieTile/MovieTile';
import Spinner from '../Spinner/Spinner';

const apiKey = process.env.REACT_APP_MOVIES_API_KEY;

const MovieView = () => {

    const [movies, setMovies] = useState<Movie[]>([]);
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const defaultSearch = 'marvel';
    getMovies(defaultSearch);
  }, []);

  const getMovies = (search: string) => {
    //Set isLoading to true
    setIsLoading(true);

    const URL = `https://www.omdbapi.com/?apiKey=${apiKey}&type=movie&s=${search}`;
    axios.get(URL)
          .then(
            res => {
              setMovies(res.data.Search);
              setIsLoading(false);
            })
            .catch(err => {
              console.log(err);
            })
  }

  const searchForMovie = (search: string) => {
    getMovies(search);
  }

  const addMovieToFavorites = (movie: Movie) => {
    setFavoriteMovies(prev => {
      const data = [...prev];
      data.push(movie);
      return data;
    })
  }

  const removeMovieFromFavorites = (movie: Movie) => {
    setFavoriteMovies(prev => {
      const data = [...prev];
      const newFavorites = data.filter(m => {
        return m.Title !== movie.Title;
      })
      return newFavorites;
    })
  }

  return (
    <>
      <Filterbox searchForMovie={searchForMovie}/>
      <FavoriteMoviesContainer favoriteMovies={favoriteMovies}>
        {
          favoriteMovies?.map((favMovie, index) => (
            <FavoriteMoviesItem key={index} favMovie={favMovie}/>
          ))
        }
      </FavoriteMoviesContainer>  
      {isLoading 
      ? <Spinner/>
      : <MovieTileContainer>
        {
          movies?.map((movie, index) => (
            <MovieTile key={index} movie={movie} addMovieToFavorites={addMovieToFavorites} removeMovieFromFavorites={removeMovieFromFavorites} favoriteMovies={favoriteMovies}/>
          ))
        }
      </MovieTileContainer>}
    </>
  )
};

export default MovieView;
