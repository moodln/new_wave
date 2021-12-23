import { connect } from 'react-redux';
import { fetchAlbum, deleteAlbum, fetchAlbums } from '../../actions/album_actions';
import AlbumShow from './AlbumShow';

const mapStateToProps = (state, ownProps) => ({
    album: state.entities.albums[ownProps.match.params.albumId],
    currentUser: state.entities.users[state.session.id],
    albums: Object.values(state.entities.albums)
});

const mapDispatchToProps = (dispatch) => ({
    fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
    deleteAlbum: (albumId) => dispatch(deleteAlbum(albumId)),
    fetchAlbums: () => dispatch(fetchAlbums())
});

const AlbumShowContainer = connect(mapStateToProps, mapDispatchToProps)(AlbumShow);

export default AlbumShowContainer;