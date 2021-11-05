class AlbumShow extends React.Component {
    componentDidMount() {
        this.props.requestAlbum(this.props.match.params.albumId)
    }

    render() {
        return (
            <div>
                <h2>{this.props.album.title}</h2>
                
                <Link to='/'>Home</Link>
            </div>
        )
    }
}

export default AlbumShow;