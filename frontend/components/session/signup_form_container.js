import { connect } from 'react-redux';
import React from 'react';
import { signup, login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './SessionForm';


const mSTP = (state) => ({
    errors: Object.values(state.errors), 
    formType: 'signup'
});

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(signup(user)),
    handleDemo: (user) => dispatch(login(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('login'))}>
            Login
        </button>
    ),
    closeModal: () => dispatch(closeModal())
});

const SignupFormContainer = connect(mSTP, mDTP)(SessionForm);

export default SignupFormContainer;