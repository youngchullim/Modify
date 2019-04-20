import React from 'react';
import { connect } from 'react-redux';

import { 
  fetchSongs, 
  fetchSong, 
  fetchSongsUsers, 
  createPlaylistsSong, 
  deletePlaylistsSong,
  deleteSongsUser 
} from '../../actions/song_actions';

import SongsUser from './songs_user';

// import { Link } from 'react-router-dom';

const mapStateToProps = state => {
  return({
    user: state.entities.users[state.session.id],
    songs: Object.values(state.entities.songs)
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchSongs: () => dispatch(fetchSongs()),
    fetchSong: (id) => dispatch(fetchSong(id)),
    fetchSongsUsers: (id) => dispatch(fetchSongsUsers(id)),
    createPlaylistsSong: (playlist_id, song_id) => dispatch(createPlaylistsSong(playlist_id, song_id)),
    deletePlaylistsSong: (id) => dispatch(deletePlaylistsSong(id)),
    deleteSongsUser: (id) => dispatch(deleteSongsUser(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SongsUser);

