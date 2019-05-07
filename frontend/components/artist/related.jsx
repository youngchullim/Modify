import React from 'react';
import { button, Link, NavLink } from 'react-router-dom';

class RelatedArtist extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchArtists();
  }
  
  render() {
    let artists = this.props.artists.filter(artist => artist.genre === this.props.artist.genre);
    return(
      <div className="album-component related-artists">
        <ul className="ul-albums">
          {artists.map( (artist, idx) => (
            <li className="li-albums" key={idx}>
            <NavLink to={`/artists/${artist.id}`}>
              <img className="artist-photo" src={artist.photo} />
              <div className="album-name">{artist.name}</div>
            </NavLink>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default RelatedArtist