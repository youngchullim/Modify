import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Genre from './genre';
import { Link } from 'react-router-dom';
import React from 'react';
import { fetchSongs } from '../../actions/song_actions';

const mapStateToProps = state => {
  return({
    user: state.entities.users[state.session.id],
    songs: Object.values(state.entities.songs),
  });
};

const mapDispatchToProps = dispatch => {
  return({
    logout: () => dispatch(logout()),
    fetchSongs: () => dispatch(fetchSongs()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Genre);

