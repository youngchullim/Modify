import React from 'react';
import { button, Link, NavLink } from 'react-router-dom';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';


class ShowAlbum extends React.Component {
  constructor(props) {
    super(props);
    
    this.toggleLibrary = this.toggleLibrary.bind(this);
    // this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.id);
  }

  // When clicked on Add/Remove 'album-library-add' class
  toggleLibrary() {
    document.getElementById("album-library").classList.toggle('album-library-add');
  }

  // handleMenuClick(e, data) {
  //   // console.log(data.foo);
  //   if (data.foo === "Add to Library") {
  //     // this.props.createSongsUser(this.props.user.id);
  //     console.log(this.props.user.id);
  //     console.log(e.currentTarget.data.id);
  //   }
  // }
  render() {
    let albumLibrary = "REMOVE FROM YOUR LIBRARY";
    // if (!library.includes(album.title)) {
    //   albumLibrary = "SAVE TO YOUR LIBRARY";
    // }

    if (!this.props.album) {
      return null;
    }
    return(
      <div className="albumshow-page">
        <div className="album-info">
          <div className="albumshow-photo-title">
            <img className="albumshow-photo" src={this.props.album.photo} />
            <div className="albumshow-title">{this.props.album.title}</div>
          </div>
          <NavLink className="albumshow-artistname-link" to={`/artists/${this.props.album.artist.id}`}>
            <span className="albumshow-artistname">{this.props.album.artist.name}</span>
          </NavLink> 
          <button className="album-play">PLAY</button>
          <div className="albumshow-info">
            <span className="album-year">{this.props.album.year}</span>
            <span className="album-split-dot">.</span>
            <span className="album-length">{this.props.album.songs.length} SONGS</span>
          </div>
          <div className="album-options">
            <div onClick={this.toggleLibrary} id="album-library" className="album-library">{albumLibrary}</div>
            <div className="album-playlist">...</div>
          </div>
        </div>

        <div className="album-songlist">
          <ul className="ul-album-songs">
            {this.props.album.songs.map( (song, idx) => (
              <li className="li-album-song" key={idx}>
                {/* <img className="white-music2" src={window.whiteMusic2} /> */}
                {/* <img className="white-play2" src={window.whitePlay2} /> */}
                <div className="albumshow-songtitle">{song.title}</div>
                <span className="song-duration">{song.duration}</span>
                {/* <ContextMenuTrigger id="song-menu">
                  <div className="album-playlist">...</div>
                </ContextMenuTrigger> */}
              </li>
            ))}
          </ul>
        </div>
        {/* <ContextMenu id="song-menu">
          <MenuItem data={{foo: 'Add to Library'}} onClick={this.handleMenuClick}>
            Add Song to Library
          </MenuItem>
          <MenuItem data={{foo: 'Add to Playlist'}} onClick={this.handleMenuClick}>
            Add Song to Playlist
          </MenuItem>
          <MenuItem divider />
          <MenuItem data={{foo: 'bar'}} onClick={this.handleMenuClick}>
            ContextMenu Item 3
          </MenuItem>
        </ContextMenu> */}
      </div>
    )
  }
}

export default ShowAlbum;