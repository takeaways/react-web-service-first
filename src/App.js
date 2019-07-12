import React from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  "mov1",
  "mov2",
  "mov3",
  "mov4"
]

const poster = [
  "http://www.econovill.com/news/photo/201808/343844_214721_575.JPG",
  "http://www.econovill.com/news/photo/201808/343844_214721_575.JPG",
  "http://www.econovill.com/news/photo/201808/343844_214721_575.JPG",
  "http://www.econovill.com/news/photo/201808/343844_214721_575.JPG"
]

function App() {
  console.log(!movies)
  return (
    <div className="App">
      { movies.length > 0 ? movies.map((movie, index)=><Movie key={index} movie={movie} poster={poster[index]}/>) : "영화정보가 없습니다."}
    </div>
  );
}

export default App;
