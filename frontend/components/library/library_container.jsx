import React from 'react';
import Library from './library';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

import { 
  fetchPlaylists, 
  fetchPlaylist, 
  createPlaylist, 
  updatePlaylist, 
  deletePlaylist 
  } from '../../actions/playlist_actions';

import { fetchSong, fetchSongs } from '../../actions/song_actions';

const mapStateToProps = state => {
  return({
    user: state.entities.users[state.session.id],
    playlists: Object.values(state.entities.playlists)
  });
};

const mapDispatchToProps = dispatch => {
  return({
    logout: () => dispatch(logout()),
    openModal: (
      <div className="playlist-button" role="button" onClick={() => dispatch(openModal('create'))}>
        <div className="new-playlist">
          <div className="playlist-center">NEW PLAYLIST</div>
        </div>
      </div>
    ),
    closeModal: () => dispatch(closeModal()),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
    updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),

    fetchSongs: () => dispatch(fetchSongs()),
    fetchSong: (id) => dispatch(fetchSong(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Library);
