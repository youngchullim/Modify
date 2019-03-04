import React from 'react';
import { butoon, Link, NavLink } from 'react-router-dom';


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
        <div>
          <ul className="home-tabs">
            <li className="home-featured">
                  {/* USED !IMPORTANT CSS RULE */}
              <NavLink className="featured-link h-link" activeStyle={{}} activeClassName="selected-home-tab" to="/home/featured"> {/* logo button goes to HOME */}
                <span className="featured h-tabs">Featured</span>
              </NavLink>
            </li>
            <li className="home-genre">
                  {/* USED !IMPORTANT CSS RULE */}
              <NavLink className="genre-link h-link" activeStyle={{}} activeClassName="selected-home-tab" to="/home/genre"> {/* logo button goes to HOME */}
                <span className="genre h-tabs">Genre</span>
              </NavLink>
            </li>
            <li className="home-discover">
                  {/* USED !IMPORTANT CSS RULE */}
              <NavLink className="discover-link h-link" activeStyle={{}} activeClassName="selected-home-tab" to="/home/discover"> {/* logo button goes to HOME */}
                <span className="discover h-tabs">Discover</span>
              </NavLink>
            </li>
          </ul>

          {/* <div >Made for {user}</div> */}
        </div>
      </div>
    )
  }
}

export default Home;