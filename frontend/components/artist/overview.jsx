import React from 'react';
import { button, Link, NavLink } from 'react-router-dom';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: this.props.artist.songs,
      song: 0,
      albums: this.props.artist.albums
    };

    this.songDropdown = this.songDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.removeSong = this.removeSong.bind(this);
    this.addSongState = this.addSongState.bind(this);
    this.saveSong = this.saveSong.bind(this);

  // MUSIC PLAY
    this.changeIcon = this.changeIcon.bind(this);
    this.playSong = this.playSong.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.currentSongIdx = this.currentSongIdx.bind(this);
    this.play = this.play.bind(this);
    // this.changeDuration = this.changeDuration.bind(this);
    // this.changeTitle = this.changeTitle.bind(this);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.artistId);
    this.props.fetchSongs();
    
// had to switch to be able to play songs that weren't in currentUsers 'followed' songs
    // this.props.fetchSongsUsers(this.props.user.id);
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

  saveSong(e) {
    let songId = e.target.id;
    // let albumId = this.props.album.id;
    this.props.createSongsUser(this.props.user.id, songId);
    // this.props.createAlbumsUser(this.props.user.id, albumId);
  }

  addSongState(e) {
    let songId = e.currentTarget.id;
    this.setState({
      song: parseInt(songId)
    });
    // console.log(e.currentTarget.id);
    this.props.receiveCurrentSongId(parseInt(e.currentTarget.id));
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
    let songs = this.props.songs.filter(s => s.artist.id === song.artist.id);
    
    this.props.receiveSongsQueue(songs);
    let songIdx = this.currentSongIdx(songs,song);

    let prev;
    let next;
    if (songIdx === 0 && songs.length === 1) {
      next = songs[0];
      prev = songs[0];
    } else if (songIdx === 0) {
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
    let songs = this.props.songs.filter(s => s.artist.id === song.artist.id);

    if (music === music2 && this.props.play) {
      // music2.pause();
      this.props.receivePause(song, songs);
    } else {
      this.props.receivePlay(song, songs);
      // this.handlePlay(music2);
      if (music && music !== music2) {
        // this.handleStop(music);
      }
    }
  }

  currentSongIdx(songs, song) {
    for (let i = 0; i < songs.length; i++) {
      if (songs[i].title === song.title) {
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

  render() {
    let songs = this.props.artist.songs.filter(song => song.title);
    return(
      <div className="over-component" onClick={this.closeDropdown}>
        <h1 className="popular-tab">Popular</h1>
        <div className="songs-component no-padding">
          <ul className="ul-songs">
              {/* USED IMPLICIT RETURN ON MAP */}
            {songs.map( (song,idx) => (
              <li 
                className="li-songs" 
                id={song.title} 
                key={idx} 
                value={idx}
                onMouseEnter={this.mouseEnter(idx)} 
                onMouseLeave={this.mouseLeave()} 
                onDoubleClick={this.changeIcon} >
                <div className="song-index">
                  {/* <button className="song-play-button"></button> */}
                  <div className="left-song">
{/* TITLE COLOR CHANGE */}
                {(this.props.currentSong) ?
                    (this.props.currentSong.title === song.title) ? 
                      (<span className="song-title-green">{song.title}</span>) : 
                      (<span className="song-title">{song.title}</span>)
                      :
                      (<span className="song-title">{song.title}</span>)
                  }
{/* <span className="song-title">{song.title}</span> */}
                    
                    {/* <span><Link className="song-artist albumshow-artistname" to={`/artists/${song.artist.id}`}>{song.artist.name}</Link></span>
                    <span className="split-dot">.</span>
                    <span><Link className="song-album albumshow-artistname" to={`/albums/${song.album.id}`}>{song.album.title}</Link></span> */}
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
                </div>
                {/* <audio className="audio-songs" controls="controls" preload="auto">
                  <source src={song.songUrl} />
                </audio> */}
              </li>
            ))}
          </ul>
        </div>
        <h1 className="popular-tab">Albums</h1>
        <div className="album-component no-flex">
          <ul className="ul-albums">
            {this.props.artist.albums.map( (album, idx) => (
              <li className="li-albums" key={idx}>
              <NavLink to={`/albums/${album.id}`}>
                <img className="album-photo" src={album.photo} />
                <div className="album-name">{album.title}</div>
              </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Overview