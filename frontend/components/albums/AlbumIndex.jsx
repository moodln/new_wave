import React from 'react';

export default function AlbumIndex({ albums }) {
    return (
        <ul>
            {albums.map(album => {
                return (
                    <li key={album.id}>
                        <h2>{album.title}</h2>
                        <img src={album.photoUrl} />
                    </li>
                );
            })}
        </ul>
    );
}