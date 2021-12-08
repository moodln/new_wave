import React from 'react';
import { Link } from 'react-router-dom';

class ArtistShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.currentUser;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        debugger
        this.props.fetchAlbums();
        debugger
    }

    toggleInput() {
        const inputBox = document.getElementById('about-info-id');
        const display = inputBox.style.display;

        if (display === 'none') {
            inputBox.style.display = 'block';
        } else {
            inputBox.style.display = 'none';
        }
    }

    handleFile(type) {
        return (e) => (
            this.setState({ [type]: e.currentTarget.files[0] })
        )
    }

    handleInput(type) {
        return (e) => (
            this.setState({ [type]: e.currentTarget.value })
        )
    }


    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        
        formData.append('user[username]', this.state.username);
        formData.append('user[id]', this.state.id);
        formData.append('user[email]', this.state.email);
        formData.append('user[location]', this.state.location);
        formData.append('user[about]', this.state.about);
        if (this.state.img_url) {
        formData.append('user[photo]', this.state.img_url);
        }
        debugger

        

        this.props.editUser(this.props.currentUser, formData)
            .then(() => window.location.reload(false))
            // .then(() => this.props.history.push(`/users/${this.props.currentUser.id}`));

    }

    render() {
        debugger
        if (this.props.albums.length === 0) return null;
        let aboutInfo;
        let location;
        let photoUrl;
        let artistAlbums = this.props.albums.filter(album => album.artist.id === this.props.currentUser.id )
        if (artistAlbums.length > 0) {
            this.props.history.push(`./artist/albums/${this.props.currentUser.id}`)
            // this.props.history.push(`albums/${artistAlbums[artistAlbums.length - 1].id}`)
        }
        debugger
        if (this.state.location === 'undefined' || this.state.location === null) {
            location = <p>Independence, <br/>Kansas</p>
            this.setState({location: 'Independence, Kansas'})
        } else {
            location = <p>{this.state.location}</p>
        }

        // if (this.props.currentUser.albums) {
        //         artistAlbums = Object.values(this.props.currentUser.albums)
        //  } else {
        //         artistAlbums = [];
        // }
        // if (!this.state.about) {
        //     this.state.about = 'add artist bio'
        // } else {
        //     this.state.about = 'edit bio'
        // }
            aboutInfo = <div className='edit-about-info'>
                            <p>{this.state.about}</p>
                            <label onClick={this.toggleInput} htmlFor='about-info-id'>edit bio</label>
                            <input type="text"
                                id='about-info-id' 
                                value={this.state.about}
                                onChange={this.handleInput('about')} 
                                style={{display: 'none'}} />
                        </div>
        

        if (!this.state.photoUrl) {
            photoUrl = window.artist_image;
        } else {
            photoUrl = this.state.photoUrl;
        }

        return (
            <div className='artist-show-container'>
                <div className='artist-show-message'>
                    <h1>This is your artist homepage.</h1>
                    <Link to='/albums'>Add an album</Link>
                    {/* <div className='user-albums'>
                    <p>your albums</p>
                        <ul>
                            {artistAlbums.map(album => {
                                return (
                                <li key={album.id}>
                                    <div className='artist-albums'>
                                        <Link to={`/albums/${album.id}`} ><img src={album.photoUrl} alt={album.title} /></Link>
                                        <p>{album.title}</p>
                                    </div>
                                </li>
                            )})}
                        </ul>
                    </div> */}
                </div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <div className='artist-info'>
                                <img src={photoUrl} alt="gfgfgf" />
                                <label htmlFor="image-input-id">Upload Profile Photo
                                <input className='image-file'
                                    id='image-input-id' 
                                    type="file" 
                                    title='add artist photo' 
                                    accept="image/png, image/jpeg" 
                                    onChange={this.handleFile('img_url')} />
                                </label>
                                <h3>{this.props.currentUser.username}</h3>
                                {location}
                                {aboutInfo}
                            </div>
                        </div>
                        <button>submit</button>
                    </form>
            </div>
        )
    }
}

export default ArtistShow;