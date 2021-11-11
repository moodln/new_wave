import React from 'react';
import { Link } from 'react-router-dom';

class ArtistShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.currentUser
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleInput = this.handleInput.bind(this);
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
            .then(() => this.props.history.push(`/users/${this.props.currentUser.id}`));

    }

    render() {
        debugger
        let aboutInfo;
        let location;
        if (this.state.location === 'undefined' || this.state.location === null) {
            location = <p>Independence, <br/>Kansas</p>
        } else {
            location = <p>{this.state.location}</p>
        }
        if (!this.state.about) {
            this.state.about = 'add artist bio'
            aboutInfo = <input type="text" 
                            value={this.state.about} 
                            onChange={this.handleInput('about')} />
        } else {
            aboutInfo = <div className='edit-about-info'>
                            <p>{this.state.about}</p>
                            <label onClick={this.toggleInput} htmlFor='about-info-id'>edit bio
                            <input type="text"
                                id='about-info-id' 
                                value={this.state.about} 
                                onChange={this.handleInput('about')} />
                            </label>
                        </div>
        }

        return (
            <div className='artist-show-container'>
                <div className='artist-show-message'>
                    <h1>This is your artist homepage.</h1>
                    <Link to='/albums'>Add an album</Link>
                </div>
                <form onSubmit={this.handleSubmit}>
                        <div>
                            <div className='artist-info'>
                                <img src={this.state.photoUrl} alt="gfgfgf" />
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