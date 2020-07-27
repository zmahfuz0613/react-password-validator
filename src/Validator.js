
import React from "react";
import './Validator.css';



const initialState = {
  email: "",
  password: "",
  confirmpassword: "",
  emailError: "",
  passwordError: "",
  confirmpasswordError: "",
  valid: false
};

export default class Validator extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let emailError = "";
    let confirmpasswordError = ""
    let passwordError = ""

    if (this.state.password !== this.state.confirmpassword) {
     passwordError = "password doesn't match";
    }

    // if (!this.state.email.includes("@")) {
    //   emailError = "invalid email";
    // }
   

    if (emailError || confirmpasswordError) {
      this.setState({ emailError, confirmpasswordError });
      return false;
    } else if (passwordError || confirmpasswordError) {
      this.setState({ passwordError, confirmpasswordError })
      return false
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState({valid:true});
    } else {
      this.setState({valid:false})
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

         <div>
        <h1> Sign up</h1>
        </div>

        <div>
          <input
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>
        </div>
        <div>
          <input
            type="password"
            name="confirmpassword"
            placeholder="confirm password"
            value={this.state.confirmpassword}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.confirmpasswordError}
          </div>
          </div>
        <button type="submit">submit</button>

        <h4>{this.state.valid ? 'valid' : 'invalid'}</h4>

      </form>
    );
  }
}