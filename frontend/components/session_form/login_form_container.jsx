import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';
import { Link } from 'react-router-dom';
import React from 'react';

const mapStateToProps = state => {
  return({
    errors: state.errors.session,
    formType: 'LOG IN',
    navLink: <Link to="/signup">SIGN UP FOR MODIFY</Link>
  });
};

const mapDispatchToProps = dispatch => {
  return({
    action: (user) => dispatch(login(user)),
    clear: () => dispatch(clearErrors())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);



// NAVLINK AS A BUTTON
{/* <form action="/signup" method="post">
  <button type="submit">SIGN UP FOR MODIFY</button>
</form> */}