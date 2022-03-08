import React from 'react';


class SongForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.song;
    }

    render() {
        return (
            <div className='create-song-modal'>
                <form>
                    <label>Title
                        <input type="text" placeholder='Untitled Track' />
                    </label>
                    <button onClick={this.props.closeModal}>X</button>
                </form>
            </div>
        )
    }

    
}

export default SongForm;