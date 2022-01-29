import React from 'react';
import { Movie } from '../../interfaces/MovieInterface';

interface FavoriteMovieItemsProps {
  key: number,
  favMovie: Movie
}

const FavoriteMoviesItem = ({favMovie}: FavoriteMovieItemsProps) => {

  return (
      <p className="bg-dark text-white mt-2 mb-2 p-2 h4">{favMovie.Title}</p>
  );
};

export default FavoriteMoviesItem;
