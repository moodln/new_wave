import { RECEIVE_ALBUMS } from "../actions/album_actions";
import sessionReducer from "./session_reducer";

const albumsReducer = (state = [], action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALBUMS:
            return Object.assign([], state, {[state.entities.albums]: action.albums})
        default:
            return state;
    }
}

export default albumsReducer;