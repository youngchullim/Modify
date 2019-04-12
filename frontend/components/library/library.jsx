import React from 'react';
import { button, Link, NavLink } from 'react-router-dom';

import Modal from '../modal/modal';
import PlaylistContainer from '../playlist/playlist_container';
import SongContainer from '../song/song_container';
import AlbumContainer from '../album/album_container';
import ArtistContainer from '../artist/artist_container';

import ShowPlaylistContainer from '../playlist/show_playlist_container';
import ShowAlbumContainer from '../album/show_album_container';
import ShowArtistContainer from '../artist/show_artist_container';

import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';


class Library extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.state;
  }

  componentDidMount() {
    this.props.fetchPlaylists();
    // this.props.fetchSongs();
  }

  render() {
    // let userArr = this.props.user.email.split("");
    // let user = "";
    // for(let i = 0; i < userArr.length; i++) {
    //   if (userArr[i] === "@") {
    //     break;
    //   } else {
    //     user += userArr[i];
    //   }
    // }
    
    return(
      <div className="navbar-library-component">
      
        <div className="library-top-navbar">
          <div className="navbar-library">
            <ul className="library-tabs">
              <li className="library-playlists">
                    {/* USED !IMPORTANT CSS RULE */}
                <NavLink className="playlists-link l-link" activeStyle={{}} activeClassName="selected-library-tab" exact to="/library/">
                  <span className="playlists l-tabs">Playlists</span>
                </NavLink>
              </li>
              <li className="library-songs">
                    {/* USED !IMPORTANT CSS RULE */}
                <NavLink className="songs-link l-link" activeStyle={{}} activeClassName="selected-library-tab" to="/library/songs">
                  <span className="songs l-tabs">Songs</span>
                </NavLink>
              </li>
              <li className="library-albums">
                    {/* USED !IMPORTANT CSS RULE */}
                <NavLink className="albums-link l-link" activeStyle={{}} activeClassName="selected-library-tab" to="/library/albums">
                  <span className="albums l-tabs">Albums</span>
                </NavLink>
              </li>
              <li className="library-artists">
                    {/* USED !IMPORTANT CSS RULE */}
                <NavLink className="artists-link l-link" activeStyle={{}} activeClassName="selected-library-tab" to="/library/artists">
                  <span className="artists l-tabs">Artists</span>
                </NavLink>
              </li>
            </ul>
          </div>
            {/* @@@@@@@@   NEW PLAYLIST BUTTON   @@@@@@@@ */}
          <span className="library-new-playlist">
            <a>{this.props.openModal}</a>

            {/* MOVED TO LIBRARY CONTAINER */}
          {/* <a className="playlist-button" role="button" onClick={this.props.openModal()}>
            <div className="new-playlist">
              <div className="playlist-center">NEW PLAYLIST</div>
            </div>
          </a> */}
          </span>
        </div>
        
            {/* MOVED TO APP */}
        {/* <Modal /> */}
        <Switch>
          <ProtectedRoute path="/library/songs" component={SongContainer}/>
          <ProtectedRoute exact path="/library/albums" component={AlbumContainer}/>
          <ProtectedRoute path="/albums/:id" component={ShowAlbumContainer} />
          <ProtectedRoute exact path="/library/artists" component={ArtistContainer}/>
          <ProtectedRoute path="/artists/:id" component={ShowArtistContainer}/>
          <ProtectedRoute path="/playlists/:id" component={ShowPlaylistContainer} />
          <ProtectedRoute path="/library" component={PlaylistContainer}/>
        </Switch>
      </div>
    )
  }
}

export default Library;