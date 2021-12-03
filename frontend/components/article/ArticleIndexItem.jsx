import React from "react";
import { Link } from "react-router-dom";


const ArticleIndexItem = (props) => {
    const {article, idx, album} = props;
    const albumId = Object.values(album)[0].id
    debugger
    return (
        <div className={`article class${idx}`}>
            <Link to={`/albums/${albumId}`} state={album}>
                <img className={`img${idx}`} src={article.photoUrl} alt={article.title} />
            </Link>
            <div className={`container-${idx}`}>
                <h2>{article.title}:</h2>
                <p>{article.description}</p>
            </div>
        </div>
    )
}

export default ArticleIndexItem;