import React from 'react';
import { button, Link, NavLink } from 'react-router-dom';


class ShowAlbum extends React.Component {
  constructor(props) {
    super(props);
    
    this.classChange = this.classChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.id);
  }

  // When clicked on Add/Remove 'album-library-add' class
  classChange() {
    document.getElementById("album-library").classList.toggle('album-library-add');
  }

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
            <div onClick={this.classChange} id="album-library" className="album-library">{albumLibrary}</div>
            <div className="album-playlist">...</div>
          </div>

        </div>

        <div className="album-songlist">
          <ul className="ul-album-songs">
            {this.props.album.songs.map( (song, idx) => (
              <li className="li-album-song" key={idx}>
                <div className="albumshow-songtitle">{song.title}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default ShowAlbum;