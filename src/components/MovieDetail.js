import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import DEFAULT_PLACEHOLDER_IMAGE from '../utils/placeholder.jpg'
import { Spinner } from 'react-bootstrap';
const MovieDetail = () => {
    let { movie } = useSelector((state) => state.data);
    let history = useHistory();
    console.log("movie details are ", movie);
    let poster = "";
    return (
        <div className="detail-component">
            {(movie != null ?
                <div className="detail-container" style={{backgroundImage:poster}}>
                    <div className="detail-ul">
                        <ul>
                        <li style={{ wordBreak: "break-word", display:"none" }}>{poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster}</li>
                            <li style={{fontSize:"1.75rem",marginBottom:"20px"}}>{movie.Title}</li>
                            <li style={{marginBottom:"30px"}}>{movie.Plot}</li>
                            <li><b>Writer:</b> {movie.Writer}</li>
                            <li><b>Actors:</b> {movie.Actors}</li>
                            <li><b>Awards:</b> {movie.Awards}</li>
                            <li><b>Imdb Ratings : {movie.imdbRating}</b></li>    
                        </ul>
                    </div>
                    <div className="img-styling"><img className="img-height" src={poster} alt="poster" /></div>
                </div>
                : <Spinner animation="border" variant="success" />)}
            <button style={{backgroundColor:"rgba(3,37,65,1)"}} onClick={() => history.push("/home")} className="btn btn-dark">Back</button>
        </div>
    )
}
export default MovieDetail;
