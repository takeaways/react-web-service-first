import React from 'react';
import './Movie.css';


function MoviePoster({poster}){
  return(
    <div>
      <img src={poster}/>
    </div>
  )
}


function Movie({movie, poster}){
  return(
    <div>
      <h1>{movie}</h1>
      <MoviePoster poster={poster}/>
    </div>

  )
}


export default Movie;
