import * as AlbumApiUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const REMOVE_ALBUM = 'REMOVE_ALBUM';


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

export const fetchAlbums = () => (dispatch) => {
    return AlbumApiUtil.fetchAlbums()
        .then((albums) => dispatch(receiveAlbums(albums)))
        .fail((err) => console.log(err))
}

export const fetchAlbum = (albumId) => (dispatch) => {
    return AlbumApiUtil.fetchAlbum(albumId)
        .then((album) => dispatch(receiveAlbum(album)))
        .fail((err) => console.log(err))
}

export const createAlbum = (album) => (dispatch) => {
    return AlbumApiUtil.createAlbum(album)
        .then(album => dispatch(receiveAlbum(album)))
        .fail((err) => console.log(err))
}

export const deleteAlbum = (albumId) => (dispatch) => {
    return AlbumApiUtil.deleteAlbum(albumId)
        .then(() => dispatch(removeAlbum(albumId)))
}

