import React from "react";
import { Link } from "react-router-dom";

class ArtistAlbums extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentUser;
    }

    componentDidMount() {
        this.props.fetchAlbums();
    }

    render() {
        if (!this.props.albums) return null;
        let { albums, currentUser } = this.props;
        debugger
        return (
            <div className='artist-albums'>
                <div className='album-show-container'>
                    <div className='album-show-body'>
                        <header>
                            <Link className='active'>music</Link>
                            <Link>merch</Link>
                            <Link>community</Link>
                        </header>
                        <div className="artist-albums-body">
                            <div className="artist-page-albums">
                                    {albums.filter(album => {
                                        debugger
                                        if (album.artist.id === currentUser.id) {
                                            return album;
                                        }
                                        }).map(album => {
                                        return (
                                        <div>
                                            <div className='artist-albums'>
                                                <Link to={`/albums/${album.id}`} >
                                                    <img src={album.photoUrl} alt={album.title} />
                                                    <p>{album.title}</p>
                                                </Link>
                                            </div>
                                        </div>
                                    )})}
                                
                            </div>
                            <div className='artist-info'>
                                <img src={currentUser.photoUrl} alt="artist-image" />
                                <h3>{currentUser.name}</h3>
                                <p>{currentUser.location}</p>
                                {/* <button>Follow</button> */}
                                <p>{currentUser.about}</p>
                            </div>
                        </div>
                    </div>           
                </div>
            </div>
        )
    }

}

export default ArtistAlbums;