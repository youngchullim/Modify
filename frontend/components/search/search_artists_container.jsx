import React from 'react';
import { connect } from 'react-redux';
import SearchArtists from './search_artists';

import { fetchArtists } from '../../actions/artist_actions';


const mapStateToProps = (state, ownProps) => {
  return({
    user: state.entities.users[state.session.id],
    artists: Object.values(state.entities.artists),
    searchBar: ownProps.queries,
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchArtists: (queries) => dispatch(fetchArtists(queries)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchArtists);

