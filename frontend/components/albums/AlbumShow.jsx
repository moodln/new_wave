import React from "react";
import {Link} from "react-router-dom";

class AlbumShow extends React.Component {
    componentDidMount() {
        this.props.fetchAlbum(this.props.match.params.albumId - 3)
    }

    render() {
        if (!this.props.album) {
            return null 
        } else {
        return (
            <div>
                <h2>{this.props.album.title}</h2>
                <img src={this.props.album.photoUrl} alt={this.props.album.title} />
                <Link to='/'>Home</Link>
            </div>
        )
    }}
}

export default AlbumShow;