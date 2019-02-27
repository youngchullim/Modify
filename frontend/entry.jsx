import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

// TEST
import {login, logout, signup} from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  // TEST
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  
  ReactDOM.render(<h1>Welcome to Modify</h1>, root);
});