import React from "react";
import DEFAULT_PLACEHOLDER_IMAGE from "../utils/placeholder.jpg";
import { useHistory } from "react-router";
import { getMovieDetail, addFavoriteMovie, removeFavoriteMovie } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import UseAnimation from "react-useanimations";
import heart from "react-useanimations/lib/heart";


const MovieComponent = ({ movie }) => {
  let { favoritemovies } = useSelector(state => state.data);
  let initialState = (favoritemovies.filter(favmovie => movie.imdbID === favmovie.imdbID).length > 0);
  let history = useHistory();
  let dispatch = useDispatch();

  const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  const handleMovieDetail = (id) => {
    dispatch(getMovieDetail(id));
    history.push(`/detail/${id}`);
  };

  const handleFavorites = () => {
    console.log("In the handle fav method ", initialState);
    if (initialState) {
      console.log("In the if block before dispatch action ")
      dispatch(removeFavoriteMovie(movie));
      console.log("In the if block after dispatch action ")
    }
    else {
      console.log("In the else block before dispatch action ")
      dispatch(addFavoriteMovie(movie));
      console.log("In the else block after dispatch action ")
    }
  };

  return (
    <div>
      <div
        className="card"
        style={{ width: "18rem" }}
      >
        <img className="card-img-top" style={{ cursor: "pointer" }} src={poster} alt="cardimage" onClick={() => handleMovieDetail(movie.imdbID)} />
        <div className="card-body">
          <h5 className="card-title">{movie.Title}</h5>
          <p className="card-text">{movie.Year}</p>
            <div style={{display:"flex"}}>
              <UseAnimation
                reverse={initialState}
                onClick={() => {
                  handleFavorites(initialState)
                }}
                size={30}
                wrapperStyle={{
                  margin: "0px 10px",
                  cursor: "pointer"
                }}
                animation={heart}
                pathCss="fill: #f54c4c;cursor:pointer"
                strokeColor="red"
              />
              <span> {(initialState ? "Remove from Favorites" : "Add to Favorites")}</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MovieComponent;
