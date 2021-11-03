import React from 'react';

class AlbumIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: []
        }
        this.fetchAlbums = this.fetchAlbums.bind(this);
    }

    fetchAlbums() {
        $.ajax({
            url: "/api/albums"
        }).then(albumz => {
            this.setState({ albums: albumz });
        });
    }

    componentDidMount() {
        debugger
        if (!this.state.albums) {
        this.fetchAlbums();
        }
        debugger
    }


    render() {
        if (!this.state.albums) return null;
        return (
            <ul>
                <h1>hiiiiiii</h1>
                {this.state.albums.map(album => {
                    return (
                        <li key={album.id}>
                            <h2>{album.title}</h2>
                            <img src={album.photoUrl} />
                        </li>
                    );
                })}
            </ul>
        )
    }
}

export default AlbumIndex;