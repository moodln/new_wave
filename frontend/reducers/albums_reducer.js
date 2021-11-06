import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from "../actions/album_actions";

const albumsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_ALBUMS:
            return nextState = action.albums;
        case RECEIVE_ALBUM:
            nextState[action.album.id] = action.album;
            return nextState;
        default: 
            return state;
    }
}

export default albumsReducer;