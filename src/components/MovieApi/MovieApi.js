import React, { useState } from 'react';
import MovieList from './MovieList';
import Form from './Form';

const MovieApi = () => {
  const [movie, setMovie] = useState([]);

  const handleSearch = (movie) => {
      fetchData(movie);
    }

  function fetchData(movie) {
  fetch(`http://www.omdbapi.com/?apikey=7aeeb96a&s=${movie}`)
  .then((response) => response.json())
  .then((data) => {
        setMovie(data.Search)
  })
  .catch(e => console.log(e));
}

      return (

          <div>
            <Form handleSearch={handleSearch} />
            <MovieList movie={movie} />
        </div>
      ) 
    };

export default MovieApi;