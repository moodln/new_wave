import React from 'react';
import { Link } from 'react-router-dom';

class CreateAlbumForm extends React.Component {
    constructor(props) {
        super(props)
        
        if (this.props.currentUser) {
        this.state = {
            title: 'album name',
            artist_id: this.props.currentUser.id,
            img_url: window.album, 
            audio_url: null,
            descriptuon: 'Includes unlimited streaming via the free new wave app, plus high-quality download in MP3, FLAC and more.',
            price: '7.00',
            release_date: this.todaysDate()
        }
        } 

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    todaysDate() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        return today = mm + '/' + dd + '/' + yyyy;

    }

    handleInput(type) {
        debugger
        return (e) => (
            this.setState({[type]: e.currentTarget.value})
        )
    }

    handleFile(type) {
        return (e) => {
            return this.setState({[type]: e.currentTarget.files[0]})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();

        formData.append('album[title]', this.state.title);
        formData.append('album[artist_id]', this.state.artist_id);
        formData.append('album[photo]', this.state.img_url);
        formData.append('album[song]', this.state.audio_url);
        debugger
        this.props.createAlbum(formData)
            .then(response => {
                debugger
                return this.props.history.push(`/albums/${response.album.id}`)
            })
            
    }


    render() {
        const albumName = this.state.title === 'album name' ? 'Untitled Album' : this.state.title
        if (this.state) {
            return (
                <div>
                    <div className='create-album-body'>
                        
                            <form className='create-album-form' onSubmit={this.handleSubmit}>
                            <div className='album-preview'>
                            <div className='album-preview-box'>
                                <div className='image-container'>
                                    <div className='image'>
                                        <img src={this.state.img_url} alt="default image" />                                   
                                    </div>
                                    <div className='album-text'>
                                        <h1>{albumName}</h1>
                                        <div className='album-p'>
                                            <p>by</p>
                                            <p>{this.props.currentUser.username}</p>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className='song-file-container'>
                                    <p>tracks</p>
                                    <label htmlFor="audio-input-id">add track
                                        <input className='song-file'
                                            id='audio-input-id'
                                            type="file"
                                            title='add track'
                                            accept="audio/mp3"
                                            onChange={this.handleFile('audio_url')} />
                                    </label>
                                </div>
                                <button>save draft</button>
                            </div>
                            </div>
                            <div className='album-name-container'> 
                                <div className='album-name-asterisk'>
                                    <p>*</p>    
                                    <input className='album-name' type="text" value={this.state.title} onChange={this.handleInput('title')} />
                                </div>
                                <div className='border'> </div>
                                <div className='image-file-container'>
                                    <label htmlFor="image-input-id">Upload Album Art
                                        <input className='image-file'
                                            id='image-input-id'
                                            type="file"
                                            title='Upload Album Art'
                                            accept="image/png, image/jpeg"
                                            onChange={this.handleFile('img_url')} />
                                    </label>
                                    <div className='center-p'>
                                        <div className='together-p'>
                                            <p>1400 x 1400 pixels minimum</p>
                                            <p>(bigger is better)</p>
                                        </div>
                                    <p>.jpg, .gif or .png, 10MB max</p>
                                    </div>
                                </div>
                            </div>
                            </form>
                       
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <p>{this.props.errors}</p>
                </div>
            )
        }
    }
}

export default CreateAlbumForm;