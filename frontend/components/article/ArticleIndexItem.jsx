import React from "react";
import { Link } from "react-router-dom";


const ArticleIndexItem = (props) => {
    const {article, idx} = props;
    const albumId = Object.values(props.article.artist.albums)[0].id
    const album = Object.values(props.article.artist.albums)[0]
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
            <Link to='/'>
                <button>explore</button>
            </Link>
        </div>
    )
}

export default ArticleIndexItem;