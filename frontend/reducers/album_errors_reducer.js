import { RECEIVE_ALBUM_ERRORS, CLEAR_ALBUM_ERRORS } from "../actions/album_actions";

const defaultState = [];

const albumErrorsReducer = (state = defaultState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALBUM_ERRORS:
            return Object.assign([], state, action.errors.responseText);
        case CLEAR_ALBUM_ERRORS:
            return [];
        default:
            return state;
    }
}

export default albumErrorsReducer;