import React from 'react';
import { connect } from 'react-redux';

import RelatedArtist from './related';
import { fetchArtists, fetchArtist } from '../../actions/artist_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    user: state.entities.users[state.session.id],
    artists: Object.values(state.entities.artists),
    artist: state.entities.artists[ownProps.match.params.id],
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchArtists: () => dispatch(fetchArtists()),
    fetchArtist: (id) => dispatch(fetchArtist(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(RelatedArtist);

