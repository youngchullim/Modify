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

    return (
      <div>
        SEARCHTEST SEARCHTEST SEARCHTEST SEARCHTEST SEARCHTEST SEARCHTEST 
        SEARCHTEST SEARCHTEST SEARCHTEST SEARCHTEST SEARCHTEST SEARCHTEST 
        SEARCHTEST SEARCHTEST SEARCHTEST SEARCHTEST SEARCHTEST SEARCHTEST 
      </div>
    )
  }
}

export default withRouter(SearchResult);