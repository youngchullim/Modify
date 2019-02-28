import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
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

    this.props.login(random_demo);
  }
  
  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i} className="signup-error">
            {error}
          </li>
        ))}
      </ul>
    )
  }
  render() {
    return(
      <div className="signup">
        <button className="logo-button">
          <a className="signup-logo" href="/">
            <img className="signup-black-logo" src={window.blackLogo} />
            <span className="signup-modify">Modify</span>
          </a>
        </button>

        <form onSubmit={this.handleSubmit} className="signup-form"><br/>
          {/* DEMO BUTTON */}
          <button className="sn-demo-button" onClick={this.demoLogin}>LOG IN WITH DEMO</button><br/> 
          <div className="sn-or-border">
            <div className="sn-or">or</div>
          </div>
          <div className="signup-message">Sign up with your email address</div>
          <span className="required-fields">*</span>
          <span className="required-msg">Required fields</span>
          <div className="signup-error-messages">{this.renderErrors()}</div>

          <div className="signup-info">
            <br/>
            <label>
              <span className="required">*</span>
              <input type="text"
                className="email input"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
                />
            </label>
            <br/>
            <label>
              <input type="text"
                className="confirm-email input input-space"
                placeholder="Confirm email"
                />
            </label>
            <br/>
            <label>
              <span className="required">*</span>
              <input type="password"
                className="password input input-space"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password: minimum 6 characters"
                />
            </label>
            <br/>
            <label>
              <input type="text"
                className="username input input-space"
                placeholder="What should we call you?"
                />
            </label>
            <br/>
            <br/>
            <div className="dob-text">Date of birth</div>
            <br/>
            <select className="dob-month" placeholder="Month">
              <option value="month">Month</option>
              <option value="jan">January</option>
              <option value="feb">February</option>
              <option value="mar">March</option>
              <option value="apr">April</option>
              <option value="may">May</option>
              <option value="jun">June</option>
              <option value="jul">July</option>
              <option value="aug">August</option>
              <option value="sep">September</option>
              <option value="oct">October</option>
              <option value="nov">November</option>
              <option value="dec">December</option>
            </select> 
            
            <label>
              <input className="dob-day dob" type="text" placeholder="Day"/>
            </label>
            
            <label>
              <input className="dob-year dob" type="text" placeholder="Year"/>
            </label>
            <br/>
            <label className="m-label">
              <input className="male pos-gen" type="radio" name="gender" value="male"/>
              <div className="m mfb">Male</div>
            </label>
            <label className="f-label">
              <input className="female pos-gen" type="radio" name="gender" value="female"/>
              <div className="f mfb">Female</div>
            </label>
            <label className="b-label">
              <input className="non-binary pos-gen" type="radio" name="gender" value="non-binary"/>
              <div className="b mfb">Non-binary</div>
            </label>
            <br/>
            <br/>
            <input className="signup-button" type="submit" value={this.props.formType} />
            <br/>
            <br/>
            <span className="login-msg">Already have an account?</span>
            <span className="login-link-wrapper">
              <a className="login-link login-msg" role="button" onClick={this.props.clear} href="#/login">Log In</a>
            </span>
          </div>
        </form>
      </div>
    )
  }

}

export default SignupForm;
