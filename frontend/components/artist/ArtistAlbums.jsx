import React from "react";
import { Link } from "react-router-dom";

class ArtistAlbums extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: this.props.currentUser,
            about: this.props.currentUser.about,
            img_url: this.props.currentUser.img_url,
            image: this.props.currentUser.photoUrl
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        this.props.fetchAlbums();
        // console.log(this.state)
        if (this.state.currentUser.about === null) {
            this.setState({
                about: 'tabula rasa'
            })
        }
        if (!this.state.currentUser.photoUrl) {
            this.setState({
                image: window.artist_image
            })
        } 
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
            this.setState({ 
                [type]: e.currentTarget.files[0],
                image: URL.createObjectURL(e.currentTarget.files[0]) 
            })
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
        
        formData.append('user[username]', this.state.currentUser.username);
        formData.append('user[id]', this.state.currentUser.id);
        formData.append('user[email]', this.state.currentUser.email);
        formData.append('user[location]', this.state.currentUser.location);
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
        if (!this.props.albums) return null;
        

        let aboutInfo = <div className='user-about-info'>
                            <p>{this.state.about}</p>
                            <label onClick={this.toggleInput} 
                                htmlFor='about-info-id'>edit bio</label>
                            <input type="text"
                                id='about-info-id' 
                                value={this.state.about}
                                onChange={this.handleInput('about')} 
                                style={{display: 'none'}} />
                        </div>
        
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
                            <form onSubmit={this.handleSubmit}>
                                <div className='artist-info'>
                                    debugger
                                    <img src={this.state.image} alt="artist-image" />
                                    <label htmlFor="image-input-id">Upload Profile Photo
                                    <input className='image-file'
                                        id='image-input-id' 
                                        type="file" 
                                        title='add artist photo' 
                                        accept="image/png, image/jpeg" 
                                        onChange={this.handleFile('img_url')} />
                                    </label>
                                    <h3>{currentUser.name}</h3>
                                    <p>{currentUser.location}</p>
                                    {aboutInfo}
                                </div>
                                <button>submit</button>
                            </form>
                        </div>
                    </div>           
                </div>
            </div>
        )
    }

}

export default ArtistAlbums;