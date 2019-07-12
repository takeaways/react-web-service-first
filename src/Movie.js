import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
import LineEllipsis from 'react-lines-ellipsis';


function MoviePoster({poster, title}){
  return <img className="Movie__Poster"src={poster} alt={`${title} Movie Poster`}/>
}
MoviePoster.propTypes = {
  poster:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
}

function Movie({title, poster, genres, synopsis}){
  return(
    <div className="Movie">
      <div className="Movie__Column">
        <MoviePoster poster={poster} title={title}/>
      </div>
      <div className="Movie__Column">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre, i) => <span key={i} className="Movie__Genre"> {genre} </span>)}
        </div>
        <p className="Movie__Synopsis">
          <LineEllipsis
            text={synopsis}
            maxLine='3'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
        </p>
      </div>
    </div>
  )
}
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster:PropTypes.string.isRequired,
  genres:PropTypes.array.isRequired,
  synopsis:PropTypes.string.isRequired,
}

export default Movie;
