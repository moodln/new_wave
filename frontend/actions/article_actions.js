import * as ArticleApiUtil from '../util/article_api_util';

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';

const receiveArticles = (articles) => ({
    type: RECEIVE_ARTICLES,
    articles
});

const receiveArticle = (article) => ({
    type: RECEIVE_ARTICLE,
    article
})

export const fetchArticles = () => (dispatch) => {
    return ArticleApiUtil.fetchArticles()
        .then((articles) => dispatch(receiveArticles(articles)))
        .fail((err) => console.log(err.responseJSON))
}

export const fetchArticle = (articleId) => (dispatch) => {
    return ArticleApiUtil.fetchArticle(articleId)
        .then((article) => dispatch(receiveArticle(article)))
}