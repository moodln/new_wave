import React from 'react';
import AlbumIndexItem from './AlbumIndexItem';

class AlbumIndex extends React.Component {
    componentDidMount() {
        this.props.fetchAlbums();
    }

    render() {
        const { albums } = this.props;
        return (
            <div className='album-index'>
                <ul>
                    {albums.map((album, idx) => (
                        <AlbumIndexItem key={idx} album={album} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default AlbumIndex;