import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import SearchResult from './search_result';

import { fetchArtists } from '../../actions/artist_actions';
import { fetchAlbums } from '../../actions/album_actions';
import {   
  fetchSongs, 
  fetchSongsUsers, 
  createPlaylistsSong, 
  deletePlaylistsSong,
  deleteSongsUser,
  createSongsUser,  
} from '../../actions/song_actions';
import { receiveCurrentSongId } from '../../actions/music_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  return({
    user: state.entities.users[state.session.id],
    artists: Object.values(state.entities.artists),
    albums: Object.values(state.entities.albums),
    songs: Object.values(state.entities.songs),
    searchBar: ownProps.queries,
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchAlbums: (queries) => dispatch(fetchAlbums(queries)),
    fetchArtists: (queries) => dispatch(fetchArtists(queries)),
    fetchSongs: (queries) => dispatch(fetchSongs(queries)),   

    fetchSongsUsers: (id) => dispatch(fetchSongsUsers(id)),
    createPlaylistsSong: (playlist_id, song_id) => dispatch(createPlaylistsSong(playlist_id, song_id)),
    deletePlaylistsSong: (id) => dispatch(deletePlaylistsSong(id)),
    deleteSongsUser: (id) => dispatch(deleteSongsUser(id)),
    openModal: (modal,songId) => dispatch(openModal(modal,songId)),
    closeModal: () => dispatch(closeModal()),
    receiveCurrentSongId: (songId) => dispatch(receiveCurrentSongId(songId)),
    createSongsUser: (user_id, song_id) => dispatch(createSongsUser(user_id, song_id)),

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);

