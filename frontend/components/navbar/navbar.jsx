import React from 'react';
import { butoon, Link, NavLink } from 'react-router-dom';


class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.state;
  }
  render() {
    let userArr = this.props.user.email.split("");
    let user = ""
    for(let i = 0; i < userArr.length; i++) {
      if (userArr[i] === "@") {
        break;
      } else {
        user += userArr[i];
      }
    }
    return (
      <div className="logged-in">

        {/* NAV BAR */}
        <ul className="side-nav-bar">
          <li className="nav-logo">
                {/* USED !IMPORTANT CSS RULE */}
            <NavLink className="logo-button" to="/home"> {/* logo button goes to HOME */}
              <img className="white-logo" src={window.whiteLogo} />
              <span className="white-modify">Modify</span>
            </NavLink>
          </li>
          {/* NEED IT TO HAVE A GREEN MARKER IF ON CURRENT TAB */}
          <li className="nav-home nav-tab">
                {/* USED !IMPORTANT CSS RULE */}
            <NavLink className="home-button button" activeClassName="selected-tab green-selected" to="/home"> 
              <img className="white-home-logo tab-icons" src={window.home}/>     
              <span className="white-home tabs">Home</span>
            </NavLink>
          </li>
          <li className="nav-search nav-tab">
                {/* USED !IMPORTANT CSS RULE */}
            <NavLink className="search-button button"  activeClassName="selected-tab green-selected" to="/search">
              <img className="white-search-logo tab-icons" src={window.search}/>      
              <span className="white-search tabs">Search</span>
            </NavLink>
          </li>
          <li className="nav-library nav-tab">
                {/* USED !IMPORTANT CSS RULE */}
            <NavLink className="library-button button"  activeClassName="selected-tab green-selected" to="/library"> 
              <img className="white-library-logo tab-icons" src={window.library}/>     
              <span className="white-library tabs">Your Library</span>
            </NavLink>
          </li>
          {/* @@@@@@@@@@@@@@@@@@@@ */}
          <li className="nav-profile">
                {/* USED !IMPORTANT CSS RULE */}
            <NavLink className="profile-button"  activeClassName="selected-profile" to="/profile">
              <img className="white-profile-logo"/>      {/* add image */}
              <span className="white-profile">{user}</span>
            </NavLink>
          </li>
          <li className="nav-logout">
            <a className="logout-button" role="button" onClick={this.props.logout}>
              <div className="logout-msg tabs">Log Out</div>
            </a>
          </li>
        </ul>
        
        {/* MUSIC PLAYER */}
        <footer className="music">
          <div className="music-player"></div>
        </footer>
      </div>
    )
  }
}

export default Navbar;