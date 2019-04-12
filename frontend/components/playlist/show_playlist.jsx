import React from 'react';


class ShowPlaylist extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.id);
    this.props.fetchSongs();
  }

  render() {
    if (!this.props.playlist) {
      return null;
    }
    return(
      <div className="playlistShow-component">
        <div className="playlistShow-info">
          <div className="playlistShow-photo"></div>
          <div>{this.props.playlist.name}</div>
          <button className="album-play">PLAY</button>
          <div className="playlistShow-songLength">{this.props.songs.length} SONGS</div>
          <div className="playlistShow-options">...</div>
        </div>
        
        <div className="playlistShow-songs">
        
        </div>
      </div>
    )
  }
}

export default ShowPlaylist