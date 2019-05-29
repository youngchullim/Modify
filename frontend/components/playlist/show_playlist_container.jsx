import React from 'react';
import { connect } from 'react-redux';
import ShowPlaylist from './show_playlist';

import { 
  fetchPlaylist, 
  updatePlaylist, 
  deletePlaylist 
} from '../../actions/playlist_actions';

import { 
  fetchSongs, 
  fetchPlaylistsSongs,
  createSongsUser,
  deletePlaylistsSong,
 } from '../../actions/song_actions';

 import { 
  receiveCurrentSong,
  receiveSongsQueue,
  receivePlay,
  receivePause,
  fetchCurrentSong,
  receiveCurrentSongId,
} from '../../actions/music_actions';

import { createAlbumsUser, deleteAlbumsUser, fetchAlbumsUsers } from '../../actions/album_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

// import { logout } from '../../actions/session_actions';
// import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return({
    user: state.entities.users[state.session.id],
    playlist: state.entities.playlists[ownProps.match.params.id],
    songs: Object.values(state.entities.songs),
    song: Object.values(state.entities.songs)[0],
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
    updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),
    fetchSongs: () => dispatch(fetchSongs()),
    fetchPlaylistsSongs: (id) => dispatch(fetchPlaylistsSongs(id)),
    openModal: (modal,songId) => dispatch(openModal(modal,songId)),
    closeModal: () => dispatch(closeModal()),
    createSongsUser: (user_id, song_id) => dispatch(createSongsUser(user_id, song_id)),
    createAlbumsUser: (user_id, album_id) => dispatch(createAlbumsUser(user_id, album_id)),
    deletePlaylistsSong: (id) => dispatch(deletePlaylistsSong(id)),

    fetchCurrentSong: (userId, id) => (dispatch(fetchCurrentSong(userId, id))),
    receivePlay: (song, songs) => (dispatch(receivePlay(song, songs))),
    receivePause: (song, songs) => (dispatch(receivePause(song, songs))),
    receiveSongsQueue: (songs) => dispatch(receiveSongsQueue(songs)),
    receiveCurrentSong: (song, next, prev) => dispatch(receiveCurrentSong(song, next, prev)),
    receiveCurrentSongId: (songId) => dispatch(receiveCurrentSongId(songId)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPlaylist);

