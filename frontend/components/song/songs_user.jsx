import React from 'react';
import { button, Link, NavLink } from 'react-router-dom';

class SongsUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSong: ""
    };
    
    this.songDropdown = this.songDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.removeSong = this.removeSong.bind(this);
  }

  componentDidMount() {
    this.props.fetchSongsUsers(this.props.user.id);
  }
  
  // DROPDOWN ONLY WORKS FOR THE FIRST DROPDOWN
  songDropdown(e) {
    // console.log(this.state.currentSong);
    let songName = e.target.id + 1;
    this.setState({
      currentSong: e.currentTarget.id
    });
    // console.log(songName);
    document.getElementById(songName).classList.toggle("show");
  }

  // REMOVE NOT WORKING
  removeSong(e) {
    let songId = e.target.id;
    let song = this.props.songs.filter(song => song.id === songId)
    let userId = this.props.user.id;
    // let users = song.songsUsers;
    // let currentUser = users.filter(user => user.id === userId)[0];
    console.log(song);
    // this.props.deleteSongsUser();
  }

  closeDropdown(e) {
    let songName = e.target.id;
// @@@@@@ TEST @@@@@@@@
    console.log(songName);
    console.log("$$$$$$$$");
    console.log(this.state.currentSong);
    console.log("@@@@@@@@");
    
    if (!e.target.matches('.dropdown-button')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
// @@@@@ FIGURE OUT HOW TO CLOSE PREVIOUS DROPDOWN WHEN CLICKED ON ANOTHER DROPDOWN @@@@@@@
    // } else if (songName !== this.state.currentSong) {
    //   let dropdowns = document.getElementsByClassName("dropdown-content");
    //   for (let i = 0; i < dropdowns.length; i++) {
    //     let openDropdown = dropdowns[i];
    //     if (openDropdown.classList.contains('show')) {
    //       openDropdown.classList.remove('show');
    //     }
    //   }
    }
  }

  render() {
    return(
      <div className="songs-component" onClick={this.closeDropdown}>
        <ul className="ul-songs">
            {/* USED IMPLICIT RETURN ON MAP */}
          {this.props.songs.map( (song,idx) => (
            <li className="li-songs" key={idx}>
            <div>
              {/* <button className="song-play-button"></button> */}
              <span className="song-title">{song.title}</span>
              <br />
              <span><Link className="song-artist albumshow-artistname" to={`/artists/${song.artist.id}`}>{song.artist.name}</Link></span>
              <span className="split-dot">.</span>
              <span><Link className="song-album albumshow-artistname" to={`/albums/${song.album.id}`}>{song.album.title}</Link></span>
              
              <div className="song-dropdown">
                <button id={song.title} className="dropdown-button" onClick={this.songDropdown}>...</button>
                <div id={song.title + 1} className="dropdown-content">
                  <a id={song.id} onClick={this.removeSong}>Remove from Your Library</a>
                  <a>Add to Playlist</a>
                </div>
              </div>
              
              <span className="song-duration">{song.duration}</span>
            </div>
              {/* <audio className="audio-songs" controls="controls" preload="auto">
                <source src={song.songUrl} />
              </audio> */}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default SongsUser