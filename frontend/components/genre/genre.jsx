import React from 'react';
import { button, Link, NavLink } from 'react-router-dom';

class Genre extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      genre: [],
      songs: this.props.songs,
    };

  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    let genre = this.props.songs.filter (song => song.genre);
    for (let i  = 0; i < genre.length; i++) {
      if (!this.state.genre.includes(genre[i].genre)) {
        this.state.genre.push(genre[i].genre);
      }
    }
    return(
      <div className="all-playlists">
        {/* <h1>Genre 1</h1> */}
        <ul className="ul-playlist">
                  {/* ADD implicit return () */}
          {this.state.genre.map ( (genre, idx) => (
          <li key={idx} className="li-playlist">
            <NavLink to={`/genre/${genre}`}>
              <div className="playlist-photo"></div>
              <div className="playlist-name">{genre}</div>
            </NavLink>
          </li>))}
        </ul>
      </div>
    )
  }
}

export default Genre