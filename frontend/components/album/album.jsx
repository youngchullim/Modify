// NOT BEING USED

import React from 'react';
import { button, Link, NavLink } from 'react-router-dom';


class Album extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    return(
      <div className="album-component">
        {/* <h1>Albums</h1> */}

        <ul className="ul-albums">
          {this.props.albums.map( (album, idx) => (
            <li className="li-albums" key={idx}>
            <NavLink to={`/albums/${album.id}`}>
              <img className="album-photo" src={album.albumPhoto} />
              {/* <img className="album-photo" src={album.photo} /> */}
              <div className="album-name">{album.title}</div>
            </NavLink>
              <div><Link className="album-artist albumshow-artistname" to={`/artists/${album.artist.id}`}>{album.artist.name}</Link></div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Album