import React from 'react';
import { connect } from 'react-redux';
import SearchAlbums from './search_albums';

import { fetchAlbums } from '../../actions/album_actions';


const mapStateToProps = (state, ownProps) => {
  return({
    user: state.entities.users[state.session.id],
    albums: Object.values(state.entities.albums),
    searchBar: ownProps.queries,
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchAlbums: (queries) => dispatch(fetchAlbums(queries)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchAlbums);

