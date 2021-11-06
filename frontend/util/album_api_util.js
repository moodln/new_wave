export const fetchAlbums = () => (
    $.ajax({
        method: 'GET',
        url: '/api/albums',
    })
);

export const fetchAlbum = (albumId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/albums/${albumId}`
    });
};