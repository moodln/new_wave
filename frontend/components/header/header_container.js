import { connect } from "react-redux";
import { logout, login, clearErrors } from "../../actions/session_actions";
import { openModal, closeModal } from '../../actions/modal_actions';
import Header from "./Header";

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session
})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    handleDemo: (user) => dispatch(login(user)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
})

const HeaderContainer = connect(mSTP, mDTP)(Header);

export default HeaderContainer;