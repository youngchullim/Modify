import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { button, Link, NavLink } from 'react-router-dom';


class ShowArtist extends React.Component {
  constructor(props) {
    super(props);

    this.songDropdown = this.songDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.saveArtist = this.saveArtist.bind(this);
    this.removeArtist = this.removeArtist.bind(this);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.id);
  }

  songDropdown(e) {
    let songName = e.target.id + 1;
    document.getElementById(songName).classList.toggle("show");
  }

  closeDropdown(e) {
    let songName = e.target.id + 1;
    
    if (!e.target.matches('.dropdown-button')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    } else {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.id === songName) {
          continue;
        } else if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  saveArtist(e) {
    let artistId = this.props.artist.id;
    this.props.createArtistsUser(this.props.user.id, artistId);
  }

  removeArtist(e) {
    if(this.props.artist[this.props.artist.id]) {
      let artistsUsers = Object.values(this.props.artist.artistsUsers).filter(artistUser => artistUser.user_id === this.props.user.id);

      for (let i = 0 ; i < artistsUsers.length; i++) {
        let user = artistsUsers[i];
        this.props.deleteArtistsUser(user.id);
      }
    }
  }
  

  render() {
    if (!this.props.artist) {
      return null;
    }
    return(
      <div className="artist-show-page" onClick={this.closeDropdown}>
        <div className="photo-background">
          <div className="artist-name-title">{this.props.artist.name}</div>
          <div className="artist-show-buttons">
            <button className="album-play">PLAY</button>
            <div className="song-dropdown">
              <button id={this.props.artist.name} className="album-playlist dropdown-button" onClick={this.songDropdown}>...</button>
              <div id={this.props.artist.name + 1} className="dropdown-content">
                <a id={this.props.artist.id} onClick={this.saveArtist} className="save-to-library">Save to Your Library</a>
                <a id={this.props.artist.id} onClick={this.removeArtist} className="save-to-library">Remove from Your Library</a>
{/* BONUS: NEED TO BE ABLE TO ADD ALL THE SONGS IN ALBUM TO PLAYLIST */}
                {/* <a className="add-to-playlist">Add to Playlist</a> */}
              </div>
            </div>
          </div>
          <div className="artist-show-tabs">
            <ul className="library-tabs">
              <li className="library-playlists">
                    {/* USED !IMPORTANT CSS RULE */}
                <NavLink className="playlists-link l-link" activeStyle={{}} activeClassName="selected-library-tab" exact to={`/artists/${this.props.artist.id}`}>
                  <span className="playlists l-tabs">Overview</span>
                </NavLink>
              </li>
              <li className="library-songs">
                    {/* USED !IMPORTANT CSS RULE */}
                <NavLink className="songs-link l-link" activeStyle={{}} activeClassName="selected-library-tab" to={`/artists/${this.props.artist.id}/related`}>
                  <span className="songs l-tabs">Related Artists</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <Switch>
          {/* <ProtectedRoute path="/artists/:id" component={ShowArtistOverviewContainer}/>
          <ProtectedRoute path="/artists/:id/related" component={ShowArtistRelatedContainer}/> */}
        </Switch>
      </div>
    )
  }
}
export default ShowArtist;