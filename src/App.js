import React, {useState, useEffect} from 'react';
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
];

function App() {
//lifCycle
// Render: componentWillMount() -> render() -> componentDidMount()
// update: componentWillReceiveProps -> shouldComponentUpdate()
          // -> componentWillUpdate() -> render() -> componentDidUpdate()
  const [greeting, setGreeting] = useState('Hello');

  //componentDidMount 
  useEffect(()=>{
      setGreeting("Hello again");
  },[])

  return (
    <div className="App">
    {greeting}
      { movies.length > 0 ? movies.map((movie, index)=><Movie key={index} title={movie.title} poster={movie.poster}/>) : "영화정보가 없습니다."}
    </div>
  );
}


export default App;
