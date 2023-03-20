import React from 'react';
import Movie from './Movie';

const MovieList = ({ movie }) => {
  function renderMovies(movies) {
    let moviesElemets = [];
    if(movies) {
      moviesElemets = movies.map((e, index) => {
        return <Movie key={index} movie={e}></Movie>;
      })
      return moviesElemets;
    }
    return <div />;
  }
  return (
    <div>
      {renderMovies(movie)}
    </div>
  );
};

export default MovieList;
