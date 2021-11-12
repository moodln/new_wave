import React from "react";
import { Link } from "react-router-dom";


class AlbumShow extends React.Component {
    constructor(props) {
        super(props);

        this.removeAlbum = this.removeAlbum.bind(this);

    }
    componentDidMount() {
        this.props.fetchAlbum(this.props.match.params.albumId)
        this.forceUpdate();
    }

    // componentDidUpdate() {
    //     if (!this.props.album) {
    //         this.forceUpdate();
    //     }
    //     this.render();
    // }
    playAudio() {
        document.getElementById('audio').play()
    }

    removeAlbum(albumId) {
        return (e) => {
            e.preventDefault();

            if (this.props.currentUser.id === this.props.album.artist.id) {
                this.props.deleteAlbum(albumId)
                this.props.history.push(`/`)
            } 
        } 
    }

    render() {
        // debugger
        if (!this.props.album) {
            
            // debugger
            return null 

        } else {
            debugger
           if (!this.props.album.artist.photoUrl) {
               this.props.album.artist.photoUrl = window.artist_image
           }
            const artistAlbums = Object.values(this.props.album.artist.albums)
        return (
            
            <div>
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
                                <div>
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
                                <div>
                                    <button onClick={this.removeAlbum(this.props.album.id)}>remove album</button>
                                </div>
                            </div>
                            <div className='album-display'>
                                <img src={this.props.album.photoUrl} 
                                    alt={this.props.album.title} />
                            </div>
                            <div className='artist-info'>
                                <img src={this.props.album.artist.photoUrl} alt="artist-image" />
                                <h3>{this.props.album.artist.name}</h3>
                                <p>{this.props.album.artist.location}</p>
                                <button>Follow</button>
                                <p>{this.props.album.artist.about}</p>
                                <p>discography</p>
                                <ul>
                                    {artistAlbums.map(album => {
                                        return (
                                        <li key={album.id}>
                                            <div className='artist-albums'>
                                                <Link to={`/albums/${album.id}`} ><img src={album.albumUrl} alt={album.title} /></Link>
                                                <p>{album.title}</p>
                                            </div>
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