import React from 'react';

    // CLASS COMPONENT 
    //    - comment in (render) if class
    //    - need (this.props) when using user or logout

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.state;
  }
    // FUNCTIONAL COMPONENT 
    //    - comment out (render) if functional 
    //    - dont need (this.props) when calling user or logout
// const Navbar = ( {user, logout} ) => {
  render() {
    return (
      <div className="logged-in">

        {/* NAV BAR */}
        <ul className="side-nav-bar">
          <li className="nav-logo">
            <a className="logo-button" role="button" href="/"> {/* logo button goes to HOME */}
              <img className="white-logo" src={window.whiteLogo} />
              <span className="white-modify">Modify</span>
            </a>
          </li>
          {/* MIGHT HAVE TO CHANGE TO BUTTONS */}
          {/* NEED IT TO HAVE A GREEN MARKER IF ON CURRENT TAB */}
          <li className="nav-home nav-tab">
            <a className="home-button button" role="button" href="/"> {/* href to where??  HOME + LOGO = SAME PLACE*/} 
              <img className="white-home-logo tab-icons" src={window.home}/>       {/* add image */}
              <span className="white-home tabs">Home</span>
            </a>
          </li>
          <li className="nav-search nav-tab">
            <a className="search-button button" role="button" href="/"> {/* href to where?? */}
              <img className="white-search-logo tab-icons" src={window.search}/>       {/* add image */}
              <span className="white-search tabs">Search</span>
            </a>
          </li>
          <li className="nav-library nav-tab">
            <a className="library-button button" role="button" href="/"> {/* href to where?? */}
              <img className="white-library-logo tab-icons" src={window.library}/>      {/* add image */}
              <span className="white-library tabs">Your Library</span>
            </a>
          </li>
          {/* @@@@@@@@@@@@@@@@@@@@ */}
          <li className="nav-profile">
            <a className="profile-button" role="button" href="/"> {/* href to where?? */}
              <img className="white-profile-logo"/>      {/* add image */}
              <span className="white-profile">{this.props.user.email}</span>
            </a>
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