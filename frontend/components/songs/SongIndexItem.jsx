import React from 'react';


const SongIndexItem = ({song, playAudio}) => {
    return (
        <div className="song-list-item">
            <button onClick={() => playAudio(song.url)}>
                <img src={window.play} alt="play_button" className='play' />
            </button>
            <p>1. {song.title}</p>
            <p>3:44</p>
        </div>
    )
};

export default SongIndexItem;