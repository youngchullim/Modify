// TEST

import React from 'react';
import { connect } from 'react-redux';

import { fetchSongs, fetchSong } from '../../actions/song_actions';
import Featured from './featured';

const mapStateToProps = state => {
  return({
    user: state.entities.users[state.session.id],
    songs: Object.values(state.entities.songs)
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchSongs: () => dispatch(fetchSongs()),
    fetchSong: (id) => dispatch(fetchSong(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Featured);

