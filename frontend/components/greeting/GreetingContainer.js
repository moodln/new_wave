import { connect } from 'react-redux';
import { logout, clearErrors } from '../../actions/session_actions';
import Greeting from './Greeting';


const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors())
});

const GreetingContainer = connect(mapStateToProps, mapDispatchToProps)(Greeting);

export default GreetingContainer;