import React from "react";
import { Link } from "react-router-dom";


class AlbumShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albumId: parseInt(this.props.match.params.albumId)
        }
        this.removeAlbum = this.removeAlbum.bind(this);

    }
    componentDidMount() {
        // this.props.fetchAlbum(this.props.match.params.albumId)
        this.props.fetchAlbums()
        
    }

    playAudio() {
        document.getElementById('audio').play()
    }

    removeAlbum(albumId) {
        return (e) => {
            e.preventDefault();
            // debugger
            if (this.props.currentUser.id === this.props.album.artist.id) {
                this.props.deleteAlbum(albumId)
                .then(() => this.props.history.push(`/`));
            } 
        } 
    }

    render() {
        // debugger
        if (!this.props.album || this.props.albums === []) {
            return null;
        } else {
            let album = this.props.albums.filter(album => album.id === this.state.albumId)[0]
            debugger
           if (!album.artist.photoUrl) {
               album.artist.photoUrl = window.artist_image
           }
            let artistAlbums;
            if (album.artist.albums) {
                artistAlbums = Object.values(album.artist.albums)
            } else {
                artistAlbums = [];
            }
            let artistButtons;
            debugger
            if (this.props.currentUser){
            if (this.props.currentUser.id === album.artist.id) {
                artistButtons = <button onClick={this.removeAlbum(album.id)}>remove album</button>
            } else {
                artistButtons = '';
            }}
            
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
                                    <h2>{album.title}</h2>
                                    <p>by {album.artist.name}</p>
                                    <audio controls src={album.songUrls} type='audio/mpeg' id='audio'/>
                                    <h4>Digital Album</h4>
                                    <p>Streaming + Download</p>
                                    <p>Includes unlimited streaming via the free new_wave app, plus high-quality download in MP3, FLAC and more.</p>
                                    <h3>Buy Digital Album $7</h3>
                                    <p>Send as Gift</p>
                                
                                    <div className='song-list'>
                                        <button onClick={this.playAudio}>
                                            <img src={window.play} alt="play_button" className='play' />
                                        </button>
                                        <p>1. {album.songTitle}</p>
                                        <p>3:44</p>
                                    </div>
                                </div>
                                <div>
                                <div className="artistButtons">
                                    {artistButtons}
                                </div>
                                </div>
                            </div>
                            <div className='album-display'>
                                <img src={album.photoUrl} 
                                    alt={album.title} />
                            </div>
                            <div className='artist-info'>
                                <img src={album.artist.photoUrl} alt="artist-image" />
                                <h3>{album.artist.name}</h3>
                                <p>{album.artist.location}</p>
                                <button>Follow</button>
                                <p>{album.artist.about}</p>
                                <p>discography</p>
                                <ul>
                                    {artistAlbums.map(album => {
                                        return (
                                        <li key={album.id}>
                                            <div className='artist-albums'>
                                                <Link to={`/albums/redirect/${album.id}`} ><img src={album.albumUrl} alt={album.title} /></Link>
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