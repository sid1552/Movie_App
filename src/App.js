import './App.css'; // Importing CSS file for styling
import searchicon from './search.svg'; // Importing search icon image
import MovieCard from './MovieCard'; // Importing MovieCard component
import MovieDetails from './MovieDetails'; // Importing MovieDetails component
import React, { useEffect, useState } from 'react'; // Importing necessary React components and hooks
import moviesData from './movies.json'; // Importing movie data from a JSON file
import DayNightCycle from './DayNightCycle'; // Importing DayNightCycle component
import Footer from './Footer'; // Importing Footer component

function App() {
  const [movies, setMovies] = useState([]); // State variable to store movies data
  const [searchTerm, setSearchTerm] = useState(''); // State variable to store the search term
  const [selectedMovie, setSelectedMovie] = useState(null); // State variable to store the selected movie
  const [darkMode, setDarkMode] = useState(false); // State variable to store the dark mode state

  const findMovies = (title) => {
    // Function to filter movies based on the search term
    const filteredMovies = moviesData.filter((movie) =>
      movie.Title.toLowerCase().includes(title.toLowerCase())
    );
    setMovies(filteredMovies);
  };

  const handleSearch = () => {
    // Function to handle the search action
    findMovies(searchTerm);
  };

  const handleKeyDown = (e) => {
    // Function to handle keydown event for search
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleMovieClick = (movie) => {
    // Function to handle the click on a movie card
    setSelectedMovie(movie);
  };

  const handleModeToggle = () => {
    // Function to toggle between dark mode and light mode
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // useEffect hook to initialize the movie list and apply dark mode changes
    findMovies('');
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    // useEffect hook to apply background color based on dark mode state
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
      <Footer />
    </div>
  );
}

export default App;
