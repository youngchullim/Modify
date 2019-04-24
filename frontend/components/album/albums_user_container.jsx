import React from 'react';
import { connect } from 'react-redux';

import AlbumsUser from './albums_user';
import { 
  fetchAlbums, 
  fetchAlbum,
  createAlbumsUser,
  deleteAlbumsUser,
  fetchAlbumsUsers
} from '../../actions/album_actions';

const mapStateToProps = state => {
  return({
    user: state.entities.users[state.session.id],
    albums: Object.values(state.entities.albums)
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
    createAlbumsUser: (user_id, album_id) => dispatch(createAlbumsUser(user_id, album_id)),
    deleteAlbumsUser: (id) => dispatch(deleteAlbumsUser(id)),
    fetchAlbumsUsers: (id) => dispatch(fetchAlbumsUsers(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsUser);
