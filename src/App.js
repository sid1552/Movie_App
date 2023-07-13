import './App.css';
import searchicon from './search.svg';
import MovieCard from './MovieCard';
import MovieDetails from './MovieDetails';
import React, { useEffect, useState } from 'react';
import moviesData from './movies.json';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const findMovies = (title) => {
    const filteredMovies = moviesData.filter((movie) =>
      movie.Title.toLowerCase().includes(title.toLowerCase())
    );
    setMovies(filteredMovies);
  };

  const handleSearch = () => {
    findMovies(searchTerm);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  useEffect(() => {
    findMovies(''); // Show all movies by default
  }, []);

  return (
    <div className="app">
      <h1>Friyay Movies</h1>

      <div className="search">
        <input
          placeholder="Find movies to watch this Friday"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <img src={searchicon} alt="search" onClick={handleSearch} />
      </div>

      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} />
      ) : movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} onClick={handleMovieClick} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
