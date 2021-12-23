import React from "react";
import { withRouter } from 'react-router-dom';


class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            query: '',
            // selectedArtist: []
        }

        this.updateQuery = this.updateQuery.bind(this);
        // this.updateArtist = this.updateArtist.bind(this);
        this.albumNavigation = this.albumNavigation.bind(this);
    }

    componentDidMount() {
        this.props.fetchAlbums();
        this.props.fetchArticles();
    }

    updateQuery(e) {
        e.preventDefault();
        this.setState({
            query: e.currentTarget.value
        })
    }

    // updateArtist(artist) {
    //     this.setState ({
    //         selectedArtist: artist.id
    //     })
    // }

    albumNavigation(artistId) {
        let albums = Object.values(this.props.albums).filter(album => album.artist.id === artistId)
        let album = albums[0];
        debugger
        this.props.history.push(`/albums/redirect/${album.id}`)
    }

    render() {
        if (!this.props.albums || !this.props.articles) return null;
        
        const artists = [];
        let selectedArtist = [];
        const { articles, albums } = this.props;
        this.props.albums.map(album => {
            if (!artists.includes(album.artist.name)) {
                artists.push(album.artist)
            }
        })
        this.props.articles.map(article => {
            if (!artists.includes(article.artist.name)) {
                artists.push(article.artist)
            }            
        })
        // debugger
        return(
            <div>
                <div className="search">
                    <form onSubmit={(selectedArtist) => {
                        debugger
                        return this.albumNavigation(selectedArtist.slice(-1)[0].id)}}>
                        <input type="text" 
                            placeholder="Search for artist or album" 
                            value={this.state.query} 
                            onChange={this.updateQuery}
                        />
                    
                
                        <div className="content-search">
                        
                            <ul className="search-dropdown">
                                
                                {
                                    artists.filter(artist => {
                                        let idx = (artist.name.length - this.state.query.length) * -1
                                        if (this.state.query === '') {
                                            return artist;
                                        } else if (artist.name.slice(0, idx).toLowerCase().includes(this.state.query.toLowerCase())) {
                                            // debugger
                                            selectedArtist.push(artist)
                                            return artist;
                                        }
                                    }).map((artist, idx) => (
                                        <li className="artist-search-dropdown-item"
                                            key={idx}
                                            onClick={() => this.albumNavigation(artist.id)}>
                                                {artist.name}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(SearchBar);