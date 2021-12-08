import { connect } from 'react-redux';
import ArtistAlbums from './ArtistAlbums';
import { fetchAlbums } from '../../actions/album_actions';

const mSTP = (state, ownProps) => {
    debugger
   return {currentUser: state.entities.users[ownProps.match.params.artistId],
    albums: Object.values(state.entities.albums)}
}

const mDTP = (dispatch) => ({
    fetchAlbums: () => dispatch(fetchAlbums())
})

const ArtistAlbumsContainer = connect(mSTP, mDTP)(ArtistAlbums);

export default ArtistAlbumsContainer;