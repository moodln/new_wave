import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './SessionForm';

const mSTP = (state) => ({
    errors: Object.values(state.errors), 
    formType: 'login'
});

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(login(user)),
    handleDemo: (user) => dispatch(login(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>
            sign up
        </button>
    ),
    closeModal: () => dispatch(closeModal())
});

const LoginFormContainer = connect(mSTP, mDTP)(SessionForm);

export default LoginFormContainer;