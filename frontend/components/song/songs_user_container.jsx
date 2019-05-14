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
import { 
  receiveCurrentSong,
  receiveSongsQueue,
  receivePlay,
  fetchCurrentSong,
} from '../../actions/music_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SongsUser from './songs_user';


// import { Link } from 'react-router-dom';

const mapStateToProps = state => {
  return({
    user: state.entities.users[state.session.id],
    songs: Object.values(state.entities.songs),
    
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchSongs: () => dispatch(fetchSongs()),
    fetchSong: (id) => dispatch(fetchSong(id)),
    fetchSongsUsers: (id) => dispatch(fetchSongsUsers(id)),
    createPlaylistsSong: (playlist_id, song_id) => dispatch(createPlaylistsSong(playlist_id, song_id)),
    deletePlaylistsSong: (id) => dispatch(deletePlaylistsSong(id)),
    deleteSongsUser: (id) => dispatch(deleteSongsUser(id)),
    openModal: (modal,songId) => dispatch(openModal(modal,songId)),
    // openModal: (
    //   <div onClick={() => dispatch(openModal('add'))}>
    //       <div className="add-playlist">Add to Playlist</div>
    //   </div>
    // ),
    closeModal: () => dispatch(closeModal()),

    fetchCurrentSong: (id) => (dispatch(fetchCurrentSong(id))),
    receivePlay: (play, song, songs) => (dispatch(receivePlay(play, song, songs))),
    receiveSongsQueue: (songs) => dispatch(receiveSongsQueue(songs)),
    receiveCurrentSong: (song, next, prev) => dispatch(receiveCurrentSong(song, next, prev)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SongsUser);

