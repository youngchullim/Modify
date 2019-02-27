import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i}>
            {error}
          </li>
        ))}
      </ul>
    )
  }
  render() {
    return(
      <div >
        <h1>*MODIFY LOGO*</h1>
        <form onSubmit={this.handleSubmit}>
          <br/> To continue, log in to Modify. <br/>
{/* DEMO ACCOUNT */} *DEMO ACCOUNT*
          <br/> or <br/>
          {this.renderErrors()}
          <div className="signup-form">
            <br/>
            <label>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
                />
            </label>
            <br/>
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                />
            </label>
            <br/>
            <br/>
            <input type="checkbox"/>Remember me &nbsp;&nbsp;
            <input className="session-submit" type="submit" value={this.props.formType} />
            <br/>
            <br/>
            Don't have an account? {this.props.navLink}
          </div>
        </form>
      </div>
    )
  }

}

export default LoginForm;
