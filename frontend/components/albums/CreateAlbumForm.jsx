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
            audio_url: null
        }
        } 

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleInput(type) {
        return (e) => (
            this.setState({[type]: e.currentTarget.value})
        )
    }

    handleFile(type) {
        return (e) => (
            this.setState({[type]: e.currentTarget.files[0]})
        )
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
        if (this.state) {
            return (
                <div>
                    <div className='create-album-body'>
                        <div className='create-album-form'>
                            <form onSubmit={this.handleSubmit}>
                            <div className='image-container'>
                                <div className='image'>
                                    <img src={this.state.img_url} alt="default image" />
                                </div>
                            </div>
                            <div className='album-name-container'>
                                    <input className='album-name' type="text" value={this.state.title} onChange={this.handleInput('title')} />
                            </div>
                            <div className='image-file-container'>
                                    <input className='image-file' type="file" title='Upload Album Art' accept="image/png, image/jpeg" onChange={this.handleFile('img_url')} />
                            </div>
                            <div className='song-file-container'>
                                <input className='song-file' type="file" title='add track' accept="audio/mp3" onChange={this.handleFile('audio_url')} />
                            </div>
                            <button>submit</button>
                            </form>
                        </div>
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