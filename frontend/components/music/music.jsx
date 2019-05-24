import React from 'react';
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';

class Music extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songUrl: this.props.currentSong ? this.props.currentSong.songUrl : "",
      currentSong: this.props.currentSong,
      nextSong: this.props.nextSong,
      prevSong: this.props.prevSong,
      play: this.props.play,
      pause: this.props.pause,
      duration: this.props.currentSong ? this.props.currentSong.duration : "",
      currentTime: this.props.currentSong ? "0:00" : "",
      songsQueue: this.props.songsQueue,
      volume: 0.6,
      muted: false,
    };
    
  }
  componentDidMount() {
    this.props.receiveCurrentSong(this.props.currentSong, this.props.nextSong, this.props.prevSong);
    
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

  render() {
    return(
      <div className="music-player-container">
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