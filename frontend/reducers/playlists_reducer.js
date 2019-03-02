import { 
  RECEIVE_PLAYLISTS, 
  RECEIVE_PLAYLIST, 
  REMOVE_PLAYLIST 
} from '../actions/playlist_actions';
import merge from 'lodash/merge';

const playlistsReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  let state;

  switch(action.type) {
    case RECEIVE_PLAYLISTS:
      return action.playlists;
    case RECEIVE_PLAYLIST:
      state = merge({}, oldState, {[action.playlist.id]: action.playlist});
      return state;
    case REMOVE_PLAYLIST:
      state = merge({}, oldState);
      delete state[action.playlistId];
      return state;
    default:
      return oldState;
  }
};

export default playlistsReducer;