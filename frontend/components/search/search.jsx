import React from 'react';
import { button, Link, NavLink } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

import SearchResultContainer from './search_result_container';

import ShowArtistContainer from '../artist/show_artist_container';
import ShowAlbumContainer from '../album/show_album_container';
import ShowPlaylistContainer from '../playlist/show_playlist_container';

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
          <Route path="/search/:tab" render={ () => <SearchResultContainer searchBar={this.state.searchBar}/> }/>
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
        <section className='content-spacing'>
          {result}

          <ProtectedRoute exact path='/search/artists/:artistId' component={ShowArtistContainer} />
          <ProtectedRoute exact path='/search/playlists/:playlistId' component={ShowPlaylistContainer} />
          <ProtectedRoute exact path='/search/albums/:albumId' component={ShowAlbumContainer} />
        </section>
      </div>
    )
  }
}

export default Search;