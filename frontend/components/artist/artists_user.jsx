import React from 'react';
import { button, Link, NavLink } from 'react-router-dom';

class ArtistsUser extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchArtistsUsers(this.props.user.id);
    
    // TEST
    // this.props.fetchArtists();
  }
  
  render() {
    return(
      <div className="album-component">
        <ul className="ul-albums">
          {this.props.artists.map( (artist, idx) => (
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
}

export default ArtistsUser