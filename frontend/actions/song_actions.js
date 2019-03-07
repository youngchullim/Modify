import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";

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

