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
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action({email: this.state.email, password: this.state.password});
  }

  demoLogin(e) {
    e.preventDefault();
    const demos = [
      {email: "young1@gmail.com", password: "password"},
      {email: "young2@gmail.com", password: "password"},
      {email: "young3@gmail.com", password: "password"},
      {email: "young4@gmail.com", password: "password"},
      {email: "young5@gmail.com", password: "password"}
    ];

    let random_demo = demos[Math.floor(Math.random() * 5)];

    this.props.action(random_demo);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i} className="login-error">
            {error}
          </li>
        ))}
      </ul>
    )
  }
  render() {
    return(
      <div className="login">
        <button className="logo-button">
           {/* check application.html.erb to add image */}
          <a className="login-logo" href="/">
            <img className="login-black-logo" src={window.blackLogo} />
            <span className="login-modify">Modify</span>
          </a>
        </button>
        <div className="login-form"><br/>
          <div className="login-message">To continue, log in to Modify.</div><br/>
            {/* DEMO BUTTON */}
          <button className="demo-button" onClick={this.demoLogin}>LOG IN WITH DEMO</button><br/> 
          <form onSubmit={this.handleSubmit} >
            <div className="or-border">
              <div className="or">OR</div>
            </div>
            <br/>
            <div className="login-error-message">{this.renderErrors()}</div>
            <div className="login-info">
              <br/>
              <label>
                <input type="text"
                  className="email-input"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email address"
                  />
              </label>
              <br/>
              <label>
                <input type="password"
                  className="password-input"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                  />
              </label>
              <br/>
              <div className="login-submit">
                <label className="remember-submit">
                  <input className="remember-checkbox" type="checkbox"/>
                  <div className="remember-me">Remember me</div>
                </label>
                <div className="login-space-between"></div>
                <input className="login-button" type="submit" value={this.props.formType} />
              </div>
              <br/>
              <div className="forgot-password"></div>
              <br/>
              <div className="signup-redirect">
                <div className="no-account">Don't have an account?</div> 
                <div className="signup-link-wrapper">
                  <a className="signup-link" role="button" onClick={this.props.clear} href="#/signup">SIGN UP FOR MODIFY</a>
                </div>
              </div>
              <br/>
              <div className="login-footer">
                <div className="ending-words">
                  If you click "Log in with Demo" and not a Spotify user, you should sign up and make an account afterwards.
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }

}

export default LoginForm;
