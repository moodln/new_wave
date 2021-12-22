import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.albums || !this.props.articles) return null;

        return(
            <div>
                <input type="text" />
            </div>
        )
    }
}

export default SearchBar;