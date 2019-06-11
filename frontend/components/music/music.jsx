import React from 'react';
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';
import { button, Link, NavLink } from 'react-router-dom';

class Music extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songUrl: this.props.currentSong ? this.props.currentSong.songUrl : "",
      currentSong: this.props.currentSong,
      nextSong: this.props.nextSong,
      prevSong: this.props.prevSong,
      play: false,
      pause: true,
      duration: this.props.currentSong ? this.props.currentSong.duration : "",
      // currentTime: this.props.currentSong ? "0" : "",
      currentTime: 0,
      songsQueue: this.props.songsQueue,
      volume: 0.6,
      preVolume: 0.6,
      muted: false,
      seeking: false,
    };
    
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.saveSong = this.saveSong.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.handleMute = this.handleMute.bind(this);
    this.handleSlider = this.handleSlider.bind(this);
    this.onSeekMouseDown = this.onSeekMouseDown.bind(this);
    this.onSeekMouseUp = this.onSeekMouseUp.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.ref = this.ref.bind(this);
    //TEST
    // this.onDuration = this.onDuration.bind(this);
  }
  componentDidMount() {
    this.props.receiveCurrentSong(this.props.currentSong, this.props.nextSong, this.props.prevSong);
    // this.props.fetchSongsUsers(this.props.user.id);
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.currentSong !== this.props.currentSong) {
      this.setState({
        songUrl: this.props.currentSong.songUrl,
        currentSong: this.props.currentSong,
        nextSong: this.props.nextSong,
        prevSong: this.props.prevSong,
        play: this.props.play,
        pause: this.props.pause,
        duration: this.props.currentSong ? this.props.currentSong.duration : "",
        currentTime: 0,
        songsQueue: this.props.songsQueue,
      });
      this.props.receiveCurrentSong(this.props.currentSong, this.props.nextSong, this.props.prevSong);
    }
  }

  handlePlay() {
    if (this.state.play) {
      this.setState({
        play: false
      });
    } else {
      this.setState({
        play: true
      });
    }
  }

  handlePrev() {
    let currSongIdx;
    for (let i = 0; i < this.props.songsQueue.length; i++) {
      if (this.props.songsQueue[i].id === this.props.currentSong.id) {
        currSongIdx = i;
      }
    }

    let prevSongIdx;
    let newPrevSongIdx;
    if (currSongIdx === 0) {
      prevSongIdx = this.props.songsQueue.length - 1;
      newPrevSongIdx = this.props.songsQueue.length - 2;
    } else if (currSongIdx === 1) {
      prevSongIdx = currSongIdx - 1;
      newPrevSongIdx = this.props.songsQueue.length - 1;
    } else {
      prevSongIdx = currSongIdx - 1;
      newPrevSongIdx = currSongIdx - 2;
    }

    let prevSong = this.props.songsQueue[prevSongIdx];
    let newPrevSong = this.props.songsQueue[newPrevSongIdx];
    this.props.receiveCurrentSong(prevSong, this.state.currentSong, newPrevSong);
  }

  handleNext() {
    let currSongIdx;
    for (let i = 0; i < this.props.songsQueue.length; i++) {
      if (this.props.songsQueue[i].id === this.props.currentSong.id) {
        currSongIdx = i;
      }
    }

    let nextSongIdx;
    let newNextSongIdx;

    if (currSongIdx === this.props.songsQueue.length - 1) {
      nextSongIdx = 0;
      newNextSongIdx = 1;
    } else if (currSongIdx === this.props.songsQueue.length - 2) {
      nextSongIdx = currSongIdx + 1;
      newNextSongIdx = 0;
    } else {
      nextSongIdx = currSongIdx + 1;
      newNextSongIdx = currSongIdx + 2;
    }

    let nextSong = this.props.songsQueue[nextSongIdx];
    let newNextSong = this.props.songsQueue[newNextSongIdx];
    this.props.receiveCurrentSong(nextSong, newNextSong, this.props.currentSong);
  }

  saveSong() {
    this.props.createSongsUser(this.props.user.id, this.props.currentSong.id);
  }

  handleVolume(e) {
    let volume = parseFloat(e.target.value);
    this.setState({
      volume: volume,
      preVolume: volume
    });
  }

  handleMute() {
    if (this.state.muted) {
      this.setState({
        muted: !this.state.muted,
        volume: this.state.preVolume
      });
    } else {
      this.setState({
        muted: !this.state.muted,
        volume: 0
      });
    }
  }

  handleSlider(e) {
    this.setState({
      currentTime: Math.floor(e.target.value)
    });
  }

  onSeekMouseDown(e) {
    this.setState({
      seeking: true
    });
  }

  onSeekMouseUp(e) {
    this.setState({
      seeking: false
    });
    this.player.seekTo(Math.floor(e.target.value));
  }

  ref(player) {
    this.player = player;
  }

