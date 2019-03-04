import React from 'react';
import { butoon, Link, NavLink } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';


class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.state;
  }

  render() {
    return(
      <div>
        <div className="navbar-home">
          {/* <ProtectedRoute path="/" component={NavbarContainer} /> */}
          {/* <NavbarContainer /> */}
          <ul>
            <li className="home-featured">
                  {/* USED !IMPORTANT CSS RULE */}
              <NavLink className="logo-button" activeStyle={{}} activeClassName="selected-home-tab" to="/home/featured"> {/* logo button goes to HOME */}
                <span className="featured">Featured</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Home;