import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import SongFormContainer from '../songs/create_song_form_container';

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { modal } = this.props;
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
            case 'create-song':
                component = <SongFormContainer />;
                break;
            default:
                return null;
        }
        return (
            <div className={`modal-background-${modal}`} onClick={() => this.props.closeModal()}>
                <div className={`modal-child-${modal}`} onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal,
        errors: state.errors.session
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
