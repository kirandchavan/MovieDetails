import { combineReducers } from "redux";
import MoviesReducer from "../../screens/movies/redux/MoviesReducer";

export default combineReducers({
    moviesReducer: MoviesReducer
});
