import * as AlbumApiUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const REMOVE_ALBUM = 'REMOVE_ALBUM';
export const RECEIVE_ALBUM_ERRORS = 'RECEIVE_ALBUM_ERRORS';
export const CLEAR_ALBUM_ERRORS = 'CLEAR_ALBUM_ERRORS';


const receiveAlbums = (albums) => ({
    type: RECEIVE_ALBUMS,
    albums
});

const receiveAlbum = (album) => ({
    type: RECEIVE_ALBUM, 
    album
})

const removeAlbum = (albumId) => ({
    type: REMOVE_ALBUM,
    albumId
})

const receiveAlbumErrors = (errors) => ({
    type: RECEIVE_ALBUM_ERRORS,
    errors
})

const clearAlbumErrors = () => ({
    type: CLEAR_ALBUM_ERRORS
})

export const fetchAlbums = () => (dispatch) => {
    return AlbumApiUtil.fetchAlbums()
        .then((albums) => dispatch(receiveAlbums(albums)))
        .fail(errors => dispatch(receiveAlbumErrors(errors)))
}

export const fetchAlbum = (albumId) => (dispatch) => {
    return AlbumApiUtil.fetchAlbum(albumId)
        .then((album) => dispatch(receiveAlbum(album)))
        .fail(errors => dispatch(receiveAlbumErrors(errors)))
}

export const createAlbum = (album) => (dispatch) => {
    return AlbumApiUtil.createAlbum(album)
        .then(album => dispatch(receiveAlbum(album)))
        .fail(errors => dispatch(receiveAlbumErrors(errors)))
}

export const deleteAlbum = (albumId) => (dispatch) => {
    return AlbumApiUtil.deleteAlbum(albumId)
        .then(() => dispatch(removeAlbum(albumId)))
        .fail(errors => dispatch(receiveAlbumErrors(errors)))
}

