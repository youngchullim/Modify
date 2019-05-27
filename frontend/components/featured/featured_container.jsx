// TEST

import React from 'react';
import { connect } from 'react-redux';

import { 
  fetchSongs, 
  fetchSong, 
  fetchSongsUsers, 
  createPlaylistsSong, 
  deletePlaylistsSong,
  deleteSongsUser,
  createSongsUser,
} from '../../actions/song_actions';
import { 
  receiveCurrentSong,
  receiveCurrentSongId,
  receiveSongsQueue,
  receivePlay,
  receivePause,
  fetchCurrentSong,
} from '../../actions/music_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import Featured from './featured';


// import { Link } from 'react-router-dom';

const mapStateToProps = state => {
  return({
    user: state.entities.users[state.session.id],
    songs: Object.values(state.entities.songs),
    play: state.ui.music.play,
    currentSong: state.ui.music.currentSong,
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchSongs: () => dispatch(fetchSongs()),
    fetchSong: (id) => dispatch(fetchSong(id)),
    fetchSongsUsers: (id) => dispatch(fetchSongsUsers(id)),
    createPlaylistsSong: (playlist_id, song_id) => dispatch(createPlaylistsSong(playlist_id, song_id)),
    deletePlaylistsSong: (id) => dispatch(deletePlaylistsSong(id)),
    createSongsUser: (user_id, song_id) => dispatch(createSongsUser(user_id, song_id)),
    deleteSongsUser: (id) => dispatch(deleteSongsUser(id)),
    openModal: (modal,songId) => dispatch(openModal(modal,songId)),
    // openModal: (
    //   <div onClick={() => dispatch(openModal('add'))}>
    //       <div className="add-playlist">Add to Playlist</div>
    //   </div>
    // ),
    closeModal: () => dispatch(closeModal()),

    fetchCurrentSong: (userId, id) => (dispatch(fetchCurrentSong(userId, id))),
    receivePlay: (song, songs) => (dispatch(receivePlay(song, songs))),
    receivePause: (song, songs) => (dispatch(receivePause(song, songs))),
    receiveSongsQueue: (songs) => dispatch(receiveSongsQueue(songs)),
    receiveCurrentSong: (song, next, prev) => dispatch(receiveCurrentSong(song, next, prev)),
    receiveCurrentSongId: (songId) => dispatch(receiveCurrentSongId(songId)),
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(Featured);

