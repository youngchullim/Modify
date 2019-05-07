import React from 'react';
import { connect } from 'react-redux';

import Overview from './overview';
import { 
  fetchArtists,
  fetchArtist,
  fetchArtistsUsers
} from '../../actions/artist_actions';

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
import { receiveCurrentSong } from '../../actions/music_actions';


const mapStateToProps = (state, ownProps) => {
  return({
    user: state.entities.users[state.session.id],
    artists: Object.values(state.entities.artists),
    artist: state.entities.artists[ownProps.match.params.id],
    artistId: ownProps.match.params.id,
    songs: Object.values(state.entities.songs),

  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchArtists: () => dispatch(fetchArtists()),
    fetchArtist: (id) => dispatch(fetchArtist(id)),
    fetchArtistsUsers: (id) => dispatch(fetchArtistsUsers(id)),
    openModal: (modal,songId) => dispatch(openModal(modal,songId)),
    closeModal: () => dispatch(closeModal()),
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),
    fetchSong: (id) => dispatch(fetchSong(id)),
    fetchSongs: () => dispatch(fetchSongs()),
    createSongsUser: (user_id, song_id) => dispatch(createSongsUser(user_id, song_id)),
    deleteSongsUser: (id) => dispatch(deleteSongsUser(id)),
    createPlaylistsSong: (playlist_id, song_id) => dispatch(createPlaylistsSong(playlist_id, song_id)),

// TEST
    fetchSongsUsers: (id) => dispatch(fetchSongsUsers(id)),

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);

