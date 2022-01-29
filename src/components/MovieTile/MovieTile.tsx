import React from 'react';
import { Movie } from '../../interfaces/MovieInterface';

  interface MovieTileProps {
      movie: Movie,
      addMovieToFavorites: (movie: Movie) => void,
      removeMovieFromFavorites: (movie: Movie) => void,
      favoriteMovies: Movie[]
  }

const MovieTile = ({movie, addMovieToFavorites, removeMovieFromFavorites, favoriteMovies}: MovieTileProps) => {

    const handleAddMovie = () => {
        addMovieToFavorites(movie);
    }

    const handleRemoveMovie = () => {
        removeMovieFromFavorites(movie);
    }

    const checkIfFavorited = (movie: Movie) => {
        return favoriteMovies.indexOf(movie) >= 0 ? true : false;
    }


  return (
    <div className="card w-100 movie-card bg-dark text-white text-center rounded">
        <img className="card-img-top" src={movie.Poster} alt={movie.Title}/>
        <div className="card-body d-flex flex-column movie-body">
            <h5 className="card-title h5 justify-content-center">{movie.Title}</h5>
            <p className="card-text justify-content-center">{movie.Year}</p>
            {!checkIfFavorited(movie) && <button className="btn btn-secondary text-align-center btn-block margin-top-auto" onClick={handleAddMovie}>Add to Favorites
            </button>
            }
            {checkIfFavorited(movie) && <button className="btn btn-light text-black text-align-center btn-block margin-top-auto" onClick={handleRemoveMovie}>Remove From Favorites</button>
            }
        </div>
    </div>
  )
};

export default MovieTile;
