import React from "react";
import { Link } from "react-router-dom";

const MainArticle = (props) => {
    const {article, album} = props;
    const albumId = Object.values(album)[0].id

    return (
        <div className={'main-article'}>
            <Link to={`albums/${albumId}`} state={album}>
                <img className="main-image" src={article.photoUrl} alt={article.title} />
            </Link>
            <div>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
            </div>
            <Link to={`albums/${albumId}`}>
                <button>explore</button>
            </Link>
        </div>
    )
}

export default MainArticle;