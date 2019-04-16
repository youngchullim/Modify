import React from 'react';
import { button, Link, NavLink } from 'react-router-dom';

class Song extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    return(
      <div className="songs-component">
        <ul className="ul-songs">
            {/* USED IMPLICIT RETURN ON MAP */}
          {this.props.songs.map( (song,idx) => (
            <li className="li-songs" key={idx}>
            <div>
              {/* <button className="song-play-button"></button> */}
              <span className="song-title">{song.title}</span>
              <br />
              <span><Link className="song-artist albumshow-artistname" to={`/artists/${song.artist.id}`}>{song.artist.name}</Link></span>
              <span className="split-dot">.</span>
              <span><Link className="song-album albumshow-artistname" to={`/albums/${song.album.id}`}>{song.album.title}</Link></span>
              <span className="song-duration">{song.duration}</span>
            </div>
              {/* <audio className="audio-songs" controls="controls" preload="auto">
                <source src={song.songUrl} />
              </audio> */}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Song