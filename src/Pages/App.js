import "../App.css";
import { useState } from "react";
import AddMovie from "../components/AddMovie";
import Filter from "../components/Filter";
import MovieList from "../components/MovieList";

function App(props) {
  const [show, setShow] = useState(true);

  const [movies, setMovies] = useState(props.films);
  const [text, setText] = useState("");
  const handelText = (title) => {
    setText(title);
  };
  const [stars, setStars] = useState(1);
  const handelStars = (num) => {
    setStars(num);
  };

  const addNewMovie = (movie) => {
    setMovies([movie, ...movies]);
  };
  return (
    <div>
      {show ? (
        <>
          <div className="filter">
            <Filter
              handelStars={handelStars}
              stars={stars}
              handelText={handelText}
            />
            <button onClick={() => setShow(false)}>ADD NEW MOVIE</button>
          </div>
          <MovieList
            movies={movies.filter(
              (el) =>
                el.vote_average >= stars &&
                el.title.toLowerCase().includes(text.toLowerCase().trim())
            )}
          />
        </>
      ) : (
        <AddMovie addNewMovie={addNewMovie} setShow={setShow} />
      )}
    </div>
  );
}

export default App;
