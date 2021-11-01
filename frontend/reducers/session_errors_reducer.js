import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';


const defaultState = []

const sessionErrorsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    // debugger
    switch (action.type) {
        case RECEIVE_ERRORS:
            return Object.assign([], state, action.errors.responseJSON)
        case RECEIVE_CURRENT_USER:
            return defaultState;
        case CLEAR_ERRORS: 
            return []
        default:
            return state;
    }
}

export default sessionErrorsReducer;