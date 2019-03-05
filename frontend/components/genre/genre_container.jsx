import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Genre from './genre';
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

export default connect(mapStateToProps, mapDispatchToProps)(Genre);

