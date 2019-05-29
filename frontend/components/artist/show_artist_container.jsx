import React from 'react';
import { connect } from 'react-redux';
import ShowArtist from './show_artist';

import { 
  fetchArtist, 
  fetchArtists,
  createArtistsUser,
  deleteArtistsUser,
} from '../../actions/artist_actions';

import {
  createSongsUser,
  deleteSongsUser,
  createPlaylistsSong,
  deletePlaylistsSong,
  fetchSongsUsers
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
    artist: state.entities.artists[ownProps.match.params.id],
    artists: state.entities.artists,
    songs: Object.values(state.entities.songs),
    song: Object.values(state.entities.songs)[0],
    // DOESNT WORK
    // albums: state.entities.artists[ownProps.match.params.id].ablums,
    // songs: state.entities.artists[ownProps.match.params.id].songs,
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchArtist: (id) => dispatch(fetchArtist(id)),
    fetchAritsts: () => dispatch(fetchArtists()),
    
    createArtistsUser: (user_id, artist_id) => dispatch(createArtistsUser(user_id, artist_id)),
    deleteArtistsUser: (id) => dispatch(deleteArtistsUser(id)),
    
    openModal: (modal,songId) => dispatch(openModal(modal,songId)),
    closeModal: () => dispatch(closeModal()),

    createSongsUser: (user_id, song_id) => dispatch(createSongsUser(user_id, song_id)),
    deleteSongsUser: (id) => dispatch(deleteSongsUser(id)),
    createPlaylistsSong: (playlist_id, song_id) => dispatch(createPlaylistsSong(playlist_id, song_id)),
    // deletePlaylistsSong: (id) => dispatch(deletePlaylistsSong(id)),
    // fetchSongsUsers: (id) => dispatch(fetchSongsUsers(id)),

    fetchCurrentSong: (userId, id) => (dispatch(fetchCurrentSong(userId, id))),
    receivePlay: (song, songs) => (dispatch(receivePlay(song, songs))),
    receivePause: (song, songs) => (dispatch(receivePause(song, songs))),
    receiveSongsQueue: (songs) => dispatch(receiveSongsQueue(songs)),
    receiveCurrentSong: (song, next, prev) => dispatch(receiveCurrentSong(song, next, prev)),
    receiveCurrentSongId: (songId) => dispatch(receiveCurrentSongId(songId)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowArtist);

