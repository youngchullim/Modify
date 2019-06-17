import React from 'react';
import { button, Link, NavLink } from 'react-router-dom';


class ShowAlbum extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: this.props.songs,
      song: 0,
      mouseHover: false,
      mouseIdx: null,
    };


    this.toggleLibrary = this.toggleLibrary.bind(this);
    this.songDropdown = this.songDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.saveSong = this.saveSong.bind(this);
    this.removeAlbum = this.removeAlbum.bind(this);
    this.saveAlbum = this.saveAlbum.bind(this);
    this.currSong = this.currSong.bind(this);

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
    this.props.fetchAlbum(this.props.albumId);
    this.props.fetchSongs();

// TRYING TO SHOW EITHER "REMOVE" OR "SAVE" IF CURRENT ALBUM IS ALREADY SAVED TO LIBRARY
    // if(this.props.album.albumsUsers.length > 0) {
    //   this.setState({
    //     albumLibrary: "REMOVE FROM YOUR LIBRARY"
    //   });
    // } else {
    //   this.setState({
    //     albumLibrary: "SAVE TO YOUR LIBRARY"
    //   });
    // }
  }

  // When clicked on Add/Remove 'album-library-add' class
  toggleLibrary() {
    document.getElementById("album-library").classList.toggle('album-library-add');
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

  saveSong(e) {
    let songId = e.target.id;
    let albumId = this.props.album.id;
    this.props.createSongsUser(this.props.user.id, songId);
    this.props.createAlbumsUser(this.props.user.id, albumId);
  }

  saveAlbum(e) {
    let albumId = this.props.album.id;
    this.props.createAlbumsUser(this.props.user.id, albumId);
  }

  removeAlbum(e) {
    if(this.props.album[this.props.albumId]) {
      let albumsUsers = Object.values(this.props.album.albumsUsers).filter(albumUser => albumUser.user_id === this.props.user.id);

      for (let i = 0 ; i < albumsUsers.length; i++) {
        let user = albumsUsers[i];
        this.props.deleteAlbumsUser(user.id);
      }
    }
  }

  currSong(e) {
    this.props.receiveCurrentSongId(parseInt(e.currentTarget.id));
  }

// DECIDED TO JUST GO WITH DROPDOWN MENU WITH BOTH SAVE AND REMOVE 
//INSTEAD OF ONLY SHOWING ONE DEPENING ON IF ALBUM IS SAVED TO LIBRARY
  // removeAlbum(e) {
  //   if(this.props.album.albumsUsers.length > 0) {
  //     if(this.props.album[this.props.albumId]) {
  //       let albumsUsers = Object.values(this.props.album.albumsUsers).filter(albumUser => albumUser.user_id === this.props.user.id);

  //       for (let i = 0 ; i < albumsUsers.length; i++) {
  //         let user = albumsUsers[i];
  //         this.props.deleteAlbumsUser(user.id);
  //       }
  //     }
  //     this.setState({
  //       albumLibrary: "SAVE TO YOUR LIBRARY"
  //     });

  //   } else {
  //     let albumId = this.props.album.id;
  //     this.props.createAlbumsUser(this.props.user.id, albumId);

  //     this.setState( {
  //       albumLibrary: "REMOVE FROM YOUR LIBRARY"
  //     });
  //   }
  // }


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
    let songs = this.props.songs.filter(s => s.album.id === song.album.id);
    
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
    let songs = this.props.songs.filter(s => s.album.id === song.album.id);


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

  playAll(e) {
    let song = this.props.songs.filter( s => s.album.title === e.currentTarget.id)[0];
    let songs = this.props.songs.filter( s => s.album.title === e.currentTarget.id);

    this.props.receivePlay(song, songs);
  }


  render() {

    if (!this.props.album) {
      return null;
    }

    let musicPlay = (<img className="music-icon" src={window.whitePlay2}/>);
    let musicNote = (<img className="music-icon" src={window.whiteMusic2}/>);

    return(
      <div className="albumshow-page" onClick={this.closeDropdown}>
        <div className="album-info">
          <div className="albumshow-photo-title">
            <img className="albumshow-photo" src={this.props.album.albumPhoto} />
            <div className="albumshow-title">{this.props.album.title}</div>
          </div>
          <NavLink className="albumshow-artistname-link" to={`/artists/${this.props.album.artist.id}`}>
            <span className="albumshow-artistname">{this.props.album.artist.name}</span>
          </NavLink> 
          <button className="album-play" id={this.props.album.title} onClick={this.playAll}>PLAY</button>
          <div className="albumshow-info">
            <span className="album-year">{this.props.album.year}</span>
            <span className="album-split-dot">.</span>
            <span className="album-length">{this.props.album.songs.length} SONGS</span>
          </div>
          <div className="album-options">
            {/* <div onClick={this.toggleLibrary}>
              <div onClick={this.removeAlbum} id="album-library" className="album-library">{this.state.albumLibrary}</div>
            </div> */}
            <div className="song-dropdown">
              <button id={this.props.album.title} className="album-playlist dropdown-button" onClick={this.songDropdown}>...</button>
              <div id={this.props.album.title + 1} className="dropdown-content">
                <a id={this.props.album.id} onClick={this.saveAlbum} className="save-to-library">Save to Your Library</a>
                <a id={this.props.album.id} onClick={this.removeAlbum} className="save-to-library">Remove from Your Library</a>
{/* BONUS: NEED TO BE ABLE TO ADD ALL THE SONGS IN ALBUM TO PLAYLIST */}
                {/* <a className="add-to-playlist">Add to Playlist</a> */}
              </div>
            </div>
          </div>
        </div>

        <div className="album-songlist">
          <ul className="ul-album-songs">
            {this.props.album.songs.map( (song, idx) => (
              <li 
                className="li-album-song" 
                id={song.title} 
                key={idx} 
                value={idx}
                onMouseEnter={this.mouseEnter(idx)} 
                onMouseLeave={this.mouseLeave()} 
                onDoubleClick={this.changeIcon} >
                {/* <img className="white-music2" src={window.whiteMusic2} /> */}
                {/* <img className="white-play2" src={window.whitePlay2} /> */}
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
                  </div>
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

export default ShowAlbum;