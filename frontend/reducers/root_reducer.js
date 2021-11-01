import sessionReducer from "./session_reducer";
import entitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";
import {combineReducers} from 'redux';

const RootReducer = combineReducers({
    entities: entitiesReducer, 
    session: sessionReducer, 
    errors: errorsReducer 
});

export default RootReducer;

