import React from 'react';
import { button, Link, NavLink } from 'react-router-dom';


class Playlist extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div className="all-playlists">
        <ul className="ul-playlist">
          {this.props.playlists.map ( (playlist, idx) => 
          <li key={idx} className="li-playlist">
            <NavLink to={`/library/${playlist.id}`}>
              <div className="playlist-photo"></div>
              <div className="playlist-name">{playlist.name}</div>
            </NavLink>
          </li>)}
        </ul>
      </div>
    )
  }
}

export default Playlist