import { connect } from "react-redux";
import { logout, login } from "../../actions/session_actions";
import { openModal } from '../../actions/modal_actions';
import Header from "./Header";

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    handleDemo: (user) => dispatch(login(user)),
    openModal: (modal) => dispatch(openModal(modal))

})

const HeaderContainer = connect(mSTP, mDTP)(Header);

export default HeaderContainer;