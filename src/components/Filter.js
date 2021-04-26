import ReactStars from "react-rating-stars-component";
function Filter(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Films "
        onChange={(e) => props.handelText(e.target.value)}
      />
      <ReactStars
        count={5}
        size={25}
        value={props.stars}
        activeColor="#ffd700"
        onChange={(x) => props.handelStars(x)}
      />
    </div>
  );
}
export default Filter;
