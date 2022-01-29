import React from 'react';

interface MovieTileContainerProps {
  children: React.ReactNode
}

const MovieTileContainer = ({children}: MovieTileContainerProps) => {
  return (
    <div className="grid-container p-3">
        {children}
    </div>
  )
};

export default MovieTileContainer;
