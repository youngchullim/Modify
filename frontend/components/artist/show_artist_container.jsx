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

import { openModal, closeModal } from '../../actions/modal_actions';
import { receiveCurrentSong } from '../../actions/music_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    user: state.entities.users[state.session.id],
    artist: state.entities.artists[ownProps.match.params.id],
    artists: state.entities.artists

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
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),

    createSongsUser: (user_id, song_id) => dispatch(createSongsUser(user_id, song_id)),
    deleteSongsUser: (id) => dispatch(deleteSongsUser(id)),
    createPlaylistsSong: (playlist_id, song_id) => dispatch(createPlaylistsSong(playlist_id, song_id)),
    // deletePlaylistsSong: (id) => dispatch(deletePlaylistsSong(id)),
    // fetchSongsUsers: (id) => dispatch(fetchSongsUsers(id)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowArtist);

