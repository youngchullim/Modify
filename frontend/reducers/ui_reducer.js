import { combineReducers } from 'redux';

import modal from './modal_reducer';
import music from './music_reducer';

export default combineReducers({
  modal,
  music
});