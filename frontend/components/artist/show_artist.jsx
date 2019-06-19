import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { button, Link, NavLink } from 'react-router-dom';

import OverviewContainer from './overview_container';
import RelatedContainer from './related_container';

class ShowArtist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mouseHover: false,
      mouseIdx: null,
      event: "",
    };

    this.songDropdown = this.songDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.saveArtist = this.saveArtist.bind(this);
    this.removeArtist = this.removeArtist.bind(this);

// SAVE/REMOVE FROM LIBRARY
    this.renderClear = this.renderClear.bind(this);
    this.renderSavedArtist = this.renderSavedArtist.bind(this);
    this.renderRemovedArtist = this.renderRemovedArtist.bind(this);

// MUSIC PLAY
    this.playAll = this.playAll.bind(this);
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

// SAVE/REMOVE FROM LIBRARY
    setTimeout(this.renderSavedArtist, 0);
    setTimeout(this.renderClear, 2500);
  }

  removeArtist(e) {
    if(this.props.artist[this.props.artist.id]) {
      let artistsUsers = Object.values(this.props.artist.artistsUsers).filter(artistUser => artistUser.user_id === this.props.user.id);

      for (let i = 0 ; i < artistsUsers.length; i++) {
        let user = artistsUsers[i];
        this.props.deleteArtistsUser(user.id);
      }
// SAVE/REMOVE FROM LIBRARY
    setTimeout(this.renderRemovedArtist, 0);
    setTimeout(this.renderClear, 2500);
    }
  }

// SAVE/REMOVE FROM LIBRARY
  renderClear() {
    document.getElementById("state-event").innerHTML = "";
      this.setState( {
        event: ""
      });
  }

  renderSavedArtist() {
    this.setState({
      event: "Saved Artist to Library"
    });
    document.getElementById("state-event").innerHTML = "Saved Artist to Library";
  }

  renderRemovedArtist() {
    this.setState({
      event: "Remove Artist from Library"
    });
    document.getElementById("state-event").innerHTML = "Removed Artist from Library";
  }
  

// MUSIC PLAY
  playAll(e) {
    let song = this.props.songs.filter(s => s.artist.name === e.currentTarget.id)[0];
    let songs = this.props.songs.filter(s => s.artist.name === e.currentTarget.id);

    this.props.receivePlay(song, songs);
  }

  render() {
    if (!this.props.artist) {
      return null;
    }
    return(
      <div className="artist-show-page" onClick={this.closeDropdown}>

{/* SAVE/REMOVE FROM LIBRARY */}
        <div className="event-test">
          {(this.state.event.length > 0) ?
            (<div className="event-flex">
              {(this.state.event.length > 0) ? (<div className="event-librarySongs" id="state-event"></div>) : (<div></div>)}
              {(this.state.event.length > 0 ) ? (<button className="close-event" onClick={this.renderClear}>X</button>) : (<div></div>)}
            </div>) : (<div></div>)
          }
        </div>
        
        <div className="photo-background">
          <div className="artist-name-title">{this.props.artist.name}</div>
          <div className="artist-show-buttons">
            <button className="artist-play" id={this.props.artist.name} onClick={this.playAll}>PLAY</button>
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
                  <span className="playlists l-tabs a-s-tabs">OVERVIEW</span>
                </NavLink>
              </li>
              <li className="library-songs">
                    {/* USED !IMPORTANT CSS RULE */}
                <NavLink className="songs-link l-link" activeStyle={{}} activeClassName="selected-library-tab" to={`/artists/${this.props.artist.id}/related`}>
                  <span className="songs l-tabs a-s-tabs">RELATED ARTISTS</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <Switch>
          <ProtectedRoute exact path="/artists/:id" component={OverviewContainer}/>
          <ProtectedRoute path="/artists/:id/related" component={RelatedContainer}/>
        </Switch>
      </div>
    )
  }
}
export default ShowArtist;