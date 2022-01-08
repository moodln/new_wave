import React from "react";
import { withRouter } from 'react-router-dom';


class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            query: ''
        }

        this.updateQuery = this.updateQuery.bind(this);
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

    albumNavigation(e, artistId) {
        debugger
        this.handleInputClick();
        e.preventDefault();
        let albums = Object.values(this.props.albums).filter(album => album.artist.id === artistId)
        let album = albums[0];
        this.setState({
            query: ''
        })
        
        
        this.props.history.push(`/albums/redirect/${album.id}`)
    }

    handleInputClick() {
        const dropdown = document.getElementsByClassName('content-search')[0];
      
        const display = dropdown.style.display;

        if (display === 'none') {
            dropdown.style.display = 'block';
        } else {
            dropdown.style.display = 'none';
        }
    }

    render() {
        if (this.props.albums == [] || this.props.articles == []) return null;
      debugger
        let artists = new Map();
        
        let selectedArtist = '';
        const { articles, albums } = this.props;
        this.props.albums.map(album => {
            if (!artists.has(album.artist.name)) {
                artists.set(album.artist.name, album.artist)
            } else if (!artists.has(album.artist.username)) {
                artists.set(album.artist.username, album.artist)
            }
        })
        this.props.articles.map(article => {
            if (!artists.has(article.artist.name)) {
                artists.set(article.artist.name, article.artist)
            }            
        })

        return(
            <div>
                <div className="search">
                    <form onSubmit={(e) => {
                        return this.albumNavigation(e, selectedArtist.id)}}>
                        <input type="text" 
                            placeholder="Search for artist or album" 
                            value={this.state.query} 
                            onChange={this.updateQuery}
                            onClick={this.handleInputClick}
                        />
                    
                
                        <div className="content-search"
                            style={{display: 'none'}}>
                        
                            <ul className="search-dropdown">
                                
                                {
                                    Array.from(artists.entries()).filter( entry => {
                                        let artist = entry[1];
                                        let idx = (entry[0].length - this.state.query.length) * -1
                                        if (this.state.query === '') {
                                            return artist;
                                        } else if (entry[0].slice(0, idx).toLowerCase().includes(this.state.query.toLowerCase())) {
                                            return artist;
                                        } else if (this.state.query.toLowerCase() === entry[0].toLowerCase()) {
                                            selectedArtist = artist;
                                            return artist;
                                        }
                                    }).map((artistObject, idx) => {
                                        return (
                                            <li className="artist-search-dropdown-item"
                                                key={idx}
                                                onClick={(e) => this.albumNavigation(e, artistObject[1].id)}>
                                                    {artistObject[0]}
                                            </li>
                                        )
                                    })
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