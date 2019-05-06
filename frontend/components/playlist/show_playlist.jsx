import React from 'react';
import { button, Link, NavLink } from 'react-router-dom';


class ShowPlaylist extends React.Component {
  constructor(props) {
    super(props);

    this.toggleLibrary = this.toggleLibrary.bind(this);
    this.removePlaylist = this.removePlaylist.bind(this);
    this.songDropdown = this.songDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.id);
    this.props.fetchPlaylistsSongs(this.props.match.params.id);
  }

  // When clicked on Add/Remove 'playlist-library-add' class
  toggleLibrary() {
    document.getElementById("playlist-library").classList.toggle('playlist-library-add');
  }

  removePlaylist(e) {
    let playlistId = this.props.match.params.id;
    // console.log(playlistId);
    // console.log(this.props.playlist);
    this.props.deletePlaylist(playlistId);
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
  
  render() {
    let playlistLibrary = "REMOVE FROM YOUR LIBRARY";

    if (!this.props.playlist) {
      return null;
    }
    return(
      <div className="playlistShow-component" onClick={this.closeDropdown}>
        <div className="playlistShow-info">
          <div className="playlistShow-photo-title">
            <div className="playlistShow-photo"></div>
            <div className="playlistShow-title">{this.props.playlist.name}</div>
          </div>
          <button className="album-play">PLAY</button>
          <div className="playlistShow-songLength">{this.props.songs.length} SONGS</div>

          <div className="playlist-options">
            <div onClick={this.toggleLibrary}>
              <div onClick={this.removePlaylist} id="playlist-library" className="playlist-library">{playlistLibrary}</div>
            </div>
{/* wont need for playlist */}
            {/* <div className="playlistShow-options">...</div> */}
          </div>
        </div>
        
        <div className="playlistShow-songs">
          <ul className="ul-album-songs">
            {this.props.songs.map( (song, idx) => (
              <li className="li-album-song" key={idx}>
                {/* <button className="song-play-button"></button> */}
                <div className="left-song">
                  <span className="song-title">{song.title}</span>
                  <br />
                  <span><Link className="song-artist albumshow-artistname" to={`/artists/${song.artistId}`}>{song.artistName}</Link></span>
                  <span className="split-dot">.</span>
                  <span><Link className="song-album albumshow-artistname" to={`/albums/${song.albumId}`}>{song.albumTitle}</Link></span>
                </div>
                <div className="song-rightside">
                  <div className="song-dropdown">
                    <button id={song.title} className="dropdown-button" onClick={this.songDropdown}>...</button>
                    <div id={song.title + 1} className="dropdown-content">
                      <a id={song.id} onClick={this.saveSong} className="save-to-library">Save to Your Library</a>
                      {/* <a className="add-to-playlist">Add to Playlist</a> */}
                      <a id={song.id} className="remove-padding" onClick={this.currSong}>
                        <div onClick={() => this.props.openModal('add', song.id)}>
                          <div className="add-playlist">Add to Playlist</div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <span className="song-duration">{song.duration}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default ShowPlaylist