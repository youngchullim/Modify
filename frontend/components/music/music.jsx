import React from 'react';


class Music extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    // if (!this.props.song) {
    //   return null;
    // }
    return(
      <div className="music-player-container">
        <audio className="audio-music-player" src={this.props.currentSong} preload="auto">
          
        </audio>
      </div>
    )
  }
}

export default Music