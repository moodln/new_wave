import React from 'react';
import ArticleIndexItem from './ArticleIndexItem';

class ArticleIndex extends React.Component {
    componentDidMount() {
        this.props.fetchArticles();
    }

    render() {
        const { articles } = this.props;
        
        return (
            <div className='article-index'>
                {articles.map((article, idx) => (
                    <ArticleIndexItem key={idx} article={article} />
                ))}
            </div>
        )
    }
}

export default ArticleIndex;