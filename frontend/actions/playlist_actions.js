import * as PlaylistApiUtil from '../util/playlist_api_util';
import * as PlaylistsUserApiUtil from '../util/playlists_user_api_util';

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";
// export const RECEIVE_PLAYLISTS_USER = "RECEIVE_PLAYLISTS_USER";

export const receivePlaylists = (playlists) => {
  return({
    type: RECEIVE_PLAYLISTS,
    playlists: playlists
  });
};

export const receivePlaylist = (playlist) => {
  return({
    type: RECEIVE_PLAYLIST,
    playlist: playlist
  });
};

export const removePlaylist = (playlist) => {
  return({
    type: REMOVE_PLAYLIST,
    playlistId: playlist.id
  });
};

export const fetchPlaylists = () => (dispatch) => (
  PlaylistApiUtil.fetchPlaylists()
    .then( playlists => dispatch(receivePlaylists(playlists)))
);

export const fetchPlaylist = (id) => (dispatch) => (
  PlaylistApiUtil.fetchPlaylist(id)
    .then( playlist => dispatch(receivePlaylist(playlist)))
);

export const createPlaylist = (playlist) => (dispatch) => (
  PlaylistApiUtil.createPlaylist(playlist)
    .then( playlist => dispatch(receivePlaylist(playlist)))
);

export const updatePlaylist = (playlist) => (dispatch) => (
  PlaylistApiUtil.updatePlaylist(playlist)
    .then( playlist => dispatch(receivePlaylist(playlist)))
);

export const deletePlaylist = (id) => (dispatch) => (
  PlaylistApiUtil.deletePlaylist(id)
    .then( playlist => dispatch(removePlaylist(playlist)))
);

// export const receivePlaylistsUser = user => {
//   return({
//     type: RECEIVE_PLAYLISTS_USER,
//     user
//   });
// };

export const createPlaylistsUser = (playlistsUser) => (dispatch) => (
  PlaylistsUserApiUtil.createPlaylistsUser(playlistsUser)
    .then( playlist => dispatch(receivePlaylist(playlist)))
);

export const deletePlaylistsUser = (id) => (dispatch) => (
  PlaylistsUserApiUtil.deletePlaylistsUser(id)
    .then( playlist => dispatch(receivePlaylist(playlist)))
);

export const fetchPlaylistsUsers = (id) => (dispatch) => (
  PlaylistsUserApiUtil.fetchPlaylistsUsers(id)
    .then( playlists => dispatch(receivePlaylists(playlists)))
);