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
        <div className="album-info">
          <img className="albumshow-photo" src={this.props.album.photo} />
          <div className="albumshow-title">{this.props.album.title}</div>
          <div className="albumshow-artistname">{this.props.album.artist.name}</div>
          <button className="album-play">Play</button>
          <div className="albumshow-info">
            <span className="album-year">{this.props.album.year}</span>
            <span className="split-dot">.</span>
            <span className="album-length">{this.props.album.songs.length}</span>
          </div>

        </div>

        <div className="album-songlist">
          <ul className="ul-album-songs">
            {this.props.album.songs.map( (song, idx) => (
              <li className="li-album-song" key={idx}>
                <div className="albumshow-songtitle">{song.title}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default ShowAlbum;