import React from 'react';
import { button, Link, NavLink } from 'react-router-dom';

import FeaturedContainer from '../featured/featured_container';
import GenreContainer from '../genre/genre_container';
import DiscoverContainer from '../discover/discover_container';

import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';


class Home extends React.Component {
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
      <div className="navbar-home">
        <div className="nav">
          <ul className="home-tabs">
            <li className="home-featured">
                  {/* USED !IMPORTANT CSS RULE */}
              <NavLink className="featured-link h-link" activeStyle={{}} activeClassName="selected-home-tab" exact to="/home"> {/* logo button goes to HOME */}
                <span className="featured h-tabs">Featured</span>
              </NavLink>
            </li>
            <li className="home-genre">
                  {/* USED !IMPORTANT CSS RULE */}
              <NavLink className="genre-link h-link" activeStyle={{}} activeClassName="selected-home-tab" to="/home/genre"> {/* logo button goes to HOME */}
                <span className="genre h-tabs">Genre</span>
              </NavLink>
            </li>
            {/* <li className="home-discover">
              <NavLink className="discover-link h-link" activeStyle={{}} activeClassName="selected-home-tab" to="/home/discover"> 
                <span className="discover h-tabs">Discover</span>
              </NavLink>
            </li> */}
          </ul>

          {/* <div >Made for {user}</div> */}
        </div>

        <Switch>
          <ProtectedRoute exact path="/home" component={FeaturedContainer} />
          <ProtectedRoute path="/home/genre" component={GenreContainer} />
          {/* <ProtectedRoute path="/home/discover" component={DiscoverContainer} /> */}
        </Switch>
      </div>
    )
  }
}

export default Home;