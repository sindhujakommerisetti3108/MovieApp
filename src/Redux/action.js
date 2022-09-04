import * as types from "./actionCreators";
import axios from 'axios'
import { API_URL_OMDB } from './movieapi.js'


const userSignin = () => ({
    type: types.SIGN_IN_USER,
})

const userSignout = () => ({
    type: types.SIGN_OUT_USER,
})

const searchMovies = (searchvalue,pagnum) => ({
    type: types.SEARCH_MOVIES_REQUEST,
    payload:[searchvalue,pagnum]
})

const loadMovies = (movies) => ({
    type: types.SEARCH_MOVIES_SUCCESS,
    payload: movies,
})

const errorMovies = (error) => ({
    type: types.SEARCH_MOVIES_FAILURE,
    payload: error,
})

const searchMovieDetail = (movie) => ({
    type: types.SEARCH_MOVIE_DETAIL,
    payload: movie,
})


const favoriteMovieAdded = (movie) => {
    console.log("inside the Favorite action method ");
    return {
        type: types.ADD_FAVORITE_MOVIE,
        payload: movie,
    }
}


const favoriteMovieremoved = (movie) => {
    console.log("Inside the remove favorite action method ");
    return {
        type: types.DELETE_FAVORITE_MOVIE,
        payload: movie,
    }
}

/* Load Movies as per search criteria */
export const getMovies = (id,pageNumber) => {
    console.log("*****Retrieving movies from api****");
    return async function (dispatch) {
        let url = `${API_URL_OMDB}&s=${id}&page=${pageNumber}`;
        dispatch(searchMovies(id,pageNumber));
        try {
            const { data } = await axios.get(url);
            if (data.Response === "True") {
                dispatch(loadMovies(data));
            }
            else {
                dispatch(errorMovies(data.Error));
            }
        }
        catch (err) {
            console.log("Error while retreiving movies");
            console.log(err);
        }

    }
}

/*Load Movie Detail as per the user selected movie */
export const getMovieDetail = (id) => {
    return async function (dispatch) {
        let url = `${API_URL_OMDB}&i=${id}`;
        try {
            const { data } = await axios.get(url);
            dispatch(searchMovieDetail(data));
        }
        catch (err) {
            console.log("Error while retreiving movie details");
        }
    }
}

export const addFavoriteMovie = (movie) => {
    console.log("****Favorite method add dispatch action *****");
    return function (dispatch) {
        dispatch(favoriteMovieAdded(movie))
    }
}

export const removeFavoriteMovie = (movie) => {
    console.log("****Favorite method remove dispatch action *****");
    return function (dispatch) {
        dispatch(favoriteMovieremoved(movie))
    }
}

export const userLogin = () => {
    return function (dispatch) {
        dispatch(userSignin());
    }
}

export const userLogout = () => {
    return function (dispatch) {
        dispatch(userSignout());
    }
}

