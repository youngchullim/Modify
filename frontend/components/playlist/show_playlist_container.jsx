import React from 'react';
import { connect } from 'react-redux';
import ShowPlaylist from './show_playlist';

import { 
  fetchPlaylist, 
  updatePlaylist, 
  deletePlaylist 
} from '../../actions/playlist_actions';

// import { logout } from '../../actions/session_actions';
// import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return({
    user: state.entities.users[state.session.id],
    playlist: state.entities.playlists[ownProps.match.params.id]
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
    updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),
    deletePlaylist: (id) => dispatch(deletePlaylist(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPlaylist);

