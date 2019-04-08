import React from 'react';
import { button, Link, NavLink } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';


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
    let result;

    if (this.state.searchBar) {
      result = (
        <div className="search-results-container">
          <Route exact path="/search" render={ () => <Redirect to="/search/top"/> }/>
          <Route path="/search/:tab" render={ () => <SearchResult searchBar={this.state.searchBar}/> }/>
        </div>
      );
    } else {
      result = (
        <div className="search-content">
          <h2 className="search-title">Search Modify</h2>
          <div className="search-msg">Find your favorite songs, albums, artists, and playlists</div>
        </div>
      );
    }

    return(
      <div className="navbar-search">
        <label className="search-bar">
          <input type="text"
            className="search-input"
            value={this.state.searchBar}
            onChange={this.handleChange}
            placeholder="Start typing..."
            />
        </label>
        {result}
      </div>
    )
  }
}

export default Search;