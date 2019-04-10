import React from 'react';


class ShowArtist extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.id);
  }

  render() {
    if (!this.props.artist) {
      return null;
    }
    return(
      <div>
        <h1>{this.props.artist.title}</h1>
        <div>Artist Artist Artist Artist Artist Artist Artist
        Artist Artist Artist Artist Artist Artist Artist Artist Artist
        Artist Artist Artist Artist Artist Artist Artist Artist Artist
        Artist Artist Artist Artist Artist Artist Artist Artist Artist
        </div>
      </div>
    )
  }
}

export default ShowArtist;