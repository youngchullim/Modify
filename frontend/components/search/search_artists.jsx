import React from 'react';
import { button, Link, NavLink } from 'react-router-dom';

class SearchArtists extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let result;
    let artists = this.props.artists.filter(artist => artist.name.toLowerCase().includes(this.props.searchBar.toLowerCase()));

    if (this.props.searchBar !== "") {
      result = (
        <div className="search-artist-component">
          <ul className="ul-albums search-artists">
            {artists.map( (artist, idx) => (
              <li className="li-albums" key={idx}>
              <NavLink to={`/artists/${artist.id}`}>
                <img className="artist-photo" src={artist.artistPhoto} />
                <div className="album-name">{artist.name}</div>
              </NavLink>
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

export default SearchArtists