import React from 'react';
import { button, Link, NavLink } from 'react-router-dom';
import ShowAlbumContainer from './show_album_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

class AlbumsUser extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbumsUsers(this.props.user.id);
    // this.props.fetchAlbums();
  }

  render() {
    return(
      <div className="album-component">
        {/* <h1>Albums</h1> */}
{/* example how to send in props with a component */}
{/* <Route exact path="/mens" render={(props) => <Section {...props} gender={'Mens'}/> }/> */}
        <ul className="ul-albums">
          {this.props.albums.map( (album, idx) => (
            <li className="li-albums" key={idx}>
            <NavLink to={`/albums/${album.id}`}>
{/* <ProtectedRoute path="/albums/:id" render={(props) => <ShowAlbumContainer {...props} album={album}/> }/> */}
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

export default AlbumsUser