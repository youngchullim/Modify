import React from 'react';
import Search from './search';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import { fetchSongs } from '../../actions/song_actions';
import { fetchArtists } from '../../actions/artist_actions';
import { fetchAlbums } from '../../actions/album_actions';

const mapStateToProps = state => {
  return({
    user: state.entities.users[state.session.id]
  });
};

const mapDispatchToProps = dispatch => {
  return({
    logout: () => dispatch(logout()),
    fetchSongs: (queries) => dispatch(fetchSongs(queries)),
    fetchArtists: (queries) => dispatch(fetchArtists(queries)),
    fetchAlbums: (queries) => dispatch(fetchAlbums(queries)),

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

