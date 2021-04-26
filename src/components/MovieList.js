import MovieCard from "./MovieCard";

function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
}
export default MovieList;
