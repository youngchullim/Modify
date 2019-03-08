import * as AlbumApiUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";

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

