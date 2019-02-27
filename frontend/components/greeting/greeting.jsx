import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ user, logout }) => {
  const sessionLinks = () => {
    return(
      <div>
        <Link to="/login">Log In</Link>
        <br/>
        <Link to="/signup">Sign Up</Link>
      </div>
    )
  };

  const greetingMessage = () => {
    return(
      <div>
        <p>Welcome, {user.email}</p>
        <button onClick={logout}>Log Out</button>
      </div>
    )
  };

  return user ? greetingMessage() : sessionLinks();

};

export default Greeting;