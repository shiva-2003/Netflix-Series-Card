const SeriesCard = (props) => {
  const { name, id, img_url, rating, description, cast, genre, watch_url } = props.data;

  const btn_style = {
    padding: "0.8rem 1.2rem",
    border: "none",
    backgroundColor:`${rating>=8.5?"lightgreen":"burlywood"}`,
    borderRadius: "2px",
    fontSize: "1.5rem",
    fontWeight: "400",
    color: "white",
    cursor: "pointer",
  };

  const rating_cond=rating>=8.5?"superhit":"average"

  return (
    <li className="cards">
      <div className="series-img">
        <img src={img_url} alt={id} width="40%" height="40%" />
      </div>
      <div className="card-contents">
        <h2>Name: {name} </h2>
        <h3>Rating: <span className={`rating ${rating_cond}`}>{rating}</span> </h3>
        <p className="text-3xl font-bold underline">About: {description}</p>
        <p>Genere: {genre}</p>
        <h4>
          Casting: <span>{cast}</span>
        </h4>
        <a href={watch_url} target="_blank">
          <button style={btn_style}>watch Now</button>
        </a>
      </div>
    </li>
  );
};
export default SeriesCard;
