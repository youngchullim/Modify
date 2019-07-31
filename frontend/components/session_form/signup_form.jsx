import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      confirmEmail: "",
      password: "",
      year: "",
      day: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);

// TEST
    this.renderEmailErrors = this.renderEmailErrors.bind(this);
    this.renderConfirmEmailErrors = this.renderConfirmEmailErrors.bind(this);
    this.renderPasswordErrors = this.renderPasswordErrors.bind(this);
    this.renderYearErrors = this.renderYearErrors.bind(this);
    this.renderDayErrors = this.renderDayErrors.bind(this);
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

    // If I use multiple accounts, sign out and login with different accounts, it stays in the home page.
    const demos = [
      {email: "young1@gmail.com", password: "password"},
      {email: "young2@gmail.com", password: "password"},
      {email: "young3@gmail.com", password: "password"},
      {email: "young4@gmail.com", password: "password"},
      {email: "young5@gmail.com", password: "password"}
    ];

    let random_demo = demos[Math.floor(Math.random() * 5)];

    // If I login with just one account it redirects to music player
    let random_demo2 = {email: "young1@gmail.com", password: "password"};
    this.props.login(random_demo2);
  }

  renderEmailErrors() {
    if (this.state.email.length > 0) {
      let email = this.state.email.split("");
      if (email.includes("@") && email.includes(".")) {
        if (this.props.errors.length > 0) {
          return(
            <span className="signup-error">We're sorry, that email is taken.</span>
          )
        }
      } else {
        return (
          <span className="signup-error">The email address you supplied is invalid.</span>
        )
      }
    }
  }

  renderConfirmEmailErrors() {
    if (this.state.confirmEmail.length > 0 && this.state.email !== this.state.confirmEmail) {
      return(
        <span className="signup-error">Email address doesn't match.</span>
      )
    }
  }

  renderPasswordErrors() {
    if (this.state.password.length < 6 && this.state.password.length !== 0) {
      return (
        <span className="signup-error">Your password is too short.</span>
      )
    }
  }

  renderYearErrors() {
    let numbers = /^\d+$/.test(this.state.year);
    if (numbers || this.state.year === "") {
      if (parseInt(this.state.year) < 1900) {
        return(
          <span className="signup-error">Please enter a valid year.</span>
        )
      } else if (parseInt(this.state.year) > 2006) {
        return(
          <span className="signup-error">Sorry, but you don't meet Modify's age requirements.</span>
        )
      }
    } else {
      return(
        <span className="signup-error">Please enter a valid year with numbers.</span>
      )
    }
  }

  renderDayErrors() {
    let numbers = /^\d+$/.test(this.state.day);
    if (numbers || this.state.day === "") {
      if (parseInt(this.state.day) > 31 || parseInt(this.state.day) < 1) {
        return(
          <span className="signup-error">Please enter a valid day of the month.</span>
        )
      }
    } else {
      return(
        <span className="signup-error">Please enter a valid day with numbers.</span>
      )
    }
  }
  
  renderErrors() {
    if (this.props.errors.length > 0) {
      return(
        <span className="signup-error">{this.props.errors[0]}</span>
      )
    }
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

        <div className="signup-form"><br/>
          {/* DEMO BUTTON */}
        <button className="sn-demo-button" onClick={this.demoLogin}>LOG IN WITH DEMO</button><br/> 
          <form onSubmit={this.handleSubmit}>
            <div className="sn-or-border">
              <div className="sn-or">or</div>
            </div>
            <div className="signup-message">Sign up with your email address</div>
            <span className="required-fields">*</span>
            <span className="required-msg">Required fields</span>
            <div className="signup-error-msg">{this.renderErrors()}</div>

            <div className="signup-info">
              <br/>
              <label>
                <span className="required">*</span>
                <input type="text"
                  className="email input"
                  value={this.state.email}
                  onChange={this.update('email')}
                  onClick={this.props.clear}
                  placeholder="Email"
                  />
                <div className="signup-error-messages">{this.renderEmailErrors()}</div>
              </label>

              <br/>
              <label>
                <input type="text"
                  className="confirm-email input input-space"
                  value={this.state.confirmEmail}
                  onChange={this.update('confirmEmail')}
                  placeholder="Confirm email"
                  />
                <div className="signup-error-messages">{this.renderConfirmEmailErrors()}</div>
              </label>

              <br/>
              <label>
                <span className="required">*</span>
                <input type="password"
                  className="password input input-space"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                  />
                  <div className="signup-error-messages">{this.renderPasswordErrors()}</div>
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
                <input 
                  className="dob-day dob" 
                  value={this.state.day} 
                  onChange={this.update("day")} 
                  type="text" 
                  placeholder="Day"/>
              </label>
              
              <label>
                <input 
                  className="dob-year dob" 
                  value={this.state.year} 
                  onChange={this.update("year")} 
                  type="text" 
                  placeholder="Year"/>
                <div className="signup-error-messages">{this.renderDayErrors()}</div>
                <div className="signup-error-messages">{this.renderYearErrors()}</div>
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
      </div>
    )
  }

}

export default SignupForm;
