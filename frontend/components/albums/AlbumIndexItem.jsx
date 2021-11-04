import React from "react";


const AlbumIndexItem = ({album}) => {
    return (
        <div className='album'>
            <li key={album.title}>
                <img src={album.photoUrl} alt={album.title} />
                <h2>{album.title}</h2>
            </li>
        </div>
    )
}

export default AlbumIndexItem;