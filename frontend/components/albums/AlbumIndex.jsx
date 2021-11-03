import React from 'react';

class AlbumIndex extends React.Component {
    componentDidMount() {
        this.props.fetchAlbums();
    }

    render() {
        const { albums } = this.props;
        return (
            <div>
                <ul>
                    {albums.map(album => (
                        <AlbumIndexItem album={album} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default AlbumIndex;