import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { createPlaylistsSong, createSongsUser } from '../../actions/song_actions';

import CreatePlaylistContainer from '../playlist/create_playlist_container';
import DeletePlaylistContainer from '../playlist/delete_playlist_container';
import CreatePlaylistsSongContainer from '../playlist/create_playlists_song_container';

const Modal = ({modal, closeModal}) => {
  if (!modal) {
    return null;
  }
  let component;

  switch (modal) {
    case 'create':
      component = <CreatePlaylistContainer />
      break;
    case 'delete':
      component = <DeletePlaylistContainer />
      break;
    case 'add':
      component = <CreatePlaylistsSongContainer />
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
    user: state.entities.users[state.session.id],
    // song: state.song,

  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    createPlaylistsSong: (playlist_id, song_id) => dispatch(createPlaylistsSong(playlist_id, song_id)),
    createSongsUser: (user_id, song_id) => dispatch(createSongsUser(user_id, song_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);