import React from 'react';
import { connect } from 'react-redux';

import ArtistsUser from './artist';
import { 
  fetchArtists,
  fetchArtist,
  createArtistsUser,
  deleteArtistsUser,
  fetchArtistsUsers
} from '../../actions/artist_actions';

const mapStateToProps = state => {
  return({
    user: state.entities.users[state.session.id],
    artists: Object.values(state.entities.artists)
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchArtists: () => dispatch(fetchArtists()),
    fetchArtist: (id) => dispatch(fetchArtist(id)),
    createArtistsUser: (user_id, artist_id) => dispatch(createArtistsUser(user_id, artist_id)),
    deleteArtistsUser: (id) => dispatch(deleteArtistsUser(id)),
    fetchArtistsUsers: (id) => dispatch(fetchArtistsUsers(id)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsUser);

