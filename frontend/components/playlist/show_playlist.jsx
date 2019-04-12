import React from 'react';


class ShowPlaylist extends React.Component {
  constructor(props) {
    super(props);

    this.toggleLibrary = this.toggleLibrary.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.id);
    this.props.fetchSongs();
  }

  // When clicked on Add/Remove 'album-library-add' class
  toggleLibrary() {
    document.getElementById("playlist-library").classList.toggle('playlist-library-add');
  }

  render() {
    let playlistLibrary = "REMOVE FROM YOUR LIBRARY";
    // if (!library.includes(playlist.name)) {
    //   playlistLibrary = "SAVE TO YOUR LIBRARY";
    // }

    if (!this.props.playlist) {
      return null;
    }
    return(
      <div className="playlistShow-component">
        <div className="playlistShow-info">
          <div className="playlistShow-photo-title">
            <div className="playlistShow-photo"></div>
            <div className="playlistShow-title">{this.props.playlist.name}</div>
          </div>
          <button className="album-play">PLAY</button>
          <div className="playlistShow-songLength">{this.props.songs.length} SONGS</div>

          <div className="playlist-options">
            <div onClick={this.toggleLibrary} id="playlist-library" className="playlist-library">{playlistLibrary}</div>
{/* wont need for playlist */}
            {/* <div className="playlistShow-options">...</div> */}
          </div>
        </div>
        
        <div className="playlistShow-songs">
        
        </div>
      </div>
    )
  }
}

export default ShowPlaylist