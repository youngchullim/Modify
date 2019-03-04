import React from 'react';

import Navbar from './navbar/navbar';
import Home from './home/home';
import Library from './library/library';
import Search from './search/search';

import NavbarContainer from './navbar/navbar_container';
import HomeContainer from './home/home_container';
import LibraryContainer from './library/library_container';
import SearchContainer from './search/search_container';
import ProfileContainer from './profile/profile_container';

import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute }from '../util/route_util';


const AuthComponent = ({ user, logout }) => {
  return (
    <div>
      {/* <Navbar user={user} logout={logout}/> */}
      <ProtectedRoute path="/" component={NavbarContainer} />
      {/* ADD MUSIC PLAYER CONTAINER AS WELL */}
      <div>
        <Switch>
          <ProtectedRoute path="/home" component={HomeContainer} />
          <ProtectedRoute path="/search" component={SearchContainer} />
          <ProtectedRoute path="/library" component={LibraryContainer} />
          <ProtectedRoute path="/profile" component={ProfileContainer} />
        </Switch>
      </div>
    </div>
  )
};
export default AuthComponent;