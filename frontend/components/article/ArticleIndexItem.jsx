import React from "react";


const ArticleIndexItem = (props) => {
    const {article, idx} = props;
    return (
        <div className='article'>
                <h2>{article.title}:</h2>
                <p>{article.description}</p>
                <img className={`name${idx}`} src={article.photoUrl} alt={article.title} />
                <button>explore</button>
        </div>
    )
}

export default ArticleIndexItem;