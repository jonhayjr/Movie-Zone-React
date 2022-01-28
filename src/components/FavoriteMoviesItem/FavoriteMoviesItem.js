import React from 'react';

const FavoriteMoviesItem = ({favMovie}) => {
  return (
      <p className="bg-dark text-white mt-2 mb-2 p-2 h4">{favMovie.Title}</p>
  );
};

export default FavoriteMoviesItem;
