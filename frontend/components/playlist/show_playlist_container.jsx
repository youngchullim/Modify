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
 } from '../../actions/song_actions';
 
import { createAlbumsUser, deleteAlbumsUser, fetchAlbumsUsers } from '../../actions/album_actions';
import { receiveCurrentSong } from '../../actions/music_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

// import { logout } from '../../actions/session_actions';
// import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return({
    user: state.entities.users[state.session.id],
    playlist: state.entities.playlists[ownProps.match.params.id],
    songs: Object.values(state.entities.songs)
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
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),
    createSongsUser: (user_id, song_id) => dispatch(createSongsUser(user_id, song_id)),
    createAlbumsUser: (user_id, album_id) => dispatch(createAlbumsUser(user_id, album_id)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPlaylist);

