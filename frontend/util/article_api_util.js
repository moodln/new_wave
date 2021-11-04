export const fetchArticles = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/articles'
    });
};

export const fetchArticle = (articleId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/articles/${articleId}`
    });
};
