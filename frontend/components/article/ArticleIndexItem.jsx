import React from "react";


const ArticleIndexItem = ({ article }) => {
    return (
        <div className='article'>
            <li key={article.id}>
                <h2>{article.title}</h2>
                <img src={article.photoUrl} alt={article.title} />
            </li>
        </div>
    )
}

export default ArticleIndexItem;