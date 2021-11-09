import React from "react";
import {Link} from "react-router-dom";

class AlbumShow extends React.Component {
    componentDidMount() {
        this.props.fetchAlbum(this.props.match.params.albumId)
    }

    playAudio() {
        document.getElementById('audio').play()
    }

    render() {
        // debugger
        if (!this.props.album) {
            // debugger
            return null 
        } else {
        return (
            <div>
                <div className='welcome-message'>
                    {/* <div className='welcome-message-link'> */}
                    <Link to='/'>
                        <img src={window.logo} alt="new_wave logo" className='logo' />
                    </Link>
                    <Link to='/' onClick={logout}>
                        <img src={window.circle} alt="blue_circle" className='circle' />
                    </Link>
                    {/* </div> */}
                </div>
                <div className='album-show-container'>
                    
                    {/* <img src={window.background} alt="bruno-guerrero" className='album-show-bckrnd' /> */}
                    <div className='album-show-body'>
                        <header>
                            <Link className='active'>music</Link>
                            <Link>merch</Link>
                            <Link>community</Link>
                        </header>
                        <div className='album-details'>
                            <div className='album-info'>
                                <h2>{this.props.album.title}</h2>
                                <p>by {this.props.album.artist.name}</p>
                                <audio controls src={this.props.album.songUrls} type='audio/mpeg' id='audio'/>
                                <h4>Digital Album</h4>
                                <p>Streaming + Download</p>
                                <p>Includes unlimited streaming via the free new_wave app, plus high-quality download in MP3, FLAC and more.</p>
                                <h3>Buy Digital Album $7</h3>
                                <p>Send as Gift</p>
                                <div className='song-list'>
                                    <button onClick={this.playAudio}><img src={window.play} alt="play_button" className='play' /></button>
                                    <p>1. {this.props.album.songTitle}</p>
                                    <p>3:44</p>
                                </div>
                            </div>
                            <div className='album-display'>
                                <img src={this.props.album.photoUrl} 
                                    alt={this.props.album.title} />
                            </div>
                            <div className='artist-info'>
                                <img src={window.artist_image} alt="artist-image" />
                                <h3>{this.props.album.artist.name}</h3>
                                <p>{this.props.album.artist.location}</p>
                                <button>Follow</button>
                                <p>{this.props.album.artist.about}</p>
                                <ul>
                                    {this.props.album.artist.albums.map(album => {
                                        return (
                                        <li key={album.id}>
                                            <img src={album.photoUrl} alt={album.title} />
                                            <p>{album.title}</p>
                                        </li>
                                    )})}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }}
}

export default AlbumShow;