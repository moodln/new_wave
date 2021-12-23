import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import { fetchAlbums } from "../../actions/album_actions";
import { fetchArticles } from "../../actions/article_actions";

const mapStateToProps = (state) => ({
    albums: Object.values(state.entities.albums),
    articles: Object.values(state.entities.articles)
})

const mapDispatchToProps = (dispatch) => ({
    fetchArticles: () => dispatch(fetchArticles()),
    fetchAlbums: () => dispatch(fetchAlbums())
})

const SearchBarContainer = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

export default SearchBarContainer;