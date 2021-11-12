import React from 'react';
import { closeModal, openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';

function Modal({ modal, errors, handleErrors, closeModal, openModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className={`modal-background-${modal}`} onClick={handleErrors}>
            <div className={`modal-child-${modal}`} onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal,
        errors: state.errors.session
    };
};

const handleErrors = (errors) => {
    if (!errors) {
        return closeModal;
    } else {
        return openModal;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        handleErrors: () => dispatch(handleErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
