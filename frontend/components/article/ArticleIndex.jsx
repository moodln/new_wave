import React from 'react';
import ArticleIndexItem from './ArticleIndexItem';

class ArticleIndex extends React.Component {
    componentDidMount() {
        this.props.fetchArticles();
    }

    render() {
        const { articles } = this.props;
        
        return (
            <div>
                <div className='article-index'>
                    {articles.map((article, idx) => (
                        <ArticleIndexItem key={idx} article={article} idx={idx} />
                    ))}
                </div>
                <div className='splash-text'>
                <p>Fans have paid artists $467 million using new wave, and $16.8 million in the last 30 days alone.</p>
                <p>selling right now</p>
                </div>
            </div>
        )
    }
}

export default ArticleIndex;