import React from 'react';
import Profile from './profile';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

