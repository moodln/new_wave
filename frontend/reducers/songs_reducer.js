import {
    RECEIVE_SONGS,
    RECEIVE_SONG,
    REMOVE_SONG,
} from '../actions/song_actions';

const SongsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_SONGS:
            return nextState = action.songs;
        case RECEIVE_SONG:
            nextState[action.song.id] = action.song;
            return nextState;
        case REMOVE_SONG:
            delete nextState[action.songId];
            return nextState;
        default:
            return state;
    }
}

export default songsReducer;