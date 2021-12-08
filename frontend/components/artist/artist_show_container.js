import { connect } from 'react-redux';
import ArtistShow from './ArtistShow';
import { edit } from '../../actions/session_actions'
import { fetchAlbums } from '../../actions/album_actions';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    albums: Object.values(state.entities.albums)
})

const mDTP = (dispatch) => ({
    editUser: (user, formData) => dispatch(edit(user, formData)),
    fetchAlbums: () => dispatch(fetchAlbums())
})

const ArtistShowContainer = connect(mSTP, mDTP)(ArtistShow);

export default ArtistShowContainer;