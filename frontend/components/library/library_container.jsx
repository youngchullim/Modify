import React from 'react';
import Library from './library';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import { 
  fetchPlaylists, 
  fetchPlaylist, 
  createPlaylist, 
  updatePlaylist, 
  deletePlaylist 
  } from '../../actions/playlist_actions';

const mapStateToProps = state => {
  return({
    user: state.entities.users[state.session.id]
    // playlist: state.entities.playlists[playlist.id]
  });
};

const mapDispatchToProps = dispatch => {
  return({
    logout: () => dispatch(logout()),
    // @@@@@@@@@@@     START HERE     @@@@@@@@@@@@@@
    // how do I get :id and :playlist
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
    updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),
    deletePlaylist: (id) => dispatch(deletePlaylist(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Library);

