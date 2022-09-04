import * as types from './actionCreators.js';

const initialstate = {
    movies: [],
    isloading: true,
    error: false,
    movie: null,
    favoritemovies: [],
    isLoggedin:false,
    totalResults:0,
    searchvalue:"spider",
    pageNum:1
}
const MovieReducer = (state = initialstate, action) => {
    switch (action.type) {
        case types.SIGN_IN_USER:
            return {
               ...state,
                isLoggedin: true
            }
        case types.SIGN_OUT_USER:
            return {
                state:" ",
            }   

        case types.SEARCH_MOVIES_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false,
                movies: [],
                isLoggedin:true,
                searchvalue:action.payload[0],
                pageNum:action.payload[1]
            }
        case types.SEARCH_MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.payload.Search,
                totalResults:action.payload.totalResults,
                isLoading: false
            }
        case types.SEARCH_MOVIES_FAILURE:
            return {
                ...state,
                error: true,
                isLoading: false
            }
        case types.SEARCH_MOVIE_DETAIL:
            return {
                ...state,
                movie: action.payload,
            }
        case types.ADD_FAVORITE_MOVIE:
            return {
                ...state,
                favoritemovies: [...state.favoritemovies, action.payload]
            }
        case types.DELETE_FAVORITE_MOVIE:
            return {
                ...state,
                favoritemovies: state.favoritemovies.filter((movie) => movie.imdbID!== action.payload.imdbID),
            }
        default: {
            return state;
        }
            }
}
export default MovieReducer;