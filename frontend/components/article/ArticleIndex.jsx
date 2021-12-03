import React from 'react';
import ArticleIndexItem from './ArticleIndexItem';
import MainArticle from './MainArticle';

class ArticleIndex extends React.Component {
    componentDidMount() {
        this.props.fetchArticles();
    }

    render() {
        if (this.props.articles.length < 1) {
            return null;
        } 
        const { articles } = this.props;
        const mainArticle = articles[0]
        const secondaryArticles = articles.slice(1);

        return (
            <div>
                <div className='article-index'>
                    <MainArticle article={mainArticle}
                        album={mainArticle.artist.albums} />
                    {secondaryArticles.map((article, idx) => (
                        <ArticleIndexItem key={idx} 
                            article={article} 
                            idx={idx}
                            album={article.artist.albums} />
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