import React from 'react';
import { connect } from 'react-redux';

import { fetchSongs, fetchSong } from '../../actions/song_actions';
import Song from './song';

// import { logout } from '../../actions/session_actions';
// import { Link } from 'react-router-dom';

const mapStateToProps = state => {
  return({
    user: state.entities.users[state.session.id]
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchSongs: () => dispatch(fetchSongs()),
    fetchSong: (id) => dispatch(fetchSong(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Song);

