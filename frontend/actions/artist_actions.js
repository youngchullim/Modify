import * as ArtistApiUtil from '../util/artist_api_util';
import * as ArtistsUserApiUtil from '../util/artists_user_api_util';

export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_ARTISTS_USER = "RECEIVE_ARTISTS_USER";
export const REMOVE_ARTIST = "REMOVE_ARTIST";

export const receiveArtists = (artists) => {
  return({
    type: RECEIVE_ARTISTS,
    artists: artists
  });
};

export const receiveArtist = (artist) => {
  return({
    type: RECEIVE_ARTIST,
    artist: artist
  });
};

export const fetchArtists = () => (dispatch) => (
  ArtistApiUtil.fetchArtists()
    .then( artists => dispatch(receiveArtists(artists)))
);

export const fetchArtist = (id) => (dispatch) => (
  ArtistApiUtil.fetchArtist(id)
    .then( artist => dispatch(receiveArtist(artist)))
);

export const receiveArtistsUser = user => {
  return({
    type: RECEIVE_ARTISTS_USER,
    user
  });
};

export const removeArtist = () => {
  return({
    type: REMOVE_ARTIST
  });
};

export const createArtistsUser = (user_id, artist_id) => (dispatch) => (
  ArtistsUserApiUtil.createArtistsUser({user_id, artist_id})
    .then( user => dispatch(receiveArtistsUser(user)))
);

export const deleteArtistsUser = (id) => (dispatch) => (
  ArtistsUserApiUtil.deleteArtistsUser(id)
    .then( user => dispatch(receiveArtistsUser(user)))
);

export const fetchArtistsUsers = (id) => (dispatch) => (
  ArtistsUserApiUtil.fetchArtistsUsers(id)
    .then( artists => dispatch(receiveArtists(artists)))
);