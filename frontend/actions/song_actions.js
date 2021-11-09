import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';


const receiveSongs = (songs) => ({
    type: RECEIVE_SONGS,
    songs
});

const receiveSong = (song) => ({
    type: RECEIVE_SONG,
    song
});

const removeSong = (songId) => ({
    type: REMOVE_SONG,
    songId
});

export const requestSongs = () => (dispatch) => {
    return SongApiUtil.fetchSongs()
        .then((songs) => dispatch(receiveSongs(songs)))
};

export const requestSong = songId => dispatch => {
    return SongApiUtil.fetchSong(songId)
        .then(song => dispatch(receiveSong(song)))
};

export const createSong = song => dispatch => {
    return SongApiUtil.createSong(song)
        .then(song => dispatch(receiveSong(song)))
};

export const updateSong = song => dispatch => {
    return SongApiUtil.updateSong(song)
        .then(song => dispatch(receiveSong(song)))
};

export const deleteSong = songId => dispatch => {
    return SongApiUtil.deleteSong(songId)
        .then(() => dispatch(removeSong(songId)))
}