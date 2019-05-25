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
      currentTime: this.props.currentSong ? "0:00" : "",
      songsQueue: this.props.songsQueue,
      volume: 0.6,
      muted: false,
    };
    
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.saveSong = this.saveSong.bind(this);
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
        currentTime: this.props.currentSong ? "0:00" : "",
        songsQueue: this.props.songsQueue,
      })
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
    // filter through user's saved songs and if its already saved then show a green checkmark 
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

    return(
      <div className="music-player-container">
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
          </div>
          <div className="musicPlayer-volume">
            TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST 
          </div>
        </div>
        {/* <p>
          <input ref={(slider) => { this.slider = slider }}
					type="range"
					name="points"
					min="0" max={this.state.duration} /> 
        </p> */}
        {/* <progress 
          pseudo='-webkit-progress-bar'
          className='progress-bar-display' 
          max={1} 
          value={10} 
        /> */}
        <ReactPlayer
          className="react-music-player"
          url={this.state.songUrl}
          playing={this.state.play}
          // controls={true}
          // light={true}
          onEnded={this.handleNext}
          // loop={false}
          volume={this.state.volume}
          muted={this.state.muted}
          width='60%'
          height='0%'
        />
      </div>
    )
  }
}

export default Music