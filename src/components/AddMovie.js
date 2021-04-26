import { useState } from "react";

function AddMovie(props) {
  const [newMovie, setNewMovie] = useState({
    overview: "",
    poster_path: "",
    title: "",
    vote_average: "",
  });
  const handelChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNewMovie(newMovie);
    props.setShow(true);
  };
  return (
    <div className="addMovie">
      <form onSubmit={handleSubmit}>
        <label>Movie Title</label>
        <input
          type="text"
          placeholder="Movie Name"
          name="title"
          onChange={handelChange}
        />
        <label>Description</label>
        <input
          type="text"
          placeholder="Movie Description"
          name="overview"
          onChange={handelChange}
        />
        <label>Poster URL</label>
        <input
          type="text"
          placeholder="Movie Poster URL"
          name="poster_path"
          onChange={handelChange}
        />
        <label>Rating</label>
        <input
          type="Number"
          max="5"
          min="1"
          placeholder="Movie Rating"
          name="vote_average"
          onChange={handelChange}
        />
        <div className="btns">
          <input type="submit" value="Confirm" />
          <input type="reset" value="Cancel" />
        </div>
      </form>
    </div>
  );
}
export default AddMovie;
