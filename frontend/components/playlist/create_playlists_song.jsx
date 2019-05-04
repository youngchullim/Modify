import React from 'react';


class CreatePlaylistsSong extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   name: ""
    // };

    // this.handleSubmit = this.handleSubmit.bind(this);
    this.addSong = this.addSong.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchPlaylists();
  }

  addSong(e) {
    let playlistId = e.currentTarget.id;
    let songId = this.props.songId;
    // console.log(playlistId);
    // console.log(e.currentTarget);
    // console.log(this.props.songId);
    this.props.createPlaylistsSong(playlistId, songId);
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.createPlaylist({name: this.state.name}).then(this.props.closeModal);

  // }

  // update(field) {
  //   return e => this.setState({
  //     [field]: e.currentTarget.value
  //   });
  // }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <button className="x-new-playlist" onClick={this.props.closeModal}>X</button>
          <h1 className="create-playlist-header">Add to Playlist</h1>

          <div className="all-playlists">
            <ul className="ul-playlist">
              {this.props.playlists.map ( (playlist, idx) => (
              <li key={idx} className="li-playlist">
                <div id ={playlist.id} className="add-to-playlist" onClick={this.addSong}>
                  <div className="playlist-photo"></div>
                  <div className="playlist-name">{playlist.name}</div>
                </div>
              </li>))}
            </ul>
          </div>

          <button className="playlist-cancel" onClick={this.props.closeModal}>CANCEL</button>
          <span>{this.props.openModal}</span>
        </form>
      </div>
    )
  }
}

export default CreatePlaylistsSong