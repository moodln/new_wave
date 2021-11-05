import React from "react";


const ArticleIndexItem = (props) => {
    const {article, idx} = props;

    return (
        <div className={`article class${idx}`}>
            <img className={`img${idx}`} src={article.photoUrl} alt={article.title} />
            <div className={`container-${idx}`}>
                <h2>{article.title}:</h2>
                <p>{article.description}</p>
            </div>
            <button>explore</button>
        </div>
    )
}

export default ArticleIndexItem;