import React from 'react';
import { button, Link, NavLink } from 'react-router-dom';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchBar: ""};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({searchBar: e.target.value});
  }
  

  render() {

    return(
      <div className="navbar-search">
        <label className="search-bar">
          <input type="text"
            className="search-input"
            // value={}
            // onClick={}
            placeholder="Start typing..."
            />
        </label>
        <div className="search-content">
          <h2 className="search-title">Search Modify</h2>
          <div className="search-msg">Find your favorite songs, albums, artists, and playlists</div>
        </div>
      </div>
    )
  }
}

export default Search;