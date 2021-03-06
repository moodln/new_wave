import React from "react";
import { Link } from "react-router-dom";


const AlbumIndexItem = ({album}) => {
    return (
        <div>
            <div className='album-container'>
                <div className='album'>
                    <Link to={`/albums/${album.id}`}>
                        <img src={album.photoUrl} alt={album.title} />
                    </Link>
                        <h2>{album.title}</h2>
                    {/* <Link to='/albums'>create</Link> */}
                </div>
            </div>
        </div>
    )
}

export default AlbumIndexItem;