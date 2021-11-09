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

export const createAlbum = (album) => (
    $.ajax({
        method: 'POST',
        contentType: false,
        processData: false,
        url: '/api/albums',
        data: { album }
    })
)

export const deleteAlbum = (albumId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/albums/${albumId}`
    })
)