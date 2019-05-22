import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// TEST
// import { login, logout, signup } from './actions/session_actions';
// import { fetchSongs } from './actions/song_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  if (window.user) {
    const preloadedState = {
      entities: {
        users: { [window.user.id]: window.user }
      },
      session: { id: window.user.id },
      // ui: {
      //   music: {
      //     currentSong: Object.assign({}, window.currentSong),
      //     songsQueue: null,
      //     nextSong: null,
      //     prevSong: null,
      //     play: false
      //   }
      // }
    };
    store = configureStore(preloadedState);
    delete window.user;
  } else {
    store = configureStore();
  }

  // TEST
  // window.login = login;
  // window.logout = logout;
  // window.signup = signup;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.fetchSongs = fetchSongs;
  // window.store = store;

  ReactDOM.render(<Root store={store}/>, root);
});