import { connect } from 'react-redux';
import { fetchAlbum, fetchAlbums } from '../../actions/album_actions';
import AlbumShow from './AlbumShow';

const mapStateToProps = (state, ownProps) => ({
    album: state.entities.albums[ownProps.match.params.albumId]
});

const mapDispatchToProps = (dispatch) => ({
    fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId))
});

const AlbumShowContainer = connect(mapStateToProps, mapDispatchToProps)(AlbumShow);

export default AlbumShowContainer;