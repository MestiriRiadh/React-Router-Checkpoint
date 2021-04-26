import ReactStars from "react-rating-stars-component";

const Details = (props) => {
  console.log(props);
  const movie = props.films.find((el) => el.title === props.match.params.name);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <h1>{movie.title}</h1>
      <ReactStars
        value={movie.vote_average}
        key={movie.title}
        count={5}
        size={25}
        edit={false}
        activeColor="#ffd700"
      />
      <p>{movie.overview}</p>
      <button onClick={() => props.history.goBack()}>GO BACK</button>
    </div>
  );
};
export default Details;
