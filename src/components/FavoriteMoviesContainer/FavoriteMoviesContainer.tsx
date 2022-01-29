import React from 'react';

interface FavoriteMoviesContainerProps {
  children: React.ReactNode,
  favoriteMovies: {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
  }[]
}


const FavoriteMoviesContainer = ({children, favoriteMovies}: FavoriteMoviesContainerProps) => {

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
