import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import SearchResult from './search_result';

import { fetchArtists } from '../../actions/artist_actions';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchPlaylists } from '../../actions/playlist_actions';


const mapStateToProps = state => {
  return({
    user: state.entities.users[state.session.id],
    artists: Object.values(state.entities.artists),
    albums: Object.values(state.entities.albums),
    playlists: Object.values(state.entities.playlists),
    searchBar: ""
  });
};

const mapDispatchToProps = dispatch => {
  return({
    logout: () => dispatch(logout()),
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchArtists: () => dispatch(fetchArtists()),
    fetchPlaylists: () => dispatch(fetchPlaylists())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);

