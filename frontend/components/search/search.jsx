import React from 'react';
import { butoon, Link, NavLink } from 'react-router-dom';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.state;
  }

  

  render() {
    let userArr = this.props.user.email.split("");
    let user = "";
    for(let i = 0; i < userArr.length; i++) {
      if (userArr[i] === "@") {
        break;
      } else {
        user += userArr[i];
      }
    }
    return(
      <div className="navbar-search">
        <label className="search-bar">
          <input type="text"
            className="search-input"
            // value={}
            // onClick={}
            placeholder="Start typing..."
            />
        </label>
        <div className="search-content">
          <h2 className="search-title">Search Modify</h2>
          <div className="search-msg">Find your favorite songs, albums, artists, and playlists</div>
        </div>
      </div>
    )
  }
}

export default Search;