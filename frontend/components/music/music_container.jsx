import React from 'react';
import { connect } from 'react-redux';

import Music from './music';

import {
  fetchNextSong,
  fetchPrevSong,
  fetchCurrentPlaylist,
  fetchCurrentSong,
  receivePlay,
  receiveSongsQueue,
  receiveCurrentSong,
  receiveNextSong,
  receivePrevSong,
} from '../../actions/music_actions';


const mapStateToProps = state => {
  return({
    user: state.entities.users[state.session.id],
    currentSong: state.ui.music.currentSong,
    nextSong: state.ui.music.nextSong,
    prevSong: state.ui.music.prevSong,
    songsQueue: state.ui.music.songsQueue,
    play: state.ui.music.play,
  });
};

const mapDispatchToProps = dispatch => {
  return({
    // fetchNextSong: (id) => (dispatch(fetchNextSong(id))),
    // fetchPrevSong: (id) => (dispatch(fetchPrevSong(id))),
    // fetchCurrentPlaylist: (id) => dispatch(fetchCurrentPlaylist(id)),
    fetchCurrentSong: (id) => (dispatch(fetchCurrentSong(id))),
    receivePlay: (play, song, songs) => (dispatch(receivePlay(play, song, songs))),
    receiveSongsQueue: (songs) => dispatch(receiveSongsQueue(songs)),
    receiveCurrentSong: (song, next, prev) => dispatch(receiveCurrentSong(song, next, prev)),
    receiveNextSong: (song, next, prev) => dispatch(receiveNextSong(song, next, prev)),
    receivePrevSong: (song, next, prev) => dispatch(receivePrevSong(song, next, prev)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Music);

