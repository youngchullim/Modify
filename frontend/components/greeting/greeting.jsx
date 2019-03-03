import React from 'react';
import Navbar from '../navbar/navbar';
import { Link } from 'react-router-dom';

const Greeting = ({ user, logout }) => {
  const sessionLinks = () => {
    return(
      <div className="pre-login">
        <ul className="pre-nav">
          <li className="pre-home-wrapper">
            <a className="pre-logo-button" role="button" href="/">
              <img className="pre-white-logo" src={window.whiteLogo} />
              <span className="pre-white-modify">Modify</span>
            </a>
          </li>
          <li className="pre-signup-wrapper">
            <a className="pre-signup" role="button" href="#/signup">Sign up</a>
          </li>
          <li className="pre-login-wrapper">
            <a className="pre-login-button" role="button" href="#/login">
              <p className="login-back">Log In</p>
            </a>
          </li>
        </ul>
        <div className="pre-home-msg">
          <h1 className="welcome-msg">Music for everyone.</h1>
          <p className="welcome-ad">Millions of songs. No credit card needed.</p>
          <div className="welcome-signup-wrapper">
            <a className="welcome-signup" role="button" href="#/signup">
              <div className="welcome-signup-words">GET MODIFY FREE</div>
            </a>
          </div>
        </div>

        {/* TOOK OUT FOOTER */}
        {/* <footer className="footer">
          <div className="ft-logo">
            <a className="pre-logo-button" role="button" href="/">
              <img className="pre-white-logo" src={window.whiteLogo} />
              <span className="pre-white-modify">Modify</span>
            </a>
          </div>
        </footer> */}
      </div>
    )
  };

  const greetingMessage = () => {
    return(
      < Navbar 
        user={user}
        logout={logout}
      />
    )
  };


  return user ? greetingMessage() : sessionLinks();

};

export default Greeting;


// MOVED TO NAVBAR COMPONENT
      // <div className="logged-in">

      //   {/* NAV BAR */}
      //   <ul className="side-nav-bar">
      //     <li className="nav-logo">
      //       <a className="logo-button" role="button" href="/"> {/* logo button goes to HOME */}
      //         <img className="white-logo" src={window.whiteLogo} />
      //         <span className="white-modify">Modify</span>
      //       </a>
      //     </li>
      //     {/* MIGHT HAVE TO CHANGE TO BUTTONS */}
      //     {/* NEED IT TO HAVE A GREEN MARKER IF ON CURRENT TAB */}
      //     <li className="nav-home nav-tab">
      //       <a className="home-button button" role="button" href="/"> {/* href to where??  HOME + LOGO = SAME PLACE*/} 
      //         <img className="white-home-logo tab-icons" src={window.home}/>       {/* add image */}
      //         <span className="white-home tabs">Home</span>
      //       </a>
      //     </li>
      //     <li className="nav-search nav-tab">
      //       <a className="search-button button" role="button" href="/"> {/* href to where?? */}
      //         <img className="white-search-logo tab-icons" src={window.search}/>       {/* add image */}
      //         <span className="white-search tabs">Search</span>
      //       </a>
      //     </li>
      //     <li className="nav-library nav-tab">
      //       <a className="library-button button" role="button" href="/"> {/* href to where?? */}
      //         <img className="white-library-logo tab-icons" src={window.library}/>      {/* add image */}
      //         <span className="white-library tabs">Your Library</span>
      //       </a>
      //     </li>
      //     {/* @@@@@@@@@@@@@@@@@@@@ */}
      //     <li className="nav-profile">
      //       <a className="profile-button" role="button" href="/"> {/* href to where?? */}
      //         <img className="white-profile-logo"/>      {/* add image */}
      //         <span className="white-profile">{user.email}</span>
      //       </a>
      //     </li>
      //     <li className="nav-logout">
      //       <a className="logout-button" role="button" onClick={logout}>
      //         <div className="logout-msg tabs">Log Out</div>
      //       </a>
      //     </li>
      //   </ul>
        
      //   {/* MUSIC PLAYER */}
      //   <footer className="music">
      //     <div className="music-player"></div>
      //   </footer>

      //   {/* <p>Welcome, {user.email}</p> */}
      //   {/* TEST JUST TO LOGOUT */}
      //   {/* <button className="logout" onClick={logout}>Log Out</button> */}
      // </div>