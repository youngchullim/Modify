import React from 'react';
import { connect } from 'react-redux';

import Music from './music';

import {
  fetchCurrentSong,
  fetchNextSong,
  fetchPrevSong,
  receivePlay,
  fetchCurrentPlaylist,
  receiveSongsQueue,
} from '../../actions/music_actions';


const mapStateToProps = state => {
  return({
    user: state.entities.users[state.session.id],
    currentSong: state.ui.music.currentSong,
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchCurrentSong: (id) => (dispatch(fetchCurrentSong(id))),
    fetchNextSong: (id) => (dispatch(fetchNextSong(id))),
    fetchPrevSong: (id) => (dispatch(fetchPrevSong(id))),
    receivePlay: () => (dispatch(receivePlay())),
    fetchCurrentPlaylist: (id) => dispatch(fetchCurrentPlaylist(id)),
    receiveSongsQueue: (songs) => dispatch(receiveSongsQueue(songs)),

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Music);

