// NOT BEING USED

import React from 'react';
import { connect } from 'react-redux';

import Artist from './artist';
import { fetchArtists, fetchArtist } from '../../actions/artist_actions';

const mapStateToProps = state => {
  return({
    user: state.entities.users[state.session.id],
    artists: Object.values(state.entities.artists)
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchArtists: () => dispatch(fetchArtists()),
    fetchArtist: (id) => dispatch(fetchArtist(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Artist);

