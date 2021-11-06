import { connect } from 'react-redux';
import { fetchAlbum } from '../../actions/album_actions';
import AlbumShow from './AlbumShow';

const mapStateToProps = (state, ownProps) => {
    return {album: state.entities.albums[ownProps.match.params.albumId - 3]}
};

const mapDispatchToProps = (dispatch) => ({
    fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId))
});

const AlbumShowContainer = connect(mapStateToProps, mapDispatchToProps)(AlbumShow);

export default AlbumShowContainer;