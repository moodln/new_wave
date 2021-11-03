import { RECEIVE_ALBUMS } from "../actions/album_actions";

const albumsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_ALBUMS:
            return nextState = action.albums;
        default: 
            return state;
    }
}

export default albumsReducer;