import { connect } from "react-redux";
import { createAlbum } from "../../actions/album_actions";
import { openModal } from "../../actions/modal_actions";
import { createSong } from "../../actions/song_actions";
import CreateAlbumForm from './CreateAlbumForm';

const mSTP = (state) => {
    if (state.session.id) {
        return {
            currentUser: state.entities.users[state.session.id],
            errors: state.errors.album
        }
    } else {
        return {errors: 'you must be signed in to create a new album'}
    }
}

const mDTP = (dispatch) => ({
    createAlbum: (album) => dispatch(createAlbum(album)),
    createSong: (song) => dispatch(createSong(song)),
    openModal: (modal) => dispatch(openModal(modal))
})

const CreateAlbumContainer = connect(mSTP, mDTP)(CreateAlbumForm);

export default CreateAlbumContainer;