import React from "react";
import { Link } from "react-router-dom";
import SongIndexItem from "../songs/SongIndexItem";


class AlbumShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albumId: parseInt(this.props.match.params.albumId),
            album: ''
        }
        this.removeAlbum = this.removeAlbum.bind(this);

    }
    componentDidMount() {
        this.props.fetchAlbum(this.props.match.params.albumId);
        this.props.fetchAlbums();
        this.setState({
            album: this.props.album
        })
    }

    playAudio(songUrl) {
        let audio = document.getElementById('audio');
        let source = document.getElementById('audioSource');
        source.src = songUrl;
        // debugger
        audio.load();
        audio.play();
    }

    removeAlbum(album) {
            if (this.props.currentUser.id === album.artist.id) {
                this.props.deleteAlbum(album.id)
                .then(() => this.props.history.push(`/`));
            } 
    }

    render() {
        
        if (this.props.albums.length === 0) {
            return null;
        } else {
            let [album] = this.props.albums.filter(album => album.id === this.state.albumId)
            // debugger
            
            let releaseDate = new Date(album.release_date.replace(/-/g, '\/'));
            releaseDate = String(releaseDate).slice(4, 15);
            // debugger
           if (!album.artist.photoUrl) {
               album.artist.photoUrl = window.artist_image
           }
            let artistAlbums;
            let artistLocation;
            if (album.artist.albums) {
                artistAlbums = Object.values(album.artist.albums)
            } else {
                artistAlbums = [];
            }
            let artistButtons;
            if (album.artist.location === null) {
                artistLocation = 'Independence, Kansas';
            } else {
                artistLocation = album.artist.location;
            }
            
            if (this.props.currentUser){
            if (this.props.currentUser.id === album.artist.id) {
                artistButtons = <button onClick={() => this.removeAlbum(album)}>remove album</button>
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
                                    <audio controls type='audio/mpeg' id='audio'>
                                        <source id='audioSource' src={album.songs[0].url}></source>
                                    </audio>

                                    <h4>Digital Album</h4>
                                    <p>Streaming + Download</p>
                                    <p>Includes unlimited streaming via the free new_wave app, plus high-quality download in MP3, FLAC and more.</p>
                                    <h3>Buy Digital Album $7</h3>
                                    <p>Send as Gift</p>
                                
                                    <div className='song-list'>
                                        {album.songs.map(song => {
                                            return  <SongIndexItem song={song} playAudio={this.playAudio} key={song.id} />
                                        })}
                                    </div>
                                    <div className='description release-date'>
                                        <p>{album.description}</p>
                                        <p>released {releaseDate}</p> 
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
                                <p>{artistLocation}</p>
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