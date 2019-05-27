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

import { openModal, closeModal } from '../../actions/modal_actions';
import { receiveCurrentSongId } from '../../actions/music_actions';


const mapStateToProps = (state, ownProps) => {
  return({
    user: state.entities.users[state.session.id],
    artists: Object.values(state.entities.artists),
    artist: state.entities.artists[ownProps.match.params.id],
    artistId: ownProps.match.params.id,
    songs: Object.values(state.entities.songs),
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
    receiveCurrentSongId: (songId) => dispatch(receiveCurrentSongId(songId)),
    fetchSong: (id) => dispatch(fetchSong(id)),
    fetchSongs: () => dispatch(fetchSongs()),
    createSongsUser: (user_id, song_id) => dispatch(createSongsUser(user_id, song_id)),
    deleteSongsUser: (id) => dispatch(deleteSongsUser(id)),
    createPlaylistsSong: (playlist_id, song_id) => dispatch(createPlaylistsSong(playlist_id, song_id)),
    fetchAlbums: () => dispatch(fetchAlbums()),

// TEST
    fetchSongsUsers: (id) => dispatch(fetchSongsUsers(id)),

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);

