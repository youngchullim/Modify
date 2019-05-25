import React from 'react';
import { connect } from 'react-redux';

import Music from './music';

import {
  fetchNextSong,
  fetchPrevSong,
  fetchCurrentPlaylist,
  fetchCurrentSong,
  receivePlay,
  receivePause,
  receiveSongsQueue,
  receiveCurrentSong,
  receiveNextSong,
  receivePrevSong,
} from '../../actions/music_actions';

import { 
  createSongsUser,
  deleteSongsUser,
  fetchSongsUsers, 
} from '../../actions/song_actions';

const mapStateToProps = state => {
  return({
    user: state.entities.users[state.session.id],
    currentSong: state.ui.music.currentSong,
    nextSong: state.ui.music.nextSong,
    prevSong: state.ui.music.prevSong,
    songsQueue: state.ui.music.songsQueue,
    play: state.ui.music.play,
    pause: state.ui.music.pause,
    songs: Object.values(state.entities.songs),
  });
};

const mapDispatchToProps = dispatch => {
  return({
    // fetchCurrentPlaylist: (id) => dispatch(fetchCurrentPlaylist(id)),
    fetchCurrentSong: (userId, id) => (dispatch(fetchCurrentSong(userId, id))),
    fetchNextSong: (userId, id) => (dispatch(fetchNextSong(userId, id))),
    fetchPrevSong: (userId, id) => (dispatch(fetchPrevSong(userId, id))),
    receivePlay: (song, songs) => (dispatch(receivePlay(song, songs))),
    receivePause: (song, songs) => (dispatch(receivePause(song, songs))),
    receiveSongsQueue: (songs) => dispatch(receiveSongsQueue(songs)),
    receiveCurrentSong: (song, next, prev) => dispatch(receiveCurrentSong(song, next, prev)),
    receiveNextSong: (song, next, prev) => dispatch(receiveNextSong(song, next, prev)),
    receivePrevSong: (song, next, prev) => dispatch(receivePrevSong(song, next, prev)),
    deleteSongsUser: (id) => dispatch(deleteSongsUser(id)),
    createSongsUser: (user_id, song_id) => dispatch(createSongsUser(user_id, song_id)),
    fetchSongsUsers: (id) => dispatch(fetchSongsUsers(id)),

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Music);

