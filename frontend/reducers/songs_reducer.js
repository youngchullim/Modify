import { RECEIVE_SONGS, RECEIVE_SONG } from '../actions/song_actions';
import merge from 'lodash/merge';

const songsReducer  = ( oldState={}, action) => {
  Object.freeze(oldState);
  let state;

  switch(action.type) {
    case RECEIVE_SONGS:
      return action.songs;
    case RECEIVE_SONG:
      let state = merge({}, oldState, {[action.song.id]: action.song});
      return state;
    default:
      return oldState;
  }
};

export default songsReducer;