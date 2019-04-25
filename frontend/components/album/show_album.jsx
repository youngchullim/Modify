import React from 'react';
import { button, Link, NavLink } from 'react-router-dom';


class ShowAlbum extends React.Component {
  constructor(props) {
    super(props);


// COULDN'T GET INITIAL STATE TO SHOW DEPENING ON IF ALBUM ALREADY SAVED TO LIBRARY
    // this.state = {
    //   albumLibrary: "REMOVE FROM YOUR LIBRARY",
    // };
    
    this.toggleLibrary = this.toggleLibrary.bind(this);
    this.songDropdown = this.songDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.saveSong = this.saveSong.bind(this);
    // this.removeAlbum = this.removeAlbum.bind(this);
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.albumId);


// TRYING TO SHOW EITHER "REMOVE" OR "SAVE" IF CURRENT ALBUM IS ALREADY SAVED TO LIBRARY
    // if(this.props.album.albumsUsers.length > 0) {
    //   this.setState({
    //     albumLibrary: "REMOVE FROM YOUR LIBRARY"
    //   });
    // } else {
    //   this.setState({
    //     albumLibrary: "SAVE TO YOUR LIBRARY"
    //   });
    // }
  }

  // When clicked on Add/Remove 'album-library-add' class
  toggleLibrary() {
    document.getElementById("album-library").classList.toggle('album-library-add');
  }

  songDropdown(e) {
    let songName = e.target.id + 1;
    document.getElementById(songName).classList.toggle("show");
  }

  closeDropdown(e) {
    let songName = e.target.id + 1;
    
    if (!e.target.matches('.dropdown-button')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    } else {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.id === songName) {
          continue;
        } else if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  saveSong(e) {
    let songId = e.target.id;
    let albumId = this.props.album.id;
    this.props.createSongsUser(this.props.user.id, songId);
    this.props.createAlbumsUser(this.props.user.id, albumId);
  }


// DECIDED TO JUST GO WITH DROPDOWN MENU WITH BOTH SAVE AND REMOVE 
//INSTEAD OF ONLY SHOWING ONE DEPENING ON IF ALBUM IS SAVED TO LIBRARY
  // removeAlbum(e) {
  //   if(this.props.album.albumsUsers.length > 0) {
  //     if(this.props.album[this.props.albumId]) {
  //       let albumsUsers = Object.values(this.props.album.albumsUsers).filter(albumUser => albumUser.user_id === this.props.user.id);

  //       for (let i = 0 ; i < albumsUsers.length; i++) {
  //         let user = albumsUsers[i];
  //         this.props.deleteAlbumsUser(user.id);
  //       }
  //     }
  //     this.setState({
  //       albumLibrary: "SAVE TO YOUR LIBRARY"
  //     });

  //   } else {
  //     let albumId = this.props.album.id;
  //     this.props.createAlbumsUser(this.props.user.id, albumId);

  //     this.setState( {
  //       albumLibrary: "REMOVE FROM YOUR LIBRARY"
  //     });
  //   }
  // }

  render() {

    if (!this.props.album) {
      return null;
    }
    return(
      <div className="albumshow-page" onClick={this.closeDropdown}>
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
            {/* <div onClick={this.toggleLibrary}>
              <div onClick={this.removeAlbum} id="album-library" className="album-library">{this.state.albumLibrary}</div>
            </div> */}
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

                <div className="song-rightside">
                  <div className="song-dropdown">
                    <button id={song.title} className="dropdown-button" onClick={this.songDropdown}>...</button>
                    <div id={song.title + 1} className="dropdown-content">
                      <a id={song.id} onClick={this.saveSong} className="save-to-library">Save to Your Library</a>
                      <a className="add-to-playlist">Add to Playlist</a>
                    </div>
                  </div>
                  <span className="song-duration">{song.duration}</span>
                </div>
                
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default ShowAlbum;