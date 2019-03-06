import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

import CreatePlaylistContainer from '../playlist/create_playlist_container';
import DeletePlaylistContainer from '../playlist/delete_playlist_container';

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
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);