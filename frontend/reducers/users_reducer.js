import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SONGS_USER } from '../actions/song_actions';
import { RECEIVE_ALBUMS_USER } from '../actions/album_actions';
import { RECEIVE_ARTISTS_USER } from '../actions/artist_actions';

import merge from 'lodash/merge';

const usersReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  let state;

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    case RECEIVE_SONGS_USER:
    case RECEIVE_ALBUMS_USER:
    case RECEIVE_ARTISTS_USER:
      state = merge({}, oldState, {[action.user.id]: action.user});
      return state;
    default:
      return oldState;
  }
};

export default usersReducer;
