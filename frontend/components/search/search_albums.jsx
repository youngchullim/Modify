import React from 'react';
import { button, Link, NavLink } from 'react-router-dom';

class SearchAlbums extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let result;
    let albums = this.props.albums.filter(album => album.title.toLowerCase().includes(this.props.searchBar.toLowerCase()));

    if (this.props.searchBar !== "") {
      result = (
        <div className="search-artist-component">
          <ul className="ul-albums search-artists">
            {albums.map( (album, idx) => (
              <li className="li-albums" key={idx}>
              <NavLink to={`/albums/${album.id}`}>
                <img className="album-photo" src={album.albumPhoto} />
                <div className="album-name">{album.title}</div>
              </NavLink>
                <div><Link className="album-artist albumshow-artistname" to={`/artists/${album.artist.id}`}>{album.artist.name}</Link></div>
              </li>
            ))}
          </ul>
        </div>
      )
    }
    return(
      <div>
        {result}
      </div>
    )
  }
}

export default SearchAlbums