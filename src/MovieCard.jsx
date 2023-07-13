const MovieCard = ({ movie, onClick }) => {
  const handleCardClick = () => {
    onClick(movie);
  };

  return (
    <div className="movie" onClick={handleCardClick}>
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
