import React from 'react';
import { button, Link, NavLink } from 'react-router-dom';


class ShowPlaylist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: this.props.songs,
      song: 0,
      mouseHover: false,
      mouseIdx: null,
    };

    this.toggleLibrary = this.toggleLibrary.bind(this);
    this.removePlaylist = this.removePlaylist.bind(this);
    this.songDropdown = this.songDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.saveSong = this.saveSong.bind(this); 
    this.currSong = this.currSong.bind(this);
    this.saveAlbum = this.saveAlbum.bind(this);
    this.removeSong = this.removeSong.bind(this);

// MUSIC PLAY
    this.changeIcon = this.changeIcon.bind(this);
    this.playSong = this.playSong.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.currentSongIdx = this.currentSongIdx.bind(this);
    this.play = this.play.bind(this);
    this.playAll = this.playAll.bind(this);
    // this.changeDuration = this.changeDuration.bind(this);
    // this.changeTitle = this.changeTitle.bind(this);
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

  currSong(e) {
    this.props.receiveCurrentSongId(parseInt(e.currentTarget.id));
  }

  saveSong(e) {
    let songId = e.target.id;
    // let albumId = this.props.album.id;
    this.props.createSongsUser(this.props.user.id, songId);
    // this.props.createAlbumsUser(this.props.user.id, albumId);
  }

  saveAlbum(e) {
    let albumId = e.target.id;
    this.props.createAlbumsUser(this.props.user.id, albumId);
  }

  // removeSong(e) {
  //   let userId = this.props.user.id;
  //   let currSongId = e.currentTarget.id;

  //   let currSong = this.props.songs.filter(song => song.id === parseInt(currSongId))[0];
  //   let songsUsers = currSong.songsUsers;

  //   let currSongUser = songsUsers.filter(songsUser => songsUser.user_id === userId);
    
  //   for (let i = 0; i < currSongUser.length; i++) {
  //     let user = currSongUser[i];
  //     this.props.deleteSongsUser(user.id);
  //   }

  //   this.setState({
  //     songs: this.props.fetchSongsUsers(this.props.user.id)
  //   });
  // }
  removeSong(e) {
    let playlistId = this.props.playlist.id;
    let songId = e.currentTarget.id;

    let currSong = this.props.songs.filter(song => song.id === parseInt(songId))[0];
    let songsPlaylists = currSong.songsPlaylists;

    let currSongPlaylist = songsPlaylists.filter(songPlaylist => songPlaylist.playlist_id === playlistId);

    for (let i = 0; i < currSongPlaylist.length; i++) {
      let playlist = currSongPlaylist[i];
      this.props.deletePlaylistsSong(playlist.id);
    }
    this.setState({
    songs: this.props.fetchPlaylistsSongs(this.props.match.params.id)
    });
  }

// MUSIC PLAY
  changeIcon(e) {
    e.target.src = window.whiteMusic2;
    // this.changeDuration(e);
    // this.changeTitle(e);
    this.playSong(e);
  }

