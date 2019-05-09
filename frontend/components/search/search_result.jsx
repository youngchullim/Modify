import React from 'react';
import { ProtectedRoute } from '../../util/route_util';
import { withRouter, NavLink, Route } from 'react-router-dom';

import ArtistContainer from '../artist/artist_container';
import AlbumContainer from '../album/album_container';
import PlaylistContainer from '../playlist/playlist_container';

class SearchResult extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    let result;
    if (this.props.searchBar !== "") {
      result = (
        <div className="search-results">
          SEARCHTEST SEARCHTEST SEARCHTEST SEARCHTEST SEARCHTEST SEARCHTEST 
          SEARCHTEST SEARCHTEST SEARCHTEST SEARCHTEST SEARCHTEST SEARCHTEST 
          SEARCHTEST SEARCHTEST SEARCHTEST SEARCHTEST SEARCHTEST SEARCHTEST 
        </div>
      );
    }
    return (
      <div>
        {result}
      </div>
    )
  }
}

export default withRouter(SearchResult);