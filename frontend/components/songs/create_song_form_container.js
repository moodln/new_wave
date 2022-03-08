import { connect } from 'react-redux';
import SongForm from './SongForm';
import { createSong } from '../../actions/song_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state) => ({
    song: {
        title: ''
    },
    formType: 'create'
});

const mDTP = (dispatch) => ({
    action: (song) => dispatch(createSong(song)),
    closeModal: () => dispatch(closeModal)
});

export default connect(mSTP, mDTP)(SongForm);