import { connect } from "react-redux";
import { logout, login, clearErrors } from "../../actions/session_actions";
import { openModal, closeModal } from '../../actions/modal_actions';
import Header from "./Header";
import { fetchAlbums } from "../../actions/album_actions";
import { fetchArticles } from "../../actions/article_actions";

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session,
    albums: Object.values(state.entities.albums),
    articles: Object.values(state.entities.articles)
})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    handleDemo: (user) => dispatch(login(user)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors()),
    fetchAlbums: () => dispatch(fetchAlbums),
    fetchArticles: () => dispatch(fetchArticles)
})

const HeaderContainer = connect(mSTP, mDTP)(Header);

export default HeaderContainer;