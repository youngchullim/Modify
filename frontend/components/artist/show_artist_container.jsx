import React from 'react';
import { connect } from 'react-redux';
import ShowArtist from './show_artist';

import { fetchArtist } from '../../actions/artist_actions';


const mapStateToProps = (state, ownProps) => {
  return({
    user: state.entities.users[state.session.id],
    artist: state.entities.artists[ownProps.match.params.id]
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchArtist: (id) => dispatch(fetchArtist(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowArtist);

