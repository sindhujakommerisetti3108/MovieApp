import React from "react";
import DEFAULT_PLACEHOLDER_IMAGE from "../utils/placeholder.jpg";
import { useHistory } from "react-router";
import { getMovieDetail, addFavoriteMovie } from "../Redux/action";
import { useDispatch } from "react-redux";

const MovieComponent = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  let history = useHistory();
  let dispatch = useDispatch();

  const handleMovieDetail = (id) => {
    dispatch(getMovieDetail(id));
    history.push(`/detail/${id}`);
  };

  const handleFavorites = (movie) => {
    alert("Movied added to Favorites");
    console.log("Favorite Movies", movie);
    dispatch(addFavoriteMovie(movie));
  };

  return (
    <div>
      <div
        className="card"
        style={{ width: "18rem" }}
      >
        <img className="card-img-top" style={{cursor:"pointer"}} src={poster} alt="cardimage" onClick={() => handleMovieDetail(movie.imdbID)}/>
        <div className="card-body">
          <h5 className="card-title">{movie.Title}</h5>
          <p className="card-text">{movie.Year}</p>
          <button
            className="btn btn-primary btn-detail"
            style={{ marginLeft: "10px" }}
            onClick={() => handleFavorites(movie)}
          >
            Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieComponent;
