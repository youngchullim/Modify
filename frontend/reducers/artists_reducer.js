import { RECEIVE_ARTISTS, RECEIVE_ARTIST } from '../actions/artist_actions';
import merge from 'lodash/merge';

const artistsReducer  = ( oldState={}, action) => {
  Object.freeze(oldState);
  let state;

  switch(action.type) {
    case RECEIVE_ARTISTS:
      return action.artists;
    case RECEIVE_ARTIST:
      state = merge({}, oldState, {[action.artist.id]: action.artist});
      return state;
    default:
      return oldState;
  }
};

export default artistsReducer;