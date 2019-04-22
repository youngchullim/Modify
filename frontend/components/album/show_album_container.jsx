import React from 'react';
import { connect } from 'react-redux';
import ShowAlbum from './show_album';

import { fetchAlbum } from '../../actions/album_actions';
import {
  createSongsUser,
  deleteSongsUser,
  createPlaylistsSong,
  deletePlaylistsSong,
  fetchSongsUsers
} from '../../actions/song_actions';

// import { logout } from '../../actions/session_actions';
// import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return({
    user: state.entities.users[state.session.id],
    album: state.entities.albums[ownProps.match.params.id]
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
    createSongsUser: (user_id, song_id) => dispatch(createSongsUser(user_id, song_id)),
    deleteSongsUser: (id) => dispatch(deleteSongsUser(id)),
    createPlaylistsSong: (playlist_id, song_id) => dispatch(createPlaylistsSong(playlist_id, song_id)),
    deletePlaylistsSong: (id) => dispatch(deletePlaylistsSong(id)),
    fetchSongsUsers: (id) => dispatch(fetchSongsUsers(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowAlbum);

