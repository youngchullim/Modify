import React from 'react';
import { button, Link, NavLink } from 'react-router-dom';


class ShowPlaylist extends React.Component {
  constructor(props) {
    super(props);

    this.toggleLibrary = this.toggleLibrary.bind(this);
    this.removePlaylist = this.removePlaylist.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.id);
    // this.props.fetchSongs();

// @@@@@@@@@ TEST @@@@@@@@@
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

  render() {
    let playlistLibrary = "REMOVE FROM YOUR LIBRARY";

    if (!this.props.playlist) {
      return null;
    }
    return(
      <div className="playlistShow-component">
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
                <div>
                  {/* <button className="song-play-button"></button> */}
                  <span className="song-title">{song.title}</span>
                  <br />
                  <span><Link className="song-artist albumshow-artistname" to={`/artists/${song.artistId}`}>{song.artistName}</Link></span>
                  <span className="split-dot">.</span>
                  <span><Link className="song-album albumshow-artistname" to={`/albums/${song.albumId}`}>{song.albumTitle}</Link></span>
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