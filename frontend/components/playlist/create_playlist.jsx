import React from 'react';


class CreatePlaylist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.createPlaylist({name: this.state.name}).then(this.props.closeModal);

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <button className="x-new-playlist" onClick={this.props.closeModal}>X</button>
          
          <h1 className="create-playlist-header">Create new playlist</h1>
          <div className="new-playlist-stripe">
            <label className="playlist-new">
            <div className="playlist-name-msg">Playlist Name</div>
              <input type="text"
                className="playlist-name-input"
                value={this.state.name}
                onChange={this.update('name')}
                placeholder="Start typing..."
              />
            </label>
          </div>
          <button className="playlist-cancel" onClick={this.props.closeModal}>CANCEL</button>
          <input className="playlist-create" type="submit" value="CREATE" />
        </form>
      </div>
    )
  }
}

export default CreatePlaylist