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
        this.handleInputClick();
        e.preventDefault();
        let albums = Object.values(this.props.albums).filter(album => album.artist.id === artistId)
        let album = albums[0];
        this.setState({
            query: ''
        })
        
        // debugger
        this.props.history.push(`/albums/redirect/${album.id}`)
    }

    handleInputClick() {
        const dropdown = document.getElementsByClassName('content-search')[0];
        // debugger
        const display = dropdown.style.display;

        if (display === 'none') {
            dropdown.style.display = 'block';
        } else {
            dropdown.style.display = 'none';
        }
    }

    render() {
        if (!this.props.albums || !this.props.articles) return null;
        
        let artists = new Map();
        
        let selectedArtist = '';
        const { articles, albums } = this.props;
        this.props.albums.map(album => {
            if (!artists.has(album.artist.name)) {
                artists.set(album.artist.name, album.artist)
            }
        })
        this.props.articles.map(article => {
            if (!artists.has(article.artist.name)) {
                artists.set(article.artist.name, article.artist)
            }            
        })
        console.log(artists)

        return(
            <div>
                <div className="search">
                    <form onSubmit={(e) => {
                        // debugger
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
                                        // let name = entry[0];
                                        let artist = entry[1];
                                        // debugger
                                        let idx = (entry[0].length - this.state.query.length) * -1
                                        if (this.state.query === '') {
                                            debugger
                                            console.log(artist)
                                            return artist;
                                        } else if (entry[0].slice(0, idx).toLowerCase().includes(this.state.query.toLowerCase())) {
                                            // debugger
                                            console.log('query', this.state.query, this.state.query.length)
                                            console.log('artist', entry[0].slice(0, idx), entry[0].slice(0, idx).length, entry[0].length)
                                            console.log(typeof artist, artist)
                                            console.log('-------')
                                            // debugger
                                            return artist;
                                        } else if (this.state.query.toLowerCase() === entry[0].toLowerCase()) {
                                            console.log('in else query', this.state.query)
                                            console.log('in else artist', entry[0].slice(0, idx))
                                            // debugger
                                            selectedArtist = artist;
                                            return artist;
                                        }
                                    }).map((artistObject, idx) => {
                                        // debugger
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