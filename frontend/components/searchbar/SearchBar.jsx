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
        
        const artists = [];
        let selectedArtist = '';
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

        return(
            <div>
                <div className="search">
                    <form onSubmit={(e) => {
                        debugger
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
                                    artists.filter(artist => {
                                        let idx = (artist.name.length - this.state.query.length) * -1
                                        if (this.state.query === '') {
                                            return artist;
                                        } else if (artist.name.slice(0, idx).toLowerCase().includes(this.state.query.toLowerCase())) {
                                            console.log('query', this.state.query, this.state.query.length)
                                            console.log('artist', artist.name.slice(0, idx), artist.name.slice(0, idx).length, artist.name.length)
                                            console.log(artist)
                                            console.log('-------')
                                            
                                            return artist;
                                        } else if (this.state.query.toLowerCase() === artist.name.toLowerCase()) {
                                            console.log('in else query', this.state.query)
                                            console.log('in else artist', artist.name.slice(0, idx))
                                            debugger
                                            selectedArtist = artist;
                                            return artist;
                                        }
                                    }).map((artist, idx) => (
                                        <li className="artist-search-dropdown-item"
                                            key={idx}
                                            onClick={(e) => this.albumNavigation(e, artist.id)}>
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