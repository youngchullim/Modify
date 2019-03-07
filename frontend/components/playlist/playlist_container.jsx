import React from 'react';
import { connect } from 'react-redux';
import Playlist from './playlist';

import { fetchPlaylists, 
  fetchPlaylist, 
  createPlaylist, 
  updatePlaylist, 
  deletePlaylist 
} from '../../actions/playlist_actions';

// import { logout } from '../../actions/session_actions';
// import { Link } from 'react-router-dom';

const mapStateToProps = state => {
  return({
    user: state.entities.users[state.session.id],
    playlists: Object.values(state.entities.playlists)
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
    updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),
    deletePlaylist: (id) => dispatch(deletePlaylist(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);

