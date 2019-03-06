import React from 'react';
import { connect } from 'react-redux';
import CreatePlaylist from './create_playlist';

import { closeModal } from '../../actions/modal_actions';
import { createPlaylist } from '../../actions/playlist_actions';
// import { Link } from 'react-router-dom';

const mapStateToProps = state => {
  return({
    user: state.entities.users[state.session.id],
    formType: "Create",
    modal:state.ui.modal
    // playlist: state.entities.playlists[playlist.id]
  });
};

const mapDispatchToProps = dispatch => {
  return({
    closeModal: () => dispatch(closeModal()),
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlaylist);

