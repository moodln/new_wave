import { connect } from 'react-redux';
import { fetchAlbums } from '../../actions/album_actions';
import AlbumIndex from './AlbumIndex';

const mapStateToProps = (state) => ({
    albums: state.albums
})

// const mapDispatchToProps = (dispatch) => ({
//     fetchAlbums: () => dispatch(fetchAlbums())
// })

const AlbumIndexContainer = connect(mapStateToProps)(AlbumIndex);

export default AlbumIndexContainer;