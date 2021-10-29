import { RECEIVE_CURRENT_USER } from '../actions/session_actions'

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    // debugger
    switch (action.type) {
        case RECEIVE_CURRENT_USER:

            return Object.assign({}, nextState, { [action.currentUser.id]: action.currentUser });
        default:
            return state;
    }
}

export default usersReducer;