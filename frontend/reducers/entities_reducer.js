import { combineReducers } from 'redux';
import users from './users_reducer';
import songs from './songs_reducer';

const entitiesReducer = combineReducers({
  users,
  songs
});

export default entitiesReducer;