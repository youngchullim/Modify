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
    this.props.fetchSongs();
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
    let songs = this.props.songs.filter(song => song.title.toLowerCase().includes(this.props.searchBar.toLowerCase()));
    songs = songs.slice(0,5);
    
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
    let songs = this.props.songs.filter(song => song.title.toLowerCase().includes(this.props.searchBar.toLowerCase()));
    songs = songs.slice(0,5);


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
    let result;
    let songs = this.props.songs.filter(song => song.title.toLowerCase().includes(this.props.searchBar.toLowerCase()));
    songs = songs.slice(0,5);

    let artists = this.props.artists.filter(artist => artist.name.toLowerCase().includes(this.props.searchBar.toLowerCase()));
    artists = artists.slice(0,10);

    let albums = this.props.albums.filter(album => album.title.toLowerCase().includes(this.props.searchBar.toLowerCase()));
    albums = albums.slice(0,10);

    let musicPlay = (<img className="music-icon" src={window.whitePlay2}/>);
    let musicNote = (<img className="music-icon" src={window.whiteMusic2}/>);

    if (this.props.searchBar !== "") {
      result = (
        <div className="search-results" onClick={this.closeDropdown}>

{/* SONGS */}
          <h1 className="top-result-tabs">Songs</h1>
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
                        (<div className="song-title-green">{song.title}</div>) : 
                        (<div className="song-title">{song.title}</div>)
                      :
                      (<div className="song-title">{song.title}</div>)
                    }
{/* <div className="song-title">{song.title}</div> */}
                    <span><Link className="song-artist albumshow-artistname" to={`/artists/${song.artist.id}`}>{song.artist.name}</Link></span>
                    <span className="split-dot">.</span>
                    <span><Link className="song-album albumshow-artistname" to={`/albums/${song.album.id}`}>{song.album.title}</Link></span>
                  </div>
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