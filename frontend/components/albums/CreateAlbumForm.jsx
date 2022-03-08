import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';

class CreateAlbumForm extends React.Component {
    constructor(props) {
        super(props)
        
        if (this.props.currentUser) {
        this.state = {
            title: 'album name',
            artist_id: this.props.currentUser.id,
            img_url: null, 
            audio_url: null,
            track_title: 'Untitled Track',
            descriptuon: 'Includes unlimited streaming via the free new wave app, plus high-quality download in MP3, FLAC and more.',
            price: '7.00',
            release_date: this.todaysDate(),
            image: window.album,
            title_error: '',
            art_error: '',
            track_error: '',
        }
        } 

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleTrack = this.handleTrack.bind(this);
    }

    toggleInput() {
        const inputBox = document.getElementById('description-id');
        const descriptionDiv = document.getElementsByClassName('description');
        
        const display = inputBox.style.display;
        
        if (display === 'none') {
            inputBox.style.display = 'block';
            descriptionDiv[0].children[2].style.display = 'none';
        } else {
            inputBox.style.display = 'none';
            descriptionDiv[0].children[2].style.display = 'block';
        }
    }

    // onImageChange = (file) => {
    //     if (file) {
    //         this.setState({
    //             image: URL.createObjectURL(file)
    //         });
    //     }
    // }

    todaysDate() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); 
        let yyyy = today.getFullYear();

        return today = mm + '/' + dd + '/' + yyyy;

    }

    handleInput(type) {
        return (e) => (
            this.setState({[type]: e.currentTarget.value})
        )
    }

    handleFile(type) {
        return (e) => {
            if (type === 'audio_url') {
                return this.setState({[type]: e.currentTarget.files[0]})
            } else {
                return this.setState({
                    [type]: e.currentTarget.files[0],
                    image: URL.createObjectURL(e.currentTarget.files[0])
                })
            }
        }
    }

    handleTrack() {
        this.props.openModal('create-song')
    }

    handleSubmit(e) {
        e.preventDefault();
            // const date = Date.parse(this.state.release_date);
            // const newDate = new Date(date);
            // debugger
            const albumData = new FormData();
            const songData = new FormData();
            albumData.append('album[title]', this.state.title);
            albumData.append('album[artist_id]', this.state.artist_id);
            albumData.append('album[photo]', this.state.img_url);
            albumData.append('album[songs][]', this.state.audio_url);
            // albumData.append('album[track_title]', this.state.track_title);
            albumData.append('album[release_date]', this.state.release_date);
            albumData.append('album[price]', this.state.price);

            songData.append('song[audio]', this.state.audio_url)
            songData.append('song[title]', this.state.track_title)

            this.props.createAlbum(albumData) // create album first so that we can attach album_id to song
                .then(response => {
                    debugger
                    songData.append('song[album_id]', response.album.id)
                    console.log('in createAlbum', response)
                    this.props.createSong(songData) // then create song so that the song is associated with album in backend
                        .then(response => {
                            debugger
                            console.log('in createSong', response)
                            return this.props.history.push(`/albums/${response.albumWithSongAttached.id}`)
                        })
                })

            
            
            // songData.append('song[album_id]', 11)

            // debugger
            // this.props.createSong(songData)
            //     .then(response => {
            //     // debugger
            //     console.log('in createSong', response)
            //     // return this.props.history.push(`/albums/${response.album_id}`)
            // })

            // need to add track name
            
            // this.props.createAlbum(albumData)
            //     .then(response => {
            //         return this.props.history.push(`/albums/${response.album.id}`)
            //     })
    }

    handleSave(albumId) {
        return this.props.history.push(`/albums/${albumId}`)
    }


    render() {
        
        const errors = this.props.errors.join('').split(', ')
        const title_error = Object.values(errors).filter(error => error.includes('title'))
        const song_error = Object.values(errors).filter(error => error.includes('song'))
        const photo_error = Object.values(errors).filter(error => error.includes('photo'))
        const albumName = this.state.title === 'album name' ? 'Untitled Album' : this.state.title
        if (this.state) {
            return (
                <div>
                    <Modal />
                    <div className='create-album-body'>
                        
                            <form className='create-album-form' onSubmit={this.handleSubmit}>
                            <div className='album-preview'>
                            <div className='album-preview-box'>
                                <div className='image-container'>
                                    <div className='image'>
                                        <img src={this.state.image} alt="default image" />                                   
                                    </div>
                                    <div className='album-text'>
                                        <h1>{albumName}</h1>
                                        <div className='album-p'>
                                            <p>by <span>{this.props.currentUser.username}</span></p>
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
                                            // onClick={this.handleTrack}
                                            onChange={this.handleFile('audio_url')} />
                                    </label>
                                    <label>Title
                                        <input type="text" placeholder='Untitled Track' onChange={this.handleInput('track_title')} />
                                    </label>
                                </div>
                                <div id="album-track-error">
                                    <p>{song_error}</p>
                                </div>
                                <button id='save-draft-button' disabled={true}>save draft</button>
                                {/* <div className='album-errors'>
                                    {errors.map(error => 
                                        <li key={error.length}>
                                            {error} 
                                        </li>)}
                                </div> */}
                            </div>
                            </div>
                            <div className='album-name-container'> 
                                <div className="album-name-header-container">
                                    <div className='album-name-asterisk'>
                                        <p>*</p>    
                                        <input className='album-name' 
                                            type="text" 
                                            placeholder={this.state.title}
                                            
                                            onChange={this.handleInput('title')} />
                                    </div>
                                    <div id="album-title-error">
                                        <p>{title_error}</p>
                                    </div>
                                </div>
                                <div className='release-date'>
                                    <p>release date:</p>
                                    <input type="text" 
                                        placeholder='optional' 
                                        onChange={this.handleInput('release_date')}/>
                                    <p>mm/dd/yyyy</p><p>  leave blank to use publish date</p>
                                </div>
                                <div className='border'> </div>
                                <div className='pricing'>
                                    <p>pricing:</p>
                                    <div className='dollars'>
                                        <input type="text" 
                                            placeholder='7.00'
                                            onChange={this.handleInput('price')} />
                                        <p>US Dollars</p>
                                    </div>
                                    <p>enter zero or more</p>
                                    <div className='checkbox'>
                                        <input type="checkbox" defaultChecked/>
                                        <p>let fans pay more if they want</p>
                                    </div>
                                    <div className='payments'>
                                        <p>Payments will go to <span>{this.props.currentUser.email}</span> via PayPal.</p>
                                        <p>more info</p>
                                    </div>
                                </div>
                                <div className='description'>
                                    <label onClick={this.toggleInput} 
                                        htmlFor="description-id">description</label>
                                        <input className='description'
                                            id='description-id'
                                            type="text"
                                            onChange={this.handleInput('description')} />
                                    
                                    <p>tell your fans about your work!</p>
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
                                <div id="album-art-error">
                                    <p>{photo_error}</p>
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