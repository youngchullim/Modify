import React from 'react';
import { connect } from 'react-redux';
import CreatePlaylistsSong from './create_playlists_song';

import { closeModal, openModal } from '../../actions/modal_actions';
import { createPlaylist, fetchPlaylists } from '../../actions/playlist_actions';
import { createPlaylistsSong } from '../../actions/song_actions';
import { receiveCurrentSong } from '../../actions/music_actions';

const mapStateToProps = state => {
  return({
    user: state.entities.users[state.session.id],
    formType: "Add",
    modal: state.ui.modal,
    playlists: Object.values(state.entities.playlists),
    songId: state.ui.music.currentSong,
  });
};

const mapDispatchToProps = dispatch => {
  return({
    // openModal: (
    //   <div className="" role="button" onClick={() => dispatch(openModal('create'))}>
    //     <div className="playlist-create">
    //       <div className="playlist-center">NEW PLAYLIST</div>
    //     </div>
    //   </div>
    // ),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    createPlaylistsSong: (playlist_id, song_id) => dispatch(createPlaylistsSong(playlist_id, song_id)),
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlaylistsSong);

