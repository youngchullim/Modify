import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Featured from './featured';
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

export default connect(mapStateToProps, mapDispatchToProps)(Featured);

