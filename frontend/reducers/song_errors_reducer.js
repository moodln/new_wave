import { RECEIVE_SONG_ERRORS } from "../actions/song_actions";

const defaultState = [];

const songErrorsReducer = (state = defaultState, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_SONG_ERRORS:
            return Object.assign([], state, action.errors.responseText);
        default: 
            return state;
    }
}

export default songErrorsReducer;