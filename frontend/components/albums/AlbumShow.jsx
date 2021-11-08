import React from "react";
import {Link} from "react-router-dom";

class AlbumShow extends React.Component {
    componentDidMount() {
        
        this.props.fetchAlbum(this.props.match.params.albumId)
        
    }

    render() {
        // debugger
        if (!this.props.album) {
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
                            </div>
                            <div className='album-display'>
                                <img src={this.props.album.photoUrl} 
                                    alt={this.props.album.title} />
                            </div>
                            <div className='artist-info'>
                                <h3>{this.props.album.artist.name}</h3>
                                <p>{this.props.album.artist.location}</p>
                                <button>follow</button>
                                <p>{this.props.album.artist.about}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }}
}

export default AlbumShow;