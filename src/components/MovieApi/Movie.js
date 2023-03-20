import React from 'react'

const Movie = ({movie}) => {
    return (
          <div>
              <h3>{movie.Title}</h3>
              <p>{movie.Type}</p>
              <p>{movie.Year}</p>
              <img alt='Bild' src={movie.Poster}/>
            </div>
        );
    }

export default Movie;

