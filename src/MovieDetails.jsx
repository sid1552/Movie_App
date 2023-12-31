import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const MovieDetails = ({ movie, darkMode }) => {
  const [rating, setRating] = useState(null);

  useEffect(() => {
    // Load rating from local storage
    const savedRating = localStorage.getItem(movie.imdbID);
    if (savedRating) {
      setRating(parseInt(savedRating));
    }
  }, [movie.imdbID]);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    localStorage.setItem(movie.imdbID, newRating);
  };

  if (!movie) {
    return null; // Render nothing when movie is not selected
  }

  return (
    <div className={`movie-details ${darkMode ? 'dark' : 'light'}`}>
      <MovieCard movie={movie} disableClick={true} />
      <div className="description">
        <h2>About</h2>
        <p>{movie.Description}</p>
        <div className="rating">
          <h3>Rate this movie:</h3>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${rating >= star ? 'selected' : ''}`}
                onClick={() => handleRatingChange(star)}
              >
                &#9733;
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
