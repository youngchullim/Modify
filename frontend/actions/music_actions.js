import * as SongApiUtil from '../util/song_api_util';
import * as PlaylistApiUtil from '../util/playlist_api_util';

export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG";
export const RECEIVE_NEXT_SONG = "RECEIVE_NEXT_SONG";
export const RECEIVE_PREV_SONG = "RECEIVE_PREV_SONG";
export const RECEIVE_CURRENT_PLAYLIST = "RECEIVE_CURRENT_PLAYLIST";
export const RECEIVE_PLAY = "RECEIVE_PLAY";

const receiveCurrentSong = (song) => {
  return({
    type: RECEIVE_CURRENT_SONG,
    song: song
  });
};

const receiveNextSong = (song) => {
  return({
    type: RECEIVE_NEXT_SONG,
    song: song
  });
};

const receivePrevSong = (song) => {
  return({
    type: RECEIVE_PREV_SONG,
    song: song
  });
};

const receiveCurrentPlaylist = (playlist) => {
  return({
    type: RECEIVE_CURRENT_PLAYLIST,
    playlist: playlist
  });
};

export const receivePlay = () => {
  return({
    type: RECEIVE_PLAY
  });
};



export const fetchCurrentSong = (id) => (dispatch) => (
  SongApiUtil.fetchSong(id)
    .then( song => dispatch(receiveCurrentSong(song)))
);

export const fetchNextSong = (id) => (dispatch) => (
  SongApiUtil.fetchSong(id)
    .then( song => dispatch(receiveNextSong(song)))
);

export const fetchPrevSong = (id) => (dispatch) => (
  SongApiUtil.fetchSong(id)
    .then( song => dispatch(receivePrevSong(song)))
);

export const fetchCurrentPlaylist = (id) => (dispatch) => (
  PlaylistApiUtil.fetchPlaylist(id)
    .then( playlist => dispatch(receiveCurrentPlaylist(playlist)))
);