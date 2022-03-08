import React from 'react';


const SongIndexItem = ({song, playAudio}) => {
    return (
        <div className="song-list-item">
            <button onClick={() => playAudio(song)}>
                <img src={window.play} alt="play_button" className='play' />
            </button>
            <p>1. test</p>
            <p>3:44</p>
        </div>
    )
};

export default SongIndexItem;