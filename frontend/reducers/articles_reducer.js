import { RECEIVE_ARTICLES, RECEIVE_ARTICLE } from "../actions/article_actions";

const articlesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ARTICLES:
            return nextState = action.articles;
        case RECEIVE_ARTICLE:
            nextState[action.article.id] = action.article;
            return nextState;
        default:
            return state;
    }
}

export default articlesReducer;