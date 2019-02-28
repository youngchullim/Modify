import { connect } from 'react-redux';
import { signup, clearErrors, login } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { Link } from 'react-router-dom';
import React from 'react';


const mapStateToProps = state => {
  return({
    errors: state.errors.session,
    formType: 'Sign Up',
    navLink: <Link to='/login'>Log In</Link>
  });
};

const mapDispatchToProps = dispatch => {
  return({
    action: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    clear: () => dispatch(clearErrors())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);