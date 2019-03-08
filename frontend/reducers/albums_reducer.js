import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions';
import merge from 'lodash/merge';

const albumsReducer  = ( oldState={}, action) => {
  Object.freeze(oldState);
  let state;

  switch(action.type) {
    case RECEIVE_ALBUMS:
      return action.albums;
    case RECEIVE_ALBUM:
      state = merge({}, oldState, {[action.album.id]: action.album});
      return state;
    default:
      return oldState;
  }
};

export default albumsReducer;