import React from "react";


const AlbumIndexItem = ({album}) => {
    return (
        <div className='album'>
                <img src={album.photoUrl} alt={album.title} />
                <h2>{album.title}</h2>
        </div>
    )
}

export default AlbumIndexItem;