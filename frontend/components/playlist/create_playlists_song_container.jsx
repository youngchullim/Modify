import React from 'react';
import { connect } from 'react-redux';
import CreatePlaylistsSong from './create_playlists_song';

import { closeModal, openModal } from '../../actions/modal_actions';
import { createPlaylist, fetchPlaylists } from '../../actions/playlist_actions';
import { createPlaylistsSong } from '../../actions/song_actions';

const mapStateToProps = state => {
  return({
    user: state.entities.users[state.session.id],
    formType: "Add",
    modal: state.ui.modal,
    playlists: Object.values(state.entities.playlists),
    // song: state.entities.songs[state.song],
  });
};

const mapDispatchToProps = dispatch => {
  return({
    openModal: (
      <div className="playlist-button" role="button" onClick={() => dispatch(openModal('create'))}>
        <div className="new-playlist">
          <div className="playlist-center">NEW PLAYLIST</div>
        </div>
      </div>
    ),
    closeModal: () => dispatch(closeModal()),
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    createPlaylistsSong: (playlist_id, song_id) => dispatch(createPlaylistsSong(playlist_id, song_id)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlaylistsSong);

