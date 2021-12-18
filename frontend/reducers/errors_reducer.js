import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import albumErrorsReducer from "./album_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    album: albumErrorsReducer
})

export default errorsReducer;