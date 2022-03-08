import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';
export const RECEIVE_SONG_ERRORS = 'RECEIVE_SONG_ERRORS';


const receiveSongs = (songs) => ({
    type: RECEIVE_SONGS,
    songs
});

const receiveSong = (albumWithSongAttached) => ({
    type: RECEIVE_SONG,
    albumWithSongAttached
});

const removeSong = (songId) => ({
    type: REMOVE_SONG,
    songId
});

const receiveSongErrors = (errors) => ({
    type: RECEIVE_SONG_ERRORS,
    errors
})

export const requestSongs = () => (dispatch) => {
    return SongApiUtil.fetchSongs()
        .then((songs) => dispatch(receiveSongs(songs)))
        .fail(errors => dispatch(receiveSongErrors(errors)))
};

export const requestSong = songId => dispatch => {
    return SongApiUtil.fetchSong(songId)
        .then(song => dispatch(receiveSong(song)))
        .fail(errors => dispatch(receiveSongErrors(errors)))
};

export const createSong = song => dispatch => {
    return SongApiUtil.createSong(song)
        .then(song => dispatch(receiveSong(song)))
        .fail(errors => dispatch(receiveSongErrors(errors)))
};

export const updateSong = song => dispatch => {
    return SongApiUtil.updateSong(song)
        .then(song => dispatch(receiveSong(song)))
        .fail(errors => dispatch(receiveSongErrors(errors)))
};

export const deleteSong = songId => dispatch => {
    return SongApiUtil.deleteSong(songId)
        .then(() => dispatch(removeSong(songId)))
        .fail(errors => dispatch(receiveSongErrors(errors)))
}