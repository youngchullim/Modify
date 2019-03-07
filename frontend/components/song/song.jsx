import React from 'react';


class Song extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    return(
      <div>
        <h1>Songs</h1>
        <ul className="ul-songs">
            {/* USED IMPLICIT RETURN ON MAP */}
          {this.props.songs.map( (song,idx) => (
            <li className="li-songs" key={idx}>
            <button></button>
            <span className="song-title">{song.title}</span>
            <span className="song-artist">{song.artist.name}</span>
            <span className="song-album">{song.album.title}</span>
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