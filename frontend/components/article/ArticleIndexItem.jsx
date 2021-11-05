import React from "react";


const ArticleIndexItem = (props) => {
    const {article, idx} = props;
    let name;
    if (idx === 0) {
        name = 'first-article' 
    } else { 
        name = 'side-article'
    }
    return (
        <div className={`article class${idx}`}>
            <h2>{article.title}:</h2>
            <p>{article.description}</p>
            <img className={`img${idx}`} src={article.photoUrl} alt={article.title} />
            <button>explore</button>
        </div>
    )
}

export default ArticleIndexItem;