import { connect } from 'react-redux';
import ArtistShow from './ArtistShow';
import { edit } from '../../actions/session_actions'

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
    editUser: (user, formData) => dispatch(edit(user, formData))
})

const ArtistShowContainer = connect(mSTP, mDTP)(ArtistShow);

export default ArtistShowContainer;