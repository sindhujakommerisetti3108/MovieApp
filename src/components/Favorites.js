import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import DEFAULT_PLACEHOLDER_IMAGE from "../utils/placeholder.jpg";
const Favorites = () => {
    const { favoritemovies } = useSelector(state => state.data);
    let poster;
    let history = useHistory();
    const uniquefavMovies = favoritemovies.filter((movie, index) =>
        (favoritemovies.findIndex((a) => a.imdbID === movie.imdbID) === index));
    return (
        <div className="content-container">
            <button style={{ margin: "10px",backgroundColor: "rgba(3,37,65,1)" }} onClick={() => history.push("/home")} className="btn btn-primary">Back</button>
            {(uniquefavMovies.length ? <div className="favorite-container">
                {uniquefavMovies.map((favmovie) => (
                    <div className="card" style={{ width: "18rem" }} key={favmovie.imdbID}>
                        <p style={{ display: "none" }}>{poster = favmovie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : favmovie.Poster}</p>
                        <img className="card-img-top" src={poster} alt="cardimage" />
                        <div className="card-body">
                            <h5 className="card-title">{favmovie.Title}</h5>
                        </div>
                    </div>
                ))}</div> : <p> <br /> No Favorites</p>)}
        </div>
    )
}

export default Favorites
