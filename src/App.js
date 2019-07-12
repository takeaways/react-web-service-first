import React, {useState, useEffect} from 'react';
import './App.css';
import Movie from './Movie';

function App() {
//lifCycle
// Render: componentWillMount() -> render() -> componentDidMount()
// update: componentWillReceiveProps -> shouldComponentUpdate()
          // -> componentWillUpdate() -> render() -> componentDidUpdate()
  const [movies, setMovies] = useState(null);

  //componentDidMount
  useEffect(()=>{
    _getMovies();
  },[]);

  const _getMovies = async () => {
    const movies = await _callAPI();
    setMovies(movies);
  }

  const _callAPI = () => {
    const url = "https://yts.lt/api/v2/list_movies.json?sort_by=like_count"
    return fetch(url)
    .then(res => res.json())
    .then(json => json.data.movies)
    .catch(e=>console.error(e));
  }

  const _renderMovies = () => {
    return movies.map((movie, index) =>
    <Movie
      key={movie.id}
      id={movie.id}
      title={movie.title}
      poster={movie.medium_cover_image}
      genres={movie.genres}
      synopsis={movie.synopsis}
    />)
  }

  return (
    <div className="App">
      {  movies ? _renderMovies() : "Loading..."}
    </div>
  );
}



export default App;