// TEST
  // onDuration(duration) {
  //   this.setState({duration});
  // }

  onProgress(state) {
    if (!this.state.seeking) {
      this.setState({currentTime: Math.ceil(state.playedSeconds)});
    }
  }
  
  render() {
    let play;
    if (this.state.play) {
      play = window.musicPlayerPause;
    } else {
      play = window.musicPlayerPlay;
    }

    let albumPhoto;
    let albumLink;
    let artistLink;

    if (this.state.currentSong) {
      albumPhoto = (<img className="currentSong-photo" src={this.props.currentSong.albumPhoto} />);
      albumLink = (<span><Link className="song-album albumshow-artistname currentSong-song-title" to={`/albums/${this.props.currentSong.album.id}`}>{this.props.currentSong.title}</Link></span>);
      artistLink = (<span><Link className="song-artist albumshow-artistname" to={`/artists/${this.props.currentSong.artist.id}`}>{this.props.currentSong.artist.name}</Link></span>);
    } else {
      albumPhoto = "";
      albumLink = "";
      artistLink = "";
    }

    let save;
// NOTE: filter through user's saved songs and if its already saved then show a green checkmark 
// else show a plus sign
    if (this.state.currentSong) {
      // if (this.props.songs.includes(this.props.currentSong)) {
      //   save = (<img className="musicPlayer-plus"src={window.musicPlayerCheck} />)
      // } else {
        save = (<img className="musicPlayer-plus"src={window.musicPlayerPlus} />)
      // }
    } else {
      save = "";
    }

// TEST
    let duration;
    if (this.props.currentSong) {
      duration = this.props.currentSong.duration;
    } else {
      duration = "";
    }
    let dur = duration.split(":");
    let min = parseInt(dur[0]) * 60
    let sec = parseInt(dur[1]);

    let total;
    if (this.props.currentSong) {
      total = min + sec;
    } else {
      total = "0"
    }

    let time;
    let currentTime;
    if (this.state.currentSong) {
      currentTime = parseInt(this.state.currentTime);
      let min = Math.floor(currentTime / 60);
      let sec = currentTime % 60;
      if (min < 10 && sec < 10) {
        time = "0" + min + ":" + "0" + sec;
      } else if (min < 10 && sec > 9) {
        time = "0" + min + ":" + sec;
      } else if (min > 10 && sec < 10) {
        time = min + ":" + "0" + sec;
      } else {
        time = min + ":" + sec;
      }
    }

    let sound;
    if (this.state.volume === 0 || this.state.muted) {
      sound = window.musicPlayerMute;
    } else {
      sound = window.musicPlayerSound;
    }

    return(
      <div className="music-player-container">
{/* MUSICPLAYER LEFT */}
        <div className="musicPlayer-flex">
          <div className="currentSong-info">
            {albumPhoto}
            <div className="musicPlayer-song-info">
              {albumLink}
              {artistLink}
            </div>
            <div className="musicPlayer-save" onClick={this.saveSong}>
              {save}
            </div>
          </div>
{/* MUSICPLAYER CENTER */}
          <div className="musicPlayer-controls">
            <div className="musicPlayer-buttons">
              <div className="prev-button" onClick={this.handlePrev}>
                <img className="musicPlayer-prev" src={window.musicPlayerPrev}/>
              </div>

              <div className="play-button" onClick={this.handlePlay}>
                <img className="musicPlayer-play" src={play}/>
              </div>

              <div className="prev-button" onClick={this.handleNext}>
                <img className="musicPlayer-prev" src={window.musicPlayerNext}/>
              </div>
            </div>

            <div className="musicPlayer-songBar">
              <div className="currentSong-time">{time}</div>

              <div className="musicPlayer-progressBar">
                <input 
                  id='audio-input'
                  className="progressBar-slider" 
                  type="range" 
                  min={0} 
                  max={total} 
                  step="any" 
                  onChange={this.handleSlider} 
                  value={this.state.currentTime} 
                  onMouseDown={this.onSeekMouseDown}
                  onMouseUp={this.onSeekMouseUp}
                />
                {/* <progress max={total} value={this.state.currentTime} /> */}
                {/* <div className="outer-bar">
                  <div className="inner-bar" style={{width: `${(this.state.currentTime*100/(this.state.duration || 1))}%`}}></div>
                </div> */}
              </div>
            
              <div className="currentSong-time">{this.state.duration}</div>
            </div>
          </div>
{/* MUSICPLAYER RIGHT */}
          <div className="musicPlayer-volume">
            <div className="volume-div">
              <div className="sound-button" onClick={this.handleMute}>
                <img className="musicPlayer-sound" src={sound} />
              </div>
              <input 
                id='valumeBar'
                className="volumeBar-slider" 
                type="range" 
                min={0} 
                max={1} 
                step="any" 
                onChange={this.handleVolume} 
                value={this.state.volume} 
              />
            </div>
          </div>
        </div>
        <ReactPlayer
          ref={this.ref}
          className="react-music-player"
          id="audio"
          url={this.state.songUrl}
          playing={this.state.play}
          onEnded={this.handleNext}
          // loop={false}
          volume={this.state.volume}
          muted={this.state.muted}
          onProgress={this.onProgress}
          // onDuration={this.onDuration}
          // progressInterval={this.state.curretTime}
        />
      </div>
    )
  }
}

export default Music