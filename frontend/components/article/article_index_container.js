import { fetchArticles } from "../../actions/article_actions";
import { connect } from 'react-redux';
import ArticleIndex from './ArticleIndex'

const mapStateToProps = (state) => ({
    articles: Object.values(state.entities.articles)
})

const mapDispatchToProps = (dispatch) => ({
    fetchArticles: () => dispatch(fetchArticles())
})

const ArticleIndexContainer = connect(mapStateToProps, mapDispatchToProps)(ArticleIndex);

export default ArticleIndexContainer;