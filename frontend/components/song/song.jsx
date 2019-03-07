import React from 'react';


class Song extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    // debugger
    this.props.fetchSongs();
  }

  render() {
    // debugger
    return(
      <div>
        <h1>Songs</h1>
        <ul className="ul-songs">
            {/* USED IMPLICIT RETURN ON MAP */}
          {this.props.songs.map( (song,idx) => (
            <li className="li-songs" key={idx}>
            <button></button>
            <span>{song.title}</span>
            <span>{song.artist}</span>
            {/* <span>{song.album.title}</span> */}
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