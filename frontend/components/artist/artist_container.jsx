import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Artist from './artist';
import { Link } from 'react-router-dom';
import React from 'react';

const mapStateToProps = state => {
  return({
    user: state.entities.users[state.session.id]
  });
};

const mapDispatchToProps = dispatch => {
  return({
    logout: () => dispatch(logout())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Artist);

