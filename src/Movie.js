import React from 'react';
import './Movie.css';


function MoviePoster(){
  return(
    <div>
      <h2>do</h2>
      <img src="http://www.econovill.com/news/photo/201808/343844_214721_575.JPG"/>
    </div>
  )
}


function Movie(){
  return(
    <div>
      <h1>Movie component</h1>
      <MoviePoster/>
    </div>

  )
}


export default Movie;
