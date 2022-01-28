import React, {useState} from 'react';

const MovieTile = ({movie, addMovieToFavorites, removeMovieFromFavorites}) => {
    const [isAdded, setIsAdded] = useState(false);

    const handleAddMovie = () => {
        setIsAdded(true);
        addMovieToFavorites(movie);
    }

    const handleRemoveMovie = () => {
        setIsAdded(false);
        removeMovieFromFavorites(movie);
    }


  return (
    <div className="card w-100 movie-card bg-dark text-white text-center rounded">
        <img className="card-img-top img-fluid" src={movie.Poster} alt={movie.Title}/>
        <div className="card-body d-flex flex-column movie-body">
            <h5 className="card-title h5 justify-content-center">{movie.Title}</h5>
            <p className="card-text justify-content-center">{movie.Year}</p>
            {!isAdded&& <button className="btn btn-secondary text-align-center btn-block margin-top-auto" onClick={handleAddMovie}>Add to Favorites
            </button>
            }
            {isAdded && <button className="btn btn-light text-black text-align-center btn-block margin-top-auto" onClick={handleRemoveMovie}>Remove From Favorites</button>
            }
        </div>
    </div>
  )
};

export default MovieTile;
