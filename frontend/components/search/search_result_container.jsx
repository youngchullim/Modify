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

import { 
  receiveCurrentSong,
  receiveSongsQueue,
  receivePlay,
  receivePause,
  fetchCurrentSong,
  receiveCurrentSongId,
} from '../../actions/music_actions';

import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  return({
    user: state.entities.users[state.session.id],
    artists: Object.values(state.entities.artists),
    albums: Object.values(state.entities.albums),
    songs: Object.values(state.entities.songs),
    song: Object.values(state.entities.songs)[0],
    searchBar: ownProps.queries,
    currentSong: state.ui.music.currentSong,
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchAlbums: (queries) => dispatch(fetchAlbums(queries)),
    fetchArtists: (queries) => dispatch(fetchArtists(queries)),
    fetchSongs: () => dispatch(fetchSongs()),   

    fetchSongsUsers: (id) => dispatch(fetchSongsUsers(id)),
    createPlaylistsSong: (playlist_id, song_id) => dispatch(createPlaylistsSong(playlist_id, song_id)),
    deletePlaylistsSong: (id) => dispatch(deletePlaylistsSong(id)),
    deleteSongsUser: (id) => dispatch(deleteSongsUser(id)),
    openModal: (modal,songId) => dispatch(openModal(modal,songId)),
    closeModal: () => dispatch(closeModal()),
    createSongsUser: (user_id, song_id) => dispatch(createSongsUser(user_id, song_id)),

    fetchCurrentSong: (userId, id) => (dispatch(fetchCurrentSong(userId, id))),
    receivePlay: (song, songs) => (dispatch(receivePlay(song, songs))),
    receivePause: (song, songs) => (dispatch(receivePause(song, songs))),
    receiveSongsQueue: (songs) => dispatch(receiveSongsQueue(songs)),
    receiveCurrentSong: (song, next, prev) => dispatch(receiveCurrentSong(song, next, prev)),
    receiveCurrentSongId: (songId) => dispatch(receiveCurrentSongId(songId)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);

