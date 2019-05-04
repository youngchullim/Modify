import * as SongApiUtil from '../util/song_api_util';
import * as SongsUserApiUtil from '../util/songs_user_api_util';
import * as PlaylistsSongApiUtil from '../util/playlists_song_api_util';
import { receivePlaylist } from './playlist_actions';

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_SONGS_USER = "RECEIVE_SONGS_USER";
export const REMOVE_SONGS = "REMOVE_SONGS";
export const RECEIVE_PLAYLISTS_SONG = "RECEIVE_PLAYLISTS_SONG";

export const receiveSongs = (songs) => {
  return({
    type: RECEIVE_SONGS,
    songs: songs
  });
};

export const receiveSong = (song) => {
  return({
    type: RECEIVE_SONG,
    song: song
  });
};

export const fetchSongs = () => (dispatch) => (
  SongApiUtil.fetchSongs()
    .then( songs => dispatch(receiveSongs(songs)))
);

export const fetchSong = (id) => (dispatch) => (
  SongApiUtil.fetchSong(id)
    .then( song => dispatch(receiveSong(song)))
);

export const receiveSongsUser = user => {
  return({
    type: RECEIVE_SONGS_USER,
    user
  });
};

export const removeSongs = () => {
  return({
    type: REMOVE_SONGS
  });
};

export const createSongsUser = (user_id, song_id) => (dispatch) => (
  SongsUserApiUtil.createSongsUser({user_id, song_id})
    .then( user => dispatch(receiveSongsUser(user)))
);

export const deleteSongsUser = (id) => (dispatch) => (
  SongsUserApiUtil.deleteSongsUser(id)
    .then( user => dispatch(receiveSongsUser(user)))
);

export const fetchSongsUsers = (id) => (dispatch) => (
  SongsUserApiUtil.fetchSongsUsers(id)
    .then( songs => dispatch(receiveSongs(songs)))
);

export const createPlaylistsSong = (playlist_id, song_id) => (dispatch) => (
  PlaylistsSongApiUtil.createPlaylistsSong({playlist_id, song_id})
    .then( playlist => dispatch(receivePlaylist(playlist)))
);

export const deletePlaylistsSong = (id) => (dispatch) => (
  PlaylistsSongApiUtil.deletePlaylistsSong(id)
    .then( playlist => dispatch(receivePlaylist(playlist)))
);

export const fetchPlaylistsSongs = (id) => (dispatch) => (
  PlaylistsSongApiUtil.fetchPlaylistsSongs(id)
    .then( songs => dispatch(receiveSongs(songs)))
);