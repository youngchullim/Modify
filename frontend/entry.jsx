import React from 'react';
import ReactDOM from 'react-dom';

// TEST
import {login, logout, signup} from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  
  // TEST
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  
  ReactDOM.render(<h1>Welcome to Modify</h1>, root);
});