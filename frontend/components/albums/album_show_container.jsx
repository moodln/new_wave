import { connect } from 'react-redux';
import { fetchAlbum, deleteAlbum } from '../../actions/album_actions';
import AlbumShow from './AlbumShow';

const mapStateToProps = (state, ownProps) => ({
    album: state.entities.albums[ownProps.match.params.albumId],
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
    fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
    deleteAlbum: (albumId) => dispatch(deleteAlbum(albumId))
});

const AlbumShowContainer = connect(mapStateToProps, mapDispatchToProps)(AlbumShow);

export default AlbumShowContainer;