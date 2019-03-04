import React from 'react';
import { butoon, Link, NavLink } from 'react-router-dom';


class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.state;
  }
  render() {
    return (
      <div className="logged-in">

        {/* NAV BAR */}
        <ul className="side-nav-bar">
          <li className="nav-logo">
                {/* USED !IMPORTANT CSS RULE */}
            <NavLink className="logo-button" activeStyle={{}} activeClassName="selected-tab" to="/home"> {/* logo button goes to HOME */}
              <img className="white-logo" src={window.whiteLogo} />
              <span className="white-modify">Modify</span>
            </NavLink>
          </li>
          {/* MIGHT HAVE TO CHANGE TO BUTTONS */}
          {/* NEED IT TO HAVE A GREEN MARKER IF ON CURRENT TAB */}
          <li className="nav-home nav-tab">
                {/* USED !IMPORTANT CSS RULE */}
            <NavLink className="home-button button" activeClassName="selected-tab green-selected" to="/home"> {/* href to where??  HOME + LOGO = SAME PLACE*/} 
              <img className="white-home-logo tab-icons" src={window.home}/>       {/* add image */}
              <span className="white-home tabs">Home</span>
            </NavLink>
          </li>
          <li className="nav-search nav-tab">
                {/* USED !IMPORTANT CSS RULE */}
            <NavLink className="search-button button"  activeClassName="selected-tab green-selected" to="/search"> {/* href to where?? */}
              <img className="white-search-logo tab-icons" src={window.search}/>       {/* add image */}
              <span className="white-search tabs">Search</span>
            </NavLink>
          </li>
          <li className="nav-library nav-tab">
                {/* USED !IMPORTANT CSS RULE */}
            <NavLink className="library-button button"  activeClassName="selected-tab green-selected" to="/library"> {/* href to where?? */}
              <img className="white-library-logo tab-icons" src={window.library}/>      {/* add image */}
              <span className="white-library tabs">Your Library</span>
            </NavLink>
          </li>
          {/* @@@@@@@@@@@@@@@@@@@@ */}
          <li className="nav-profile">
                {/* USED !IMPORTANT CSS RULE */}
            <NavLink className="profile-button"  activeClassName="selected-profile" to="/profile"> {/* href to where?? */}
              <img className="white-profile-logo"/>      {/* add image */}
              <span className="white-profile">{this.props.user.email}</span>
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