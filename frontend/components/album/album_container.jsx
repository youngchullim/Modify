import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import Album from './album';
import { fetchAlbums, fetchAlbum } from '../../actions/album_actions';

const mapStateToProps = state => {
  return({
    user: state.entities.users[state.session.id],
    albums: Object.values(state.entities.albums)
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchAlbum: (id) => dispatch(fetchAlbum(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);
