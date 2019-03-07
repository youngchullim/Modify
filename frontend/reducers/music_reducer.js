import { 
  RECEIVE_CURRENT_SONG,
  RECEIVE_NEXT_SONG,
  RECEIVE_PREV_SONG,
  RECEIVE_PLAY
} from '../actions/music_actions';

import merge from 'lodash/merge';

const nullState = {

}

const musicReducer = (oldState=nullState, action) => {
  Object.freeze(oldState);
  let state = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_CURRENT_SONG:

    case RECEIVE_NEXT_SONG:
 
    case RECEIVE_PREV_SONG:

    case RECEIVE_PLAY:

    default:
      return oldState;
  }
};

export default musicReducer;