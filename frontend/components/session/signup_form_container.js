import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './SessionForm';

const mSTP = (state) => ({
    errors: Object.values(state.errors), 
    formType: 'signup'
});

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(signup(user)),
    handleDemo: (user) => dispatch(login(user))
});

const SignupFormContainer = connect(mSTP, mDTP)(SessionForm);

export default SignupFormContainer;