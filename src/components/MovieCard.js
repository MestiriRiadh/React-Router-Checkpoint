import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
function MovieCard(props) {
  return (
    <Link to={`/details/${props.movie.title}`}>
      <div className="movie-card">
        <img src={props.movie.poster_path} width="400"></img>
        <h1>{props.movie.title}</h1>
        <ReactStars
          value={props.movie.vote_average}
          key={props.movie.title}
          count={5}
          size={25}
          edit={false}
          activeColor="#ffd700"
        />
        <p className="movie-desc">{props.movie.overview}</p>
      </div>
    </Link>
  );
}
export default MovieCard;
