import React from 'react';
import AlbumIndexContainer from '../albums/album_index_container'
import ArticleIndexContainer from '../article/article_index_container';



class Greeting extends React.Component {

    render() {
        return (
            <div>
                <ArticleIndexContainer />
                <AlbumIndexContainer />
            </div>
        )
    }
    
}

export default Greeting;