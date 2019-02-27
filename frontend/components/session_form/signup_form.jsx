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
{/* DEMO ACCOUNT */} *DEMO ACCOUNT*
          <br/> or <br/>
          Sign up with your email address
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
              <input type="text"
                placeholder="Confirm email"
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
            <label>
              <input type="text"
                placeholder="What should we call you?"
                />
            </label>
            <br/>
            <br/>
            Date of birth
            <br/>
            <select>
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
            &nbsp;&nbsp;
            <label>
              <input type="text" placeholder="Day"/>
            </label>
            &nbsp;&nbsp;
            <label>
              <input type="text" placeholder="Year"/>
            </label>
            <br/>
            <label>
              <input type="radio" name="gender" value="male"/> Male &nbsp;&nbsp;
              <input type="radio" name="gender" value="female"/> Female &nbsp;&nbsp;
              <input type="radio" name="gender" value="non-binary"/> Non-binary
            </label>
            <br/>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
            <br/>
            <br/>
            Already have an account? {this.props.navLink}
          </div>
        </form>
      </div>
    )
  }

}

export default SignupForm;
