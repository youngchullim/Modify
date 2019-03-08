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
        <h1>Albums</h1>

        <ul className="ul-albums">
          {this.props.albums.map( (album, idx) => (
            <li className="li-albums" key={idx}>
            <NavLink to={`/library/albums/${album.id}`}>
              <img className="album-photo" src={album.photo} />
              <div className="album-name">{album.title.slice(0,20)}</div>
              <div className="album-artist">{album.artist.name}</div>
            </NavLink>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Album