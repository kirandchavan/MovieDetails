import { METHOD } from "../../../services/APIConstant";
import callAPI from "../../../services/CommonServices";
import { MOVIES_POPULAR, TRAINDING_MOVIES } from "../../../services/Endpoints";
import { FAILED_CASTS, FAILED_MOVIE_DETAILS, FAILED_POPULAR_MOVIES, FAILED_SEARCH, FAILED_TRANDING_MOVIES, RECEIVED_CASTS, RECEIVED_MOVIE_DETAILS, RECEIVED_POPULAR_MOVIES, RECEIVED_SEARCH, RECEIVED_TRANDING_MOVIES, START_LOADING_CASTS, START_LOADING_MOVIE_DETAILS, START_LOADING_POPULAR_MOVIES, START_LOADING_SEARCH, START_LOADING_TRANDING_MOVIES } from "./MoviesActionsType";

import Config from "react-native-config"

const { KEY } = Config

/** 
 * Get trainding movies
*/
export const getTraindingMovies = (params) => {
    return async (dispatch) => {
        dispatch({ type: START_LOADING_TRANDING_MOVIES })
        try {
            const endpoint = TRAINDING_MOVIES;
            const response = await callAPI({
                method: METHOD.GET,
                endpoint,
                headers: { 'Content-Type': 'application/json' },
            });
            if (response) {
                const { responseData } = response;
                dispatch({ type: RECEIVED_TRANDING_MOVIES, payload: responseData.results })
            } else {
                dispatch({ type: FAILED_TRANDING_MOVIES, payload: response })
            }
        } catch (error) {
            console.log("catch error -> ", error);
        }
    }
}

export const getPopularMovies = (params = 1) => {
    return async (dispatch) => {
        dispatch({ type: START_LOADING_POPULAR_MOVIES })
        try {
            const endpoint = `${MOVIES_POPULAR}&page=${params}`;
            const response = await callAPI({
                method: METHOD.GET,
                endpoint,
                headers: { 'Content-Type': 'application/json' },
            });
            if (response) {
                const { responseData } = response;
                dispatch({ type: RECEIVED_POPULAR_MOVIES, payload: responseData.results })
            } else {
                dispatch({ type: FAILED_POPULAR_MOVIES, payload: response })
            }
        } catch (error) {
            console.log("catch error -> ", error);
        }
    }
}

export const getCastOfMovie = ({ movieId }) => {
    return async (dispatch) => {
        dispatch({ type: START_LOADING_CASTS })
        try {
            const endpoint = `/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`;
            const response = await callAPI({
                method: METHOD.GET,
                endpoint,
                headers: { 'Content-Type': 'application/json' },
            });
            if (response) {
                const { responseData } = response;
                dispatch({ type: RECEIVED_CASTS, payload: responseData.cast })
            } else {
                dispatch({ type: FAILED_CASTS, payload: response })
            }
        } catch (error) {
            console.log("catch error -> ", error);
        }
    }
}

export const getMovieDetails = ({ movieId }) => {
    return async (dispatch) => {
        dispatch({ type: START_LOADING_MOVIE_DETAILS })
        try {
            const endpoint = `/3/movie/${movieId}?api_key=${KEY}&language=en-US`;
            const response = await callAPI({
                method: METHOD.GET,
                endpoint,
                headers: { 'Content-Type': 'application/json' },
            });
            if (response) {
                const { responseData } = response;
                dispatch({ type: RECEIVED_MOVIE_DETAILS, payload: responseData })
            } else {
                dispatch({ type: FAILED_MOVIE_DETAILS, payload: response })
            }
        } catch (error) {
            console.log("catch error -> ", error);
        }
    }
}

export const searchMovieName = ({ search }) => {
    return async (dispatch) => {
        dispatch({ type: START_LOADING_SEARCH })
        try {
            const endpoint = `/3/search/movie?api_key=${KEY}&language=en-US&query=${search}&page=1&include_adult=false`;
            const response = await callAPI({
                method: METHOD.GET,
                endpoint,
                headers: { 'Content-Type': 'application/json' },
            });
            if (response) {
                const { responseData } = response;
                dispatch({ type: RECEIVED_SEARCH, payload: responseData.results })
            } else {
                dispatch({ type: FAILED_SEARCH, payload: response })
            }
        } catch (error) {
            console.log("catch error -> ", error);
        }
    }
}

