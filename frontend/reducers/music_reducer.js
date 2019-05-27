import { 
  RECEIVE_CURRENT_SONG,
  RECEIVE_NEXT_SONG,
  RECEIVE_PREV_SONG,
  RECEIVE_PLAY,
  RECEIVE_PAUSE,
  RECEIVE_SONGS_QUEUE,
  RECEIVE_CURRENT_SONG_ID
} from '../actions/music_actions';

import merge from 'lodash/merge';

const nullState = {
  currentSong: null,
  currentSongId: null,
  songsQueue: null,
  nextSong: null,
  prevSong: null,
  play: false,
  pause: true
};

const musicReducer = (oldState=nullState, action) => {
  Object.freeze(oldState);
  let state = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_CURRENT_SONG_ID:
      state.currentSongId = action.songId;
      return state;
    case RECEIVE_CURRENT_SONG:
      state.currentSong = action.song;
      state.nextSong = action.next;
      state.prevSong = action.prev;
      return state;
    case RECEIVE_NEXT_SONG:
      state.currentSong = action.song;
      state.nextSong = action.next;
      state.prevSong = action.prev;
      return state;
    case RECEIVE_PREV_SONG:
      state.currentSong = action.song;
      state.nextSong = action.next;
      state.prevSong = action.prev;
      return state;
    case RECEIVE_PLAY:
      state.currentSong = action.song;
      state.play = true;
      state.pause = false;
      state.songsQueue = action.songs;
      return state;
    case RECEIVE_PAUSE:
      state.currentSong = action.song;
      state.play = false;
      state.pause = true;
      state.songsQueue = action.songs;
      return state;
    case RECEIVE_SONGS_QUEUE:
      state.songsQueue = action.songs;
      return state;
    default:
      return oldState;
  }
};

export default musicReducer;