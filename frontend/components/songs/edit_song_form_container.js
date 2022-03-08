// import React from 'react';
// import { connect } from 'react-redux';
// import SongForm from './SongForm';
// import { requestSong, updateSong } from '../../actions/song_actions';

// class EditSongForm extends React.Component {
//     componentDidMount() {
//         this.props.requestSong(this.props.match.params.songId);
//     }

//     render() {
//         const {action, formType, song } = this.props;

//         if (!song) return null;
//         return (
//             <SongForm 
//                 action={action}
//                 song={song}
//                 formType={formType}
//             />
//         );
//     }
// }

// const mSTP = (state, ownProps) => ({
//     song: state.songs[ownProps.match.params.songId],
//     formType: 'update'
// });

// const mDTP = (dispatch) => ({
//     requestSong: (songId) => dispatch(requestSong(songId)),
//     action: (song) => dispatch(updateSong(song))
// });

// export default connect(mSTP, mDTP)(SongForm);