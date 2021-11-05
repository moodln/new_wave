import React from "react";
import { Link } from "react-router-dom";


const ArticleIndexItem = (props) => {
    const {article, idx} = props;

    return (
        <div className={`article class${idx}`}>
            <Link to='/'>
                <img className={`img${idx}`} src={article.photoUrl} alt={article.title} />
            </Link>
            <div className={`container-${idx}`}>
                <h2>{article.title}:</h2>
                <p>{article.description}</p>
            </div>
            <Link to='/'>
                <button>explore</button>
            </Link>
        </div>
    )
}

export default ArticleIndexItem;