import React from "react";


const AlbumIndexItem = ({album}) => {
    return (
        <div>
            <li key={album.id}>
                <h2>{album.title}</h2>
                <img src={album.photoUrl} alt={album.title} />
            </li>
        </div>
    )
}

export default AlbumIndexItem;