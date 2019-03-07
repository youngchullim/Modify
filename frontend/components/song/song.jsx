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
      <div className="songs-component">
        <ul className="ul-songs">
            {/* USED IMPLICIT RETURN ON MAP */}
          {this.props.songs.map( (song,idx) => (
            <li className="li-songs" key={idx}>
            <div>
              <button className="song-play-button"></button>
              <span className="song-title">{song.title}</span>
              <br />
              <span className="song-artist">{song.artist.name}</span>
              <span className="split-dot">.</span>
              <span className="song-album">{song.album.title}</span>
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