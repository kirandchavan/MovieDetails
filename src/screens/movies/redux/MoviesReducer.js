import {
    FAILED_CASTS, FAILED_MOVIE_DETAILS, FAILED_POPULAR_MOVIES, FAILED_SEARCH, FAILED_TRANDING_MOVIES, RECEIVED_CASTS,
    RECEIVED_MOVIE_DETAILS,
    RECEIVED_POPULAR_MOVIES, RECEIVED_SEARCH, RECEIVED_TRANDING_MOVIES, START_LOADING_CASTS,
    START_LOADING_MOVIE_DETAILS,
    START_LOADING_POPULAR_MOVIES, START_LOADING_SEARCH, START_LOADING_TRANDING_MOVIES
} from "./MoviesActionsType"

const initialState = {
    trandingMoviesLoading: false,
    trandingMoviesError: '',
    trandingMovies: [],
    popularMoviesLoading: false,
    popularMoviesError: '',
    popularMovies: [],
    castsLoading: false,
    castsError: '',
    casts: [],
    movieDetailLoading: false,
    movieDetailError: '',
    movieDetail: [],
    searchLoading: false,
    searchError: '',
    searchData: [],
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case START_LOADING_TRANDING_MOVIES: {
            return {
                ...state,
                trandingMoviesLoading: true,
                trandingMoviesError: '',
                trandingMovies: [],
            }
        }

        case FAILED_TRANDING_MOVIES: {
            return {
                ...state,
                trandingMoviesLoading: false,
                trandingMoviesError: '',
                trandingMovies: [],
            }
        }

        case RECEIVED_TRANDING_MOVIES: {
            return {
                ...state,
                trandingMoviesLoading: false,
                trandingMoviesError: '',
                trandingMovies: payload,
            }
        }

        case START_LOADING_POPULAR_MOVIES: {
            return {
                ...state,
                popularMoviesLoading: true,
                popularMoviesError: '',
                popularMovies: [],
            }
        }

        case FAILED_POPULAR_MOVIES: {
            return {
                ...state,
                popularMoviesLoading: false,
                popularMoviesError: '',
                popularMovies: [],
            }
        }

        case RECEIVED_POPULAR_MOVIES: {
            return {
                ...state,
                popularMoviesLoading: false,
                popularMoviesError: '',
                popularMovies: payload,
            }
        }
        //cast
        case START_LOADING_CASTS: {
            return {
                ...state,
                castsLoading: true,
                castsError: '',
                casts: [],
            }
        }

        case FAILED_CASTS: {
            return {
                ...state,
                castsLoading: false,
                castsError: '',
                casts: [],
            }
        }

        case RECEIVED_CASTS: {
            return {
                ...state,
                castsLoading: false,
                castsError: '',
                casts: payload,
            }
        }

        case START_LOADING_MOVIE_DETAILS: {
            return {
                ...state,
                movieDetailLoading: true,
                movieDetailError: '',
                movieDetail: [],
            }
        }

        case FAILED_MOVIE_DETAILS: {
            return {
                ...state,
                movieDetailLoading: false,
                movieDetailError: '',
                movieDetail: [],
            }
        }

        case RECEIVED_MOVIE_DETAILS: {
            return {
                ...state,
                movieDetailLoading: false,
                movieDetailError: '',
                movieDetail: payload,
            }
        }

        //SEARCH
        case START_LOADING_SEARCH: {
            return {
                ...state,
                searchLoading: true,
                searchError: '',
                searchData: [],
            }
        }

        case FAILED_SEARCH: {
            return {
                ...state,
                searchLoading: false,
                searchError: '',
                searchData: [],
            }
        }

        case RECEIVED_SEARCH: {
            return {
                ...state,
                searchLoading: false,
                searchError: '',
                searchData: payload,
            }
        }

        default:
            return { ...state }
    }
}
