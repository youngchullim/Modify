import React from 'react';
import { button, Link, NavLink } from 'react-router-dom';

class SongsUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: this.props.songs
    };

    this.songDropdown = this.songDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.removeSong = this.removeSong.bind(this);
  }

  componentDidMount() {
    this.props.fetchSongsUsers(this.props.user.id);
  }

  // componentDidUpdate() {
  //   this.setState({
  //     songs: this.props.songs
  //   });
  // }

  // componentWillReceiveProps(props) {
  //   this.setState({
  //     songs: this.props.fetchSongsUsers(this.props.user.id)
  //   });
  // }
   
  songDropdown(e) {
    let songName = e.target.id + 1;
    document.getElementById(songName).classList.toggle("show");
  }

  removeSong(e) {
    let userId = this.props.user.id;
    let currSongId = e.currentTarget.id;

    let currSong = this.props.songs.filter(song => song.id === parseInt(currSongId))[0];
    let songsUsers = currSong.songsUsers;

    let currSongUser = songsUsers.filter(songsUser => songsUser.user_id === userId);
    
    for (let i = 0; i < currSongUser.length; i++) {
      let user = currSongUser[i];
      this.props.deleteSongsUser(user.id);
    }

    this.setState({
      songs: this.props.fetchSongsUsers(this.props.user.id)
    });
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
    return(
      <div className="songs-component" onClick={this.closeDropdown}>
        <ul className="ul-songs">
            {/* USED IMPLICIT RETURN ON MAP */}
          {this.props.songs.map( (song,idx) => (
            <li className="li-songs" key={idx}>
            <div className="song-index">
              {/* <button className="song-play-button"></button> */}
              <div className="left-song">
                <div className="song-title">{song.title}</div>
                <span><Link className="song-artist albumshow-artistname" to={`/artists/${song.artist.id}`}>{song.artist.name}</Link></span>
                <span className="split-dot">.</span>
                <span><Link className="song-album albumshow-artistname" to={`/albums/${song.album.id}`}>{song.album.title}</Link></span>
              </div>
              <div className="song-dropdown">
                <button id={song.title} className="dropdown-button" onClick={this.songDropdown}>...</button>
                <div id={song.title + 1} className="dropdown-content">
                  <a id={song.id} onClick={this.removeSong}>Remove from Your Library</a>
                  <a>Add to Playlist</a>
                </div>
                <span className="song-duration">{song.duration}</span>
              </div>
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