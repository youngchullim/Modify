import React from 'react';


class ShowAlbum extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.id);
  }

  render() {
    if (!this.props.album) {
      return null;
    }
    return(
      <div className="albumshow-page">
        {/* <h1>{this.props.album.title}</h1> */}
        <div>
          <img className="albumshow-photo" src={this.props.album.photo} />
          <ul className="ul-album-songs">
            {this.props.album.songs.map( (song, idx) => (
              <li className="li-album-song" key={idx}>
                <div>{song.title}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default ShowAlbum;