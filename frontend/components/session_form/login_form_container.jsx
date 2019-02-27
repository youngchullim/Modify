import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { Link } from 'react-router-dom';
import React from 'react';

const mapStateToProps = state => {
  return({
    errors: state.errors.session,
    formType: 'Log In',
    navLink: <Link to="/signup">Sign up for Modify</Link>
  });
};

const mapDispatchToProps = dispatch => {
  return({
    action: (user) => dispatch(login(user))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);



// NAVLINK AS A BUTTON
{/* <form action="/signup" method="post">
  <button type="submit">SIGN UP FOR MODIFY</button>
</form> */}