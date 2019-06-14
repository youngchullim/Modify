import React from 'react';

import Navbar from './navbar/navbar';
import Home from './home/home';
import Library from './library/library';
import Search from './search/search';

import Modal from './modal/modal';
import NavbarContainer from './navbar/navbar_container';
import MusicContainer from './music/music_container';

import HomeContainer from './home/home_container';
import LibraryContainer from './library/library_container';
import SearchContainer from './search/search_container';
import ProfileContainer from './profile/profile_container';

import ShowAlbumContainer from './album/show_album_container';
import ShowArtistContainer from './artist/show_artist_container';
import ShowPlaylistContainer from './playlist/show_playlist_container';
import ShowGenreContainer from './genre/show_genre_container';
// import ShowPlaylistContainer from './playlist/show_playlist_container';

import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute }from '../util/route_util';


const AuthComponent = () => {
  return (
    <div className="auth-comp">
      {/* <Navbar user={user} logout={logout}/> */}
      <ProtectedRoute path="/" component={NavbarContainer} />
      {/* ADD MUSIC PLAYER CONTAINER AS WELL */}
      <ProtectedRoute path="/" component={MusicContainer} />
      <div className="auth-switch">
        <Switch>
          <ProtectedRoute path="/search" component={SearchContainer} />
          <ProtectedRoute path="/library" component={LibraryContainer} />
          <ProtectedRoute path="/profile" component={ProfileContainer} />
          <ProtectedRoute path="/albums/:id" component={ShowAlbumContainer} />
          <ProtectedRoute path="/artists/:id" component={ShowArtistContainer} />
          <ProtectedRoute path="/playlists/:id" component={ShowPlaylistContainer} />
          <ProtectedRoute path="/genre/:title" component={ShowGenreContainer} />
          <ProtectedRoute path="/" component={HomeContainer} />
        </Switch>
      </div>
    </div>
  )
};
export default AuthComponent;