// // NEED TO CHANGE
  // changeDuration(e) {
  //   let durations = document.getElementsByClassName("song-duration-green");
  //   let duration = document.getElementById(e.currentTarget.id).getElementsByClassName("song-duration")[0];
  //   let duration2 = document.getElementById(e.currentTarget.id).getElementsByClassName("song-duration-green")[0];
  //   if (duration) {
  //     duration.className = "song-duration-green";
  //     for (let i = 0; i < durations.length; i++) {
  //       if (parseInt(durations[i].id) !== e.currentTarget.value) {
  //         durations[i].className="song-duration";
  //       }
  //     }
  //   } else {
  //     duration2.className = "song-duration";
  //   }
  // }

  // changeTitle(e) {
  //   let titles = document.getElementsByClassName("song-title-green");
  //   let title = document.getElementById(e.currentTarget.id).getElementsByClassName("song-title")[0];
  //   let title2 = document.getElementById(e.currentTarget.id).getElementsByClassName("song-title-green")[0];
  //   if (title) {
  //     title.className = "song-title-green";
  //     for (let i = 0; i < titles.length; i++) {
  //       if (titles[i].innerText !== e.currentTarget.id) {
  //         titles[i].className="song-title";
  //       }
  //     }
  //   } else {
  //     title2.className = "song-title";
  //   }
  // }
  
  playSong(e) {
    let song = this.props.songs.filter( song => song.title === e.currentTarget.id)[0];
    let songs = this.props.songs.map(song => song);

    let songIdx = this.currentSongIdx(songs,song);
    
    let prev;
    let next;
    if (songIdx === 0) {
      prev = songs[songs.length - 1];
      next = songs[songIdx + 1];
    } else if (songIdx === songs.length - 1) {
      prev = songs[songIdx - 1];
      next = songs[0];
    } else {
      prev = songs[songIdx - 1];
      next = songs[songIdx + 1];
    }
    this.props.receiveCurrentSong(song, next, prev);

    // this.props.fetchCurrentSong(this.props.user.id, song.id);

    this.play(song);
  }

  play(song) {
    let music = this.props.currentSong ? document.getElementById(this.props.currentSong.id) : null;
    let music2 = document.getElementById(song.id);

    if (music === music2 && this.props.play) {
      // music2.pause();
      this.props.receivePause(song, this.props.songs);
    } else {
      this.props.receivePlay(song, this.props.songs);
      // this.handlePlay(music2);
      if (music && music !== music2) {
        // this.handleStop(music);
      }
    }
  }

  currentSongIdx(songs, song) {
    for (let i = 0; i < songs.length; i++) {
      if (songs[i] === song) {
        return i;
      }
    }
  }

  mouseEnter(idx) {
    return() => {
      this.setState({
        mouseHover: true,
        mouseIdx: idx
      });
    };
  }

  mouseLeave() {
    return() => {
      this.setState({
        mouseHover: false,
        mouseIdx: null
      });
    };
  }

  playAll(e) {
    let song = this.props.song;
    let songs = this.props.songs;

    this.props.receivePlay(song, songs);
  }
  
  render() {
    let playlistLibrary = "REMOVE FROM YOUR LIBRARY";

    if (!this.props.playlist) {
      return null;
    }
    let songs = this.props.songs.filter(song => song.title);

    let musicPlay = (<img className="music-icon" src={window.whitePlay2}/>);
    let musicNote = (<img className="music-icon" src={window.whiteMusic2}/>);

    return(
      <div className="playlistShow-component" onClick={this.closeDropdown}>
        <div className="playlistShow-info">
          <div className="playlistShow-photo-title">
            <div className="playlistShow-photo"></div>
            <div className="playlistShow-title">{this.props.playlist.name}</div>
          </div>
          <button className="album-play" onClick={this.playAll}>PLAY</button>
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
            {songs.map( (song, idx) => (
              <li 
                className="li-album-song" 
                id={song.title} 
                key={idx} 
                value={idx}
                onMouseEnter={this.mouseEnter(idx)} 
                onMouseLeave={this.mouseLeave()} 
                onDoubleClick={this.changeIcon} >
                {/* <button className="song-play-button"></button> */}
                <div className="left-song left-user-song">
                  <ul className="music-img">
                    <li className="music-img" id={song.title} value={idx} onClick={this.changeIcon}>
                      { this.state.mouseIdx === idx ? musicPlay : musicNote }
                    </li>
                  </ul>
                  <div className="left-song-info">
{/* TITLE COLOR CHANGE */}
                    {(this.props.currentSong) ?
                      (this.props.currentSong.title === song.title) ? 
                        (<span className="song-title-green">{song.title}</span>) : 
                        (<span className="song-title">{song.title}</span>)
                      :
                      (<span className="song-title">{song.title}</span>)
                    }
{/* <span className="song-title">{song.title}</span> */}
                    <br />
                    <span><Link className="song-artist albumshow-artistname" to={`/artists/${song.artistId}`}>{song.artistName}</Link></span>
                    <span className="split-dot">.</span>
                    <span><Link className="song-album albumshow-artistname" to={`/albums/${song.albumId}`}>{song.albumTitle}</Link></span>
                  </div>
                </div>
                <div className="song-rightside">
                  <div className="song-dropdown">
                    <button id={song.title} className="dropdown-button" onClick={this.songDropdown}>...</button>
                    <div id={song.title + 1} className="dropdown-content">
                      <a id={song.id} onClick={this.removeSong} className="save-to-library">Remove from this Playlist</a>
                      <a id={song.id} onClick={this.saveSong} className="save-to-library">Save Song to Your Library</a>
                      <a id={song.albumId} onClick={this.saveAlbum} className="save-to-library">Save Album to Your Library</a>
                      {/* <a className="add-to-playlist">Add to Playlist</a> */}
                      <a id={song.id} className="remove-padding" onClick={this.currSong}>
                        <div onClick={() => this.props.openModal('add', song.id)}>
                          <div className="add-playlist">Add to Playlist</div>
                        </div>
                      </a>
                    </div>
                  </div>
{/* DURATION COLOR CHANGE */}
                  {(this.props.currentSong) ?
                    (this.props.currentSong.title === song.title) ? 
                      (<span className="song-duration-green">{song.duration}</span>) : 
                      (<span className="song-duration">{song.duration}</span>)
                      :
                      <span className="song-duration">{song.duration}</span>
                  }
{/* <span className="song-duration">{song.duration}</span> */}
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