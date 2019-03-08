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
      <div>
        <h1>{this.props.album.title}</h1>
        <div>ALBUM ALBUM ALBUM ALBUM ALBUM ALBUM ALBUM
        ALBUM ALBUM ALBUM ALBUM ALBUM ALBUM ALBUM ALBUM ALBUM
        ALBUM ALBUM ALBUM ALBUM ALBUM ALBUM ALBUM ALBUM ALBUM
        ALBUM ALBUM ALBUM ALBUM ALBUM ALBUM ALBUM ALBUM ALBUM
        </div>
      </div>
    )
  }
}

export default ShowAlbum;