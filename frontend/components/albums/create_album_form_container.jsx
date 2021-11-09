import { connect } from "react-redux";
import { createAlbum } from "../../actions/album_actions";
import { createSong } from "../../actions/song_actions";
import CreateAlbumForm from './CreateAlbumForm';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
    createAlbum: (album) => dispatch(createAlbum(album)),
    createSong: (song) => dispatch(createSong(song))
})

const CreateAlbumContainer = connect(mSTP, mDTP)(CreateAlbumForm);

export default CreateAlbumContainer;