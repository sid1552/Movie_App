import './App.css';
import searchicon from './search.svg';
import MovieCard from './MovieCard';
import MovieDetails from './MovieDetails';
import React, { useEffect, useState } from 'react';
import moviesData from './movies.json';
import DayNightCycle from './DayNightCycle';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

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

  const handleModeToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    findMovies(''); // Show all movies by default
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = '#212426';
    } else {
      document.body.style.backgroundColor = '#ffffff';
    }
  }, [darkMode]);

  return (
    <div className="app">
      <a href="/" className="home-link">
        <h1>Friyay Movies</h1>
      </a>

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
        <MovieDetails movie={selectedMovie} darkMode={darkMode} />
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

      <DayNightCycle darkMode={darkMode} onModeToggle={handleModeToggle} />
    </div>
  );
}

export default App;
