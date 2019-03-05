import React from 'react';
import { butoon, Link, NavLink } from 'react-router-dom';

import PlaylistContainer from '../playlist/playlist_container';
import SongContainer from '../song/song_container';
import AlbumContainer from '../album/album_container';
import ArtistContainer from '../artist/artist_container';

import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';


class Library extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.state;
  }

  

  render() {
    let userArr = this.props.user.email.split("");
    let user = "";
    for(let i = 0; i < userArr.length; i++) {
      if (userArr[i] === "@") {
        break;
      } else {
        user += userArr[i];
      }
    }
    return(
      <div className="navbar-library">
        <div>
            {/* @@@@@@@@   NEW PLAYLIST BUTTON   @@@@@@@@ */}
          <ul className="library-tabs">
            <li className="library-playlists">
                  {/* USED !IMPORTANT CSS RULE */}
              <NavLink className="playlists-link l-link" activeStyle={{}} activeClassName="selected-library-tab" exact to="/library"> {/* logo button goes to HOME */}
                <span className="playlists l-tabs">Playlists</span>
              </NavLink>
            </li>
            <li className="library-songs">
                  {/* USED !IMPORTANT CSS RULE */}
              <NavLink className="songs-link l-link" activeStyle={{}} activeClassName="selected-library-tab" to="/library/songs"> {/* logo button goes to HOME */}
                <span className="songs l-tabs">Songs</span>
              </NavLink>
            </li>
            <li className="library-albums">
                  {/* USED !IMPORTANT CSS RULE */}
              <NavLink className="albums-link l-link" activeStyle={{}} activeClassName="selected-library-tab" to="/library/albums"> {/* logo button goes to HOME */}
                <span className="albums l-tabs">Albums</span>
              </NavLink>
            </li>
            <li className="library-artists">
                  {/* USED !IMPORTANT CSS RULE */}
              <NavLink className="artists-link l-link" activeStyle={{}} activeClassName="selected-library-tab" to="/library/artists"> {/* logo button goes to HOME */}
                <span className="artists l-tabs">Artists</span>
              </NavLink>
            </li>
          </ul>

        </div>
        <span className="library-new-playlist">
          <a className="playlist-button" role="button" onClick={this.props.playlist}>
            <div className="new-playlist">
              <div className="playlist-center">NEW PLAYLIST</div>
            </div>
          </a>
        </span>


        <Switch>
          <ProtectedRoute exact path="/library" component={PlaylistContainer}/>
          <ProtectedRoute path="/library/songs" component={SongContainer}/>
          <ProtectedRoute path="/library/albums" component={AlbumContainer}/>
          <ProtectedRoute path="/library/artists" component={ArtistContainer}/>
        </Switch>
      </div>
    )
  }
}

export default Library;