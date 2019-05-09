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
        <div className="search-tabs">
          <ul className="library-tabs">
            <li className="library-playlists">
                  {/* USED !IMPORTANT CSS RULE */}
              <NavLink className="playlists-link l-link" activeStyle={{}} activeClassName="selected-library-tab" exact to={`/search`}>
                <span className="playlists l-tabs a-s-tabs">TOP RESULTS</span>
              </NavLink>
            </li>
            <li className="library-songs">
                  {/* USED !IMPORTANT CSS RULE */}
              <NavLink className="songs-link l-link" activeStyle={{}} activeClassName="selected-library-tab" to={`/search/artists`}>
                <span className="songs l-tabs a-s-tabs">ARTISTS</span>
              </NavLink>
            </li>
            <li className="library-songs">
                  {/* USED !IMPORTANT CSS RULE */}
              <NavLink className="songs-link l-link" activeStyle={{}} activeClassName="selected-library-tab" to={`/search/songs`}>
                <span className="songs l-tabs a-s-tabs">SONGS</span>
              </NavLink>
            </li>
            <li className="library-songs">
                  {/* USED !IMPORTANT CSS RULE */}
              <NavLink className="songs-link l-link" activeStyle={{}} activeClassName="selected-library-tab" to={`/search/albums`}>
                <span className="songs l-tabs a-s-tabs">ALBUMS</span>
              </NavLink>
            </li>
          </ul>
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

          {/* <ProtectedRoute exact path='/search/artists' render={(props) => <SearchResultContainer {...props} queries={this.state.searchBar} />}  />
          <ProtectedRoute exact path='/search/artists' render={(props) => <SearchArtistsContainer {...props} queries={this.state.searchBar} />}  />
          <ProtectedRoute exact path='/search/songs' render={(props) => <SearchSongsContainer {...props} queries={this.state.searchBar} />}  />
          <ProtectedRoute exact path='/search/albums' render={(props) => <SearchAlbumsContainer {...props} queries={this.state.searchBar} />}  /> */}
        </section>
      </div>
    )
  }
}

export default Search;