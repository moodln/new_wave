import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './SessionForm';

const mSTP = (state) => ({
    errors: Object.values(state.errors), 
    formType: 'login'
});

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(login(user))
});

const LoginFormContainer = connect(mSTP, mDTP)(SessionForm);

export default LoginFormContainer;