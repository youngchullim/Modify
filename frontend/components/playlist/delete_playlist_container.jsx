import React from 'react';
import { connect } from 'react-redux';
import DeletePlaylist from './delete_playlist';

import { logout } from '../../actions/session_actions';
// import { Link } from 'react-router-dom';

const mapStateToProps = state => {
  return({
    user: state.entities.users[state.session.id]
    // playlist: state.entities.playlists[playlist.id]
  });
};

const mapDispatchToProps = dispatch => {
  return({
    logout: () => dispatch(logout())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(DeletePlaylist);

