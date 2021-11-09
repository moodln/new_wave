import React from 'react';

class CreateAlbumForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: 'album name',
            artist_id: this.props.currentUser.id,
            img_url: null, 
            audio_url: null
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
        formData.append('album[songs]', this.state.audio_url);
        debugger
        this.props.createAlbum(formData)
            .then(album => history.push(`/api/albums/${album.album.id}`))
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type="text"  value={this.state.title} onChange={this.handleInput('title')}/>
                <input type="file" accept="image/png, image/jpeg" onChange={this.handleFile('img_url')} />
                <input type="file" accept="audio/mp3" onChange={this.handleFile('audio_url')} />
                <button>submit</button>
                </form>
            </div>
        )
    }
}

export default CreateAlbumForm;