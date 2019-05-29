import React from 'react';
import { connect } from 'react-redux';
import ShowAlbum from './show_album';

import { fetchAlbum } from '../../actions/album_actions';
import {
  createSongsUser,
  deleteSongsUser,
  createPlaylistsSong,
  deletePlaylistsSong,
  fetchSongsUsers,
  fetchSongs,
} from '../../actions/song_actions';

import { 
  receiveCurrentSong,
  receiveSongsQueue,
  receivePlay,
  receivePause,
  fetchCurrentSong,
  receiveCurrentSongId,
} from '../../actions/music_actions';

import { openModal, closeModal } from '../../actions/modal_actions';

import { createAlbumsUser, deleteAlbumsUser, fetchAlbumsUsers } from '../../actions/album_actions';
// import { logout } from '../../actions/session_actions';
// import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return({
    user: state.entities.users[state.session.id],
    album: state.entities.albums[ownProps.match.params.id],
    albumId: ownProps.match.params.id,
    albums: Object.values(state.entities.albums),
    songs: Object.values(state.entities.songs),
    song: Object.values(state.entities.songs)[0],
    songsQueue: state.ui.music.songsQueue,
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
    createSongsUser: (user_id, song_id) => dispatch(createSongsUser(user_id, song_id)),
    deleteSongsUser: (id) => dispatch(deleteSongsUser(id)),
    createPlaylistsSong: (playlist_id, song_id) => dispatch(createPlaylistsSong(playlist_id, song_id)),
    deletePlaylistsSong: (id) => dispatch(deletePlaylistsSong(id)),
    fetchSongsUsers: (id) => dispatch(fetchSongsUsers(id)),
    createAlbumsUser: (user_id, album_id) => dispatch(createAlbumsUser(user_id, album_id)),
    deleteAlbumsUser: (id) => dispatch(deleteAlbumsUser(id)),
    fetchAlbumsUsers: (id) => dispatch(fetchAlbumsUsers(id)),
    openModal: (modal,songId) => dispatch(openModal(modal,songId)),
    closeModal: () => dispatch(closeModal()),
    fetchSongs: () => dispatch(fetchSongs()),

    fetchCurrentSong: (userId, id) => (dispatch(fetchCurrentSong(userId, id))),
    receivePlay: (song, songs) => (dispatch(receivePlay(song, songs))),
    receivePause: (song, songs) => (dispatch(receivePause(song, songs))),
    receiveSongsQueue: (songs) => dispatch(receiveSongsQueue(songs)),
    receiveCurrentSong: (song, next, prev) => dispatch(receiveCurrentSong(song, next, prev)),
    receiveCurrentSongId: (songId) => dispatch(receiveCurrentSongId(songId)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowAlbum);

