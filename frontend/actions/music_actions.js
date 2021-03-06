import * as SongsUserApiUtil from '../util/songs_user_api_util';
import * as SongApiUtil from '../util/song_api_util';
import * as PlaylistApiUtil from '../util/playlist_api_util';

export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG";
export const RECEIVE_CURRENT_SONG_ID = "RECEIVE_CURRENT_SONG_ID";
export const RECEIVE_NEXT_SONG = "RECEIVE_NEXT_SONG";
export const RECEIVE_PREV_SONG = "RECEIVE_PREV_SONG";
export const RECEIVE_CURRENT_PLAYLIST = "RECEIVE_CURRENT_PLAYLIST";
export const RECEIVE_PLAY = "RECEIVE_PLAY";
export const RECEIVE_PAUSE = "RECEIVE_PAUSE";
export const RECEIVE_SONGS_QUEUE = "RECEIVE_SONGS_QUEUE";

export const receiveCurrentSong = (song, next, prev) => {
  return({
    type: RECEIVE_CURRENT_SONG,
    song,
    next,
    prev
  });
};
export const receiveCurrentSongId = (songId) => {
  return({
    type: RECEIVE_CURRENT_SONG_ID,
    songId
  });
};

export const receiveNextSong = (song, next, prev) => {
  return({
    type: RECEIVE_NEXT_SONG,
    song,
    next,
    prev
  });
};

export const receivePrevSong = (song, next, prev) => {
  return({
    type: RECEIVE_PREV_SONG,
    song,
    next, 
    prev
  });
};

export const receiveCurrentPlaylist = (playlist) => {
  return({
    type: RECEIVE_CURRENT_PLAYLIST,
    playlist: playlist
  });
};

export const receivePlay = (song, songs) => {
  return({
    type: RECEIVE_PLAY,
    // play,
    song,
    songs
  });
};

export const receivePause = (song, songs) => {
  return({
    type: RECEIVE_PAUSE,
    // pause,
    song,
    songs
  });
};

export const receiveSongsQueue = (songs) => {
  return({
    type: RECEIVE_SONGS_QUEUE,
    songs
  });
};



export const fetchCurrentSong = (userId, id) => (dispatch) => (
  SongsUserApiUtil.fetchCurrentSong(userId, id)
    .then( song => dispatch(receiveCurrentSong(song)))
);

export const fetchNextSong = (userId, id) => (dispatch) => (
  SongsUserApiUtil.fetchCurrentSong(userId, id)
    .then( song => dispatch(receiveNextSong(song)))
);

export const fetchPrevSong = (userId, id) => (dispatch) => (
  SongsUserApiUtil.fetchCurrentSong(userId, id)
    .then( song => dispatch(receivePrevSong(song)))
);

export const fetchCurrentPlaylist = (id) => (dispatch) => (
  PlaylistApiUtil.fetchPlaylist(id)
    .then( playlist => dispatch(receiveCurrentPlaylist(playlist)))
);