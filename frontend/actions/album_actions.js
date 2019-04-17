import * as AlbumApiUtil from '../util/album_api_util';
import * as AlbumsUserApiUtil from '../util/albums_user_api_util';

export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUMS_USER = "RECEIVE_ALBUMS_USER";
export const REMOVE_ALBUMS = "REMOVE_ALBUMS";

export const receiveAlbums = (albums) => {
  return({
    type: RECEIVE_ALBUMS,
    albums: albums
  });
};

export const receiveAlbum = (album) => {
  return({
    type: RECEIVE_ALBUM,
    album: album
  });
};

export const fetchAlbums = () => (dispatch) => (
  AlbumApiUtil.fetchAlbums()
    .then( albums => dispatch(receiveAlbums(albums)))
);

export const fetchAlbum = (id) => (dispatch) => (
  AlbumApiUtil.fetchAlbum(id)
    .then( album => dispatch(receiveAlbum(album)))
);

export const receiveAlbumsUser = user => {
  return({
    type: RECEIVE_ALBUMS_USER,
    user
  });
};

export const removeAlbums = () => {
  return({
    type: REMOVE_ALBUMS
  });
};

export const createAlbumsUser = (user_id, album_id) => (dispatch) => (
  AlbumsUserApiUtil.createAlbumsUser({user_id, album_id})
    .then( user => dispatch(receiveAlbumsUser(user)))
);

export const deleteAlbumsUser = (id) => (dispatch) => (
  AlbumsUserApiUtil.deleteAlbumsUser(id)
    .then( user => dispatch(receiveAlbumsUser(user)))
);

export const fetchAlbumsUsers = (id) => (dispatch) => (
  AlbumsUserApiUtil.fetchAlbumsUsers(id)
    .then( albums => dispatch(receiveAlbums(albums)))
);