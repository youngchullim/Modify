import React from 'react';
import { Link } from 'react-router-dom';
import AuthComponent from '../auth';

import Navbar from '../navbar/navbar';

import HomeContainer from '../home/home_container';
import LibraryContainer from '../library/library_container';
import SearchContainer from '../search/search_container';

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
            <a className="pre-signup" role="button" href="/#/signup">Sign up</a>
          </li>
          <li className="pre-login-wrapper">
            <a className="pre-login-button" role="button" href="/#/login">
              <p className="login-back">Log In</p>
            </a>
          </li>
        </ul>
        <div className="pre-home-msg">
          <h1 className="welcome-msg">Music for everyone.</h1>
          <p className="welcome-ad">Millions of songs. No credit card needed.</p>
          <div className="welcome-signup-wrapper">
            <a className="welcome-signup" role="button" href="/#/signup">
              <div className="welcome-signup-words">GET MODIFY FREE</div>
            </a>
          </div>
        </div>
      </div>
    )
  };

  const greetingMessage = () => {
    return(
      < AuthComponent
        user={user}
        logout={logout}
      />
    )
  };


  return user ? greetingMessage() : sessionLinks();

};

export default Greeting;