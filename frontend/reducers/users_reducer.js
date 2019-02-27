import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const usersReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  let state;

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      state = merge({}, oldState, {[action.user.id]: action.user});
      return state;
    default:
      return oldState;
  }
};

export default usersReducer;
