import React from 'react';
import { ProtectedRoute } from '../../util/route_util';
import { withRouter, NavLink, Route, Link } from 'react-router-dom';

class SearchResult extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      songs: this.props.songs,
      song: 0,
      searchBar: ""
    };

    this.closeDropdown = this.closeDropdown.bind(this);
    this.songDropdown = this.songDropdown.bind(this);
    this.removeSong = this.removeSong.bind(this);
    this.addSongState = this.addSongState.bind(this);
    this.saveSong = this.saveSong.bind(this);
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

  addSongState(e) {
    let songId = e.currentTarget.id;
    this.setState({
      song: parseInt(songId)
    });
    this.props.receiveCurrentSongId(parseInt(e.currentTarget.id));
  }

  saveSong(e) {
    let songId = e.target.id;
    this.props.createSongsUser(this.props.user.id, songId);
  }

  render() {
    let result;
    let songs = this.props.songs.filter(song => song.title.toLowerCase().includes(this.props.searchBar.toLowerCase()));
    songs = songs.slice(0,5);

    let artists = this.props.artists.filter(artist => artist.name.toLowerCase().includes(this.props.searchBar.toLowerCase()));
    artists = artists.slice(0,10);

    let albums = this.props.albums.filter(album => album.title.toLowerCase().includes(this.props.searchBar.toLowerCase()));
    albums = albums.slice(0,10);


    if (this.props.searchBar !== "") {
      result = (
        <div className="search-results" onClick={this.closeDropdown}>

{/* SONGS */}
          <h1 className="top-result-tabs">Songs</h1>
          <ul className="ul-songs">
              {/* USED IMPLICIT RETURN ON MAP */}
            {songs.map( (song,idx) => (
              <li className="li-songs" key={idx}>
              <div className="song-index">
                {/* <button className="song-play-button"></button> */}
                <div className="left-song">
                  <div className="song-title">{song.title}</div>
                  <span><Link className="song-artist albumshow-artistname" to={`/artists/${song.artist.id}`}>{song.artist.name}</Link></span>
                  <span className="split-dot">.</span>
                  <span><Link className="song-album albumshow-artistname" to={`/albums/${song.album.id}`}>{song.album.title}</Link></span>
                </div>
                <div className="song-dropdown" >
                  <button id={song.title} className="dropdown-button" onClick={this.songDropdown}>...</button>
                  <div id={song.title + 1} className="dropdown-content">
                    <a id={song.id} onClick={this.saveSong} className="save-to-library">Save to Your Library</a>
                    <a id={song.id} onClick={this.removeSong}>Remove from Your Library</a>
                    {/* <a id={song.id} className="remove-padding" onClick={this.addSongState}>{this.props.openModal}</a> */}
                    <a id={song.id} className="remove-padding" onClick={this.addSongState}>
                      <div onClick={() => this.props.openModal('add', song.id)}>
                        <div className="add-playlist">Add to Playlist</div>
                      </div>
                    </a>
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


{/* ARTISTS */}
          <h1 className="top-result-tabs">Artists</h1>
          <ul className="ul-albums search-artists">
            {artists.map( (artist, idx) => (
              <li className="li-albums" key={idx}>
              <NavLink to={`/artists/${artist.id}`}>
                <img className="artist-photo" src={artist.artistPhoto} />
                <div className="album-name">{artist.name}</div>
              </NavLink>
              </li>
            ))}
          </ul>


{/* ALBUMS */}
          <h1 className="top-result-tabs">Albums</h1>
          <ul className="ul-albums search-artists">
            {albums.map( (album, idx) => (
              <li className="li-albums" key={idx}>
              <NavLink to={`/albums/${album.id}`}>
                <img className="album-photo" src={album.albumPhoto} />
                <div className="album-name">{album.title}</div>
              </NavLink>
                <div><Link className="album-artist albumshow-artistname" to={`/artists/${album.artist.id}`}>{album.artist.name}</Link></div>
              </li>
            ))}
          </ul>

        </div>
      );
    }
    return (
      <div>
        {result}
      </div>
    )
  }
}

export default withRouter(SearchResult);