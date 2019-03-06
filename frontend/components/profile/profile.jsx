import React from 'react';
import { button, Link, NavLink } from 'react-router-dom';


class Profile extends React.Component {
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
      <div className="navbar-profile">
        <ul className="profile-list">
        <li>
          <h1 className="profile-title">
            Profile:
          </h1>
        </li>
          <li className="profile-email">
            <span className="email-msg">Email:</span><span className="user-email">{this.props.user.email}</span>
          </li>
          <li className="profile-logout">
              <a className="profile-logout-button" role="button" onClick={this.props.logout}>
                <div className="profile-logout-msg">Log Out</div>
              </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Profile;