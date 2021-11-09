import { connect } from 'react-redux';
import { logout, clearErrors, login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Greeting from './Greeting';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors()),
    handleDemo: (user) => dispatch(login(user)),
    openModal: (modal) => dispatch(openModal(modal))
});

const GreetingContainer = connect(mapStateToProps, mapDispatchToProps)(Greeting);

export default GreetingContainer;