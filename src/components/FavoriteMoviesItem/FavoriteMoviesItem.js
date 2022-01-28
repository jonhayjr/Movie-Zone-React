import React from 'react';

const FavoriteMoviesItem = ({movie}) => {
  return (
      <p className="bg-dark text-white mt-2 mb-2 p-2 h4">{movie.Title}</p>
  );
};

export default FavoriteMoviesItem;
