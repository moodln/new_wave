import React from "react";
import { Link } from "react-router-dom";


const ArticleIndexItem = (props) => {
    const {article, idx, album} = props;
    const albumId = Object.values(album)[0].id
    debugger
    return (
        <div className='article-index-item'>
            <Link to={`/albums/${albumId}`} state={album}>
                {/* <div className='secondary-image' style={{backgroundImage: `url(${article.photoUrl})`}}></div> */}
                <img src={article.photoUrl} alt={article.title} />
            </Link>
            <div>
                <h2>{article.title}:</h2>
                <p>{article.description}</p>
            </div>
        </div>
    )
}

export default ArticleIndexItem;