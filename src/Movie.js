import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';


function MoviePoster({poster}){
  return(
    <div>
      <img src={poster}/>
    </div>
  )
}

MoviePoster.propTypes = {
  poster:PropTypes.string.isRequired,
}

function Movie({title, poster}){
  return(
    <div>
      <h1>{title}</h1>
      <MoviePoster poster={poster}/>
    </div>
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster:PropTypes.string.isRequired,
}

export default Movie;
