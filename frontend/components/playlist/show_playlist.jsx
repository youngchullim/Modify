import React from 'react';


class ShowPlaylist extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.id);
  }

  render() {
    if (!this.props.playlist) {
      return null;
    }
    return(
      <div>
        <h1>{this.props.playlist.name}</h1>
        <div>PLAYLIST PLAYLIST PLAYLIST PLAYLIST PLAYLIST 
          PLAYLIST PLAYLIST PLAYLIST PLAYLIST PLAYLIST 
          PLAYLIST PLAYLIST PLAYLIST PLAYLIST PLAYLIST
          PLAYLIST PLAYLIST PLAYLIST PLAYLIST PLAYLIST</div>
      </div>
    )
  }
}

export default ShowPlaylist