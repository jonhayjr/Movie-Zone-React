import React from 'react';

const FavoriteMoviesContainer = ({children, favoriteMovies}) => {

  return (
    <div className="text-center mt-4 mb-4 w-75 mx-auto">
        <h2>Favorite Movies</h2>
        {favoriteMovies.length <= 0 && <p className="h6">You haven't selected any favorites.</p>}
        <div className="mt-2">
            {children}
        </div>
    </div>
  );
};

export default FavoriteMoviesContainer;
