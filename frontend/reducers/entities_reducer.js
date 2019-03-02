import { combineReducers } from 'redux';
import users from './users_reducer';
import songs from './songs_reducer';
import playlists from './playlists_reducer';

const entitiesReducer = combineReducers({
  users,
  songs,
  playlists
});

export default entitiesReducer;