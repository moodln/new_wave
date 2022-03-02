import { connect } from 'react-redux';
import ArtistAlbums from './ArtistAlbums';
import { fetchAlbums } from '../../actions/album_actions';
import { edit } from '../../actions/session_actions'


const mSTP = (state, ownProps) => {
    
   return {currentUser: state.entities.users[ownProps.match.params.artistId],
    albums: Object.values(state.entities.albums)}
}

const mDTP = (dispatch) => ({
    fetchAlbums: () => dispatch(fetchAlbums()),
    editUser: (user, formData) => dispatch(edit(user, formData)),
})

const ArtistAlbumsContainer = connect(mSTP, mDTP)(ArtistAlbums);

export default ArtistAlbumsContainer;