import React from "react";

const ArtistPhoto = ({imgUrl, handlePhoto}) => {
    return (
        <div className="profile-photo">
            <img src={imgUrl} alt="gfgfgf" />
            <label htmlFor="image-input-id">add profile photo
            <input className='image-file'
                id='image-input-id' 
                type="file" 
                title='add artist photo' 
                accept="image/png, image/jpeg" 
                onChange={handlePhoto('img_url')} />
            </label>
        </div>
    )
}

export default ArtistPhoto;