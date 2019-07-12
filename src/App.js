import React from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title:"mov1",
    poster:  "http://www.econovill.com/news/photo/201808/343844_214721_575.JPG",
  },
  {
    title:"mov2",
    poster:  "http://www.econovill.com/news/photo/201808/343844_214721_575.JPG",
  },
  {
    title:"mov3",
    poster:  "http://www.econovill.com/news/photo/201808/343844_214721_575.JPG",
  },
  {
    title:"mov4",
    poster:  "http://www.econovill.com/news/photo/201808/343844_214721_575.JPG",
  },
]

function App() {
  console.log(!movies)
  return (
    <div className="App">
      { movies.length > 0 ? movies.map((movie, index)=><Movie key={index} title={movie.title} poster={movie.poster}/>) : "영화정보가 없습니다."}
    </div>
  );
}

export default App;
