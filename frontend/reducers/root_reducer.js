import sessionReducer from "./session_reducer";
import entitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";
import uiReducer from "./ui_reducers";
import {combineReducers} from 'redux';

const RootReducer = combineReducers({
    entities: entitiesReducer, 
    session: sessionReducer, 
    errors: errorsReducer,
    ui: uiReducer
});

export default RootReducer;


