import React from 'react';
import { connect } from 'react-redux';

import Overview from './overview';
import { 
  fetchArtists,
  fetchArtist,
  fetchArtistsUsers
} from '../../actions/artist_actions';

import { fetchAlbums, fetchAlbum } from '../../actions/album_actions';

import { 
  fetchSongs, 
  fetchSong, 
  createPlaylistsSong, 
  createSongsUser,
  deleteSongsUser, 

// TEST
  fetchSongsUsers,
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
    artist: state.entities.artists[ownProps.match.params.id],
    artistId: ownProps.match.params.id,
    songs: Object.values(state.entities.songs),
    song: Object.values(state.entities.songs)[0],
    albums: Object.values(state.entities.albums),
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchArtists: () => dispatch(fetchArtists()),
    fetchArtist: (id) => dispatch(fetchArtist(id)),
    fetchArtistsUsers: (id) => dispatch(fetchArtistsUsers(id)),
    openModal: (modal,songId) => dispatch(openModal(modal,songId)),
    closeModal: () => dispatch(closeModal()),
    fetchSong: (id) => dispatch(fetchSong(id)),
    fetchSongs: () => dispatch(fetchSongs()),
    createSongsUser: (user_id, song_id) => dispatch(createSongsUser(user_id, song_id)),
    deleteSongsUser: (id) => dispatch(deleteSongsUser(id)),
    createPlaylistsSong: (playlist_id, song_id) => dispatch(createPlaylistsSong(playlist_id, song_id)),
    fetchAlbums: () => dispatch(fetchAlbums()),

// TEST
    fetchSongsUsers: (id) => dispatch(fetchSongsUsers(id)),

// MUSIC PLAY
    fetchCurrentSong: (userId, id) => (dispatch(fetchCurrentSong(userId, id))),
    receivePlay: (song, songs) => (dispatch(receivePlay(song, songs))),
    receivePause: (song, songs) => (dispatch(receivePause(song, songs))),
    receiveSongsQueue: (songs) => dispatch(receiveSongsQueue(songs)),
    receiveCurrentSong: (song, next, prev) => dispatch(receiveCurrentSong(song, next, prev)),
    receiveCurrentSongId: (songId) => dispatch(receiveCurrentSongId(songId)),

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);

