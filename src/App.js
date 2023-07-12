import './App.css';
import searchicon from './search.svg';
import MovieCard from './MovieCard';
import { React, useEffect } from 'react';

// 62932579

const API = 'http://www.omdbapi.com?apikey=62932579';

const movie1 = {
  Title: 'Superman & Lois',
  Year: '2021–',
  imdbID: 'tt11192306',
  Type: 'series',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BOTA2MDVhMWItNTYwYi00OTcyLWJjZmEtNTQ2NTAxMDQyYTQwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg',
};

function App() {
  const findmovie = async (title) => {
    const response = await fetch(`${API}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    findmovie('Superman');
  }, []);

  return (
    <div className="app">
      <h1>Friyay Movies</h1>

      <div className="search">
        <input
          placeholder="Find movies to watch this friday"
          onChange={() => {}}
        ></input>
        <img src={searchicon} alt="search" onClick={() => {}} />
      </div>

      <div className="container"></div>
    </div>
  );
}

export default App;
