import React from 'react';
import { connect } from 'react-redux';

import Music from './music';

import {
  fetchCurrentSong,
  fetchNextSong,
  fetchPrevSong,
  receivePlay
} from '../../actions/music_actions';


const mapStateToProps = state => {
  return({
    songs: Object.values(state.entities.songs),
    currentSong: state.ui.music.currentSong,
    currentPos: state.ui.music.currentPos,
    songsArr: state.ui.music.songsArr
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchCurrentSong: (id) => (dispatch(fetchCurrentSong(id))),
    fetchNextSong: (id) => (dispatch(fetchNextSong(id))),
    fetchPrevSong: (id) => (dispatch(fetchPrevSong(id))),
    receivePlay: () => (dispatch(receivePlay()))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Music);